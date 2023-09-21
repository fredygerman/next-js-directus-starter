"use server"

import { FormActionResponse } from "@/types/general"
import { userData } from "@/types/user"
import { env } from "@/env.mjs"
import { sendDirectusApiRequest } from "@/lib/directusApi"

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

  return sendDirectusApiRequest(endpoint, method, bodyData)
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
    true,
    true
  )

  if (registrationResponse.success) {
    // from registration response remove password , and token
    delete registrationResponse.data?.password
    delete registrationResponse.data?.token

    const loginResponse = await login(email, password)

    if (!loginResponse.success) {
      return loginResponse
    }

    if (loginResponse.success) {
      const user: userData = registrationResponse.data.data
      const tokenExpirationAdjustmentTime: number =
        (env?.DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT as unknown as number) ||
        86400

      const auth = {
        access_token: loginResponse?.data?.data?.access_token,
        refresh_token: loginResponse?.data?.data?.refresh_token,
        expires_in: new Date(
          new Date().getTime() +
            (loginResponse.data?.data?.expires -
              tokenExpirationAdjustmentTime) *
              1000
        ).toUTCString(),
      }
      // console.log("we have logged in the user", user, auth)
      return {
        data: {
          user,
          auth,
        },
        message: "You have successfully been registered and logged in",
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

  return sendDirectusApiRequest(endpoint, method, bodyData, true)
}

export {
  login,
  forgotPassword,
  logout,
  register,
  passwordReset,
  getCurrentUser,
}
