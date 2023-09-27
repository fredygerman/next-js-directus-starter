import { env } from "@/env.mjs"

import { getResponseMessage } from "./utils"

const handleApiResponse = async (response: Response) => {
  try {
    const data = await response.json()
    console.log(data)

    if (!data.errors) {
      return {
        data: data,
        message: "Operation successful",
        success: true,
      }
    }

    const errorMessage = await getResponseMessage(data)
    console.log(errorMessage)
    return {
      message: errorMessage,
      success: false,
    }
  } catch (err) {
    console.error(err)
    return {
      message: "Something went wrong",
      success: false,
    }
  }
}

export const sendDirectusApiRequest = async (
  endpoint: string,
  method: string,
  bodyData: any,
  useAuthHeader: boolean = false,
  cache: boolean = false
) => {
  try {
    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    }

    const isRegistering = endpoint === "/users" && method === "POST"

    if (useAuthHeader) {
      const token = isRegistering
        ? env.DIRECTUS_USER_CREATOR_TOKEN
        : bodyData?.access_token // maybe we should just always keep the token in the local storage and use it from there

      console.log("token used is : ", token)

      headers["Authorization"] = `Bearer ${token}`
    }

    if (!cache) {
      const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
        method: method,
        headers: headers,
        body: method === "GET" ? undefined : JSON.stringify(bodyData),
        cache: "no-store",
      })
      console.log("response from", endpoint, "is : ", JSON.stringify(response))

      return handleApiResponse(response)
    }

    const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
      method: method,
      headers: headers,
      body: method === "GET" ? undefined : JSON.stringify(bodyData),
    })
    console.log("response from", endpoint, "is : ", JSON.stringify(response))

    return handleApiResponse(response)
  } catch (err) {
    console.error(err)
    return {
      message: "Something went wrong",
      success: false,
    }
  }
}
