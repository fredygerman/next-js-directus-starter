"use server"

import { FormActionResponse } from "@/types/general"
import { userData } from "@/types/user"
import { env } from "@/env.mjs"
import { sendDirectusApiRequest } from "@/lib/directusApi"
import { getResponseMessage } from "@/lib/utils"

const forgotPassword = async (email: string): Promise<FormActionResponse> => {
  const endpoint = "/auth/password/request"
  const method = "POST"
  const bodyData = { email }

  return sendDirectusApiRequest(endpoint, method, bodyData)
}

const passwordReset = async (
  password: string,
  password_reset_token: string
): Promise<FormActionResponse> => {
  const endpoint = "/auth/password/reset"
  const method = "POST"
  const bodyData = { password, password_reset_token }

  return sendDirectusApiRequest(endpoint, method, bodyData)
}

const logout = async (refresh_token: string): Promise<FormActionResponse> => {
  const endpoint = "/auth/logout"
  const method = "POST"
  const bodyData = { refresh_token }

  return sendDirectusApiRequest(endpoint, method, bodyData, true)
}

const login = async (
  email: string,
  password: string
): Promise<FormActionResponse> => {
  const endpoint = "/auth/login"
  const method = "POST"
  const bodyData = { email, password }

  const loginResponse = await sendDirectusApiRequest(endpoint, method, bodyData)

  if (loginResponse.success) {
    const tokenExpirationAdjustmentTime: number =
      (env.DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT as unknown as number) || 86400

    const auth = {
      access_token: loginResponse?.data?.data?.access_token,
      refresh_token: loginResponse?.data?.data?.refresh_token,
      expires_in: new Date(
        new Date().getTime() +
          (loginResponse.data?.data?.expires - tokenExpirationAdjustmentTime) *
            1000
      ).toUTCString(),
    }

    const getCurrentUserResponse = await getCurrentUser(auth.access_token)

    if (!getCurrentUserResponse.success) {
      return getCurrentUserResponse
    }

    const user: userData = getCurrentUserResponse.data

    const data = {
      user,
      auth,
    }

    return {
      data,
      message: `You have successfully logged in`,
      success: true,
    }
  }

  return loginResponse
}

const register = async (
  email: string,
  password: string,
  first_name: string,
  last_name: string
): Promise<FormActionResponse> => {
  const endpoint = "/users"
  const method = "POST"
  const bodyData = {
    email,
    password,
    first_name,
    last_name,
    role: `${env.DIRECTUS_DEFAULT_ROLE_ID}`,
  }

  // Register the user and log them in
  const registrationResponse = await sendDirectusApiRequest(
    endpoint,
    method,
    bodyData,
    true
  )

  // console.log("registrationResponse is : ", registrationResponse)

  if (registrationResponse.success) {
    // from registration response remove password , and token
    delete registrationResponse.data?.data?.password
    // delete registrationResponse.data?.data?.token

    const loginResponse = await login(
      registrationResponse.data.data.email,
      password
    )

    // console.log("loginResponse is : ", loginResponse)

    if (!loginResponse.success) {
      return loginResponse
    }

    if (loginResponse.success) {
      const user: userData = registrationResponse.data?.data
      const auth = loginResponse.data?.auth
      const data = {
        user,
        auth,
      }
      // console.log("we have logged in the user", user, auth)
      return {
        data,
        message: `You have successfully \nregistered and logged in`,
        success: true,
      }
    }
  }

  return registrationResponse
}

const getCurrentUser = async (
  access_token: string
): Promise<FormActionResponse> => {
  const endpoint = "/users/me"
  const method = "GET"
  const bodyData = {
    access_token,
  }

  const getCurrentUserResponse = await sendDirectusApiRequest(
    endpoint,
    method,
    bodyData,
    true
  )

  if (getCurrentUserResponse.success) {
    // from registration response remove password , and token
    delete getCurrentUserResponse.data?.data?.password
    // delete registrationResponse.data?.data?.token

    const user: userData = getCurrentUserResponse.data?.data
    console.log("user is : ", user)
    return {
      data: user,
      message: `You have successfully \nregistered and logged in`,
      success: true,
    }
  }

  return {
    message: "Unauthorized,  please log in again",
    success: false,
  }
}

// const getNewToken = async (
//   refresh_token: string
// ): Promise<FormActionResponse> => {
//   const endpoint = "/auth/refresh"
//   const method = "POST"
//   const bodyData = {
//     refresh_token,
//     mode: "json",
//   }

//   const getNewTokenResponse = await sendDirectusApiRequest(
//     endpoint,
//     method,
//     bodyData,
//     true,
//     false
//   )

//   if (getNewTokenResponse.success) {
//     //  we will get new auth object
//     const tokenExpirationAdjustmentTime: number =
//       (env.DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT as unknown as number) || 86400

//     const auth = {
//       access_token: getNewTokenResponse?.data?.data?.access_token,
//       refresh_token: getNewTokenResponse?.data?.data?.refresh_token,
//       expires_in: new Date(
//         new Date().getTime() +
//           (getNewTokenResponse.data?.data?.expires -
//             tokenExpirationAdjustmentTime) *
//             1000
//       ).toUTCString(),
//     }

//     console.log("new auth is : ", auth)
//     return {
//       data: auth,
//       message: `New Auth object is created`,
//       success: true,
//     }
//   }

//   return {
//     message: "Please log in again",
//     success: false,
//   }
// }

export {
  login,
  forgotPassword,
  logout,
  register,
  passwordReset,
  getCurrentUser,
}
