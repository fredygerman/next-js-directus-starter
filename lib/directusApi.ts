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
  isRegistering: boolean = false
) => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    }

    const token = isRegistering
      ? env.DIRECTUS_USER_CHEATER_TOKEN
      : bodyData?.access_token

    if (useAuthHeader) {
      headers["Authorization"] = `Bearer ${token}`
    }

    const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(bodyData),
    })

    console.log("response from", endpoint, "is : ", response)

    return handleApiResponse(response)
  } catch (err) {
    console.error(err)
    return {
      message: "Something went wrong",
      success: false,
    }
  }
}
