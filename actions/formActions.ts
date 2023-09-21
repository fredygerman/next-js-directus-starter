"use server"

import { env } from "@/env.mjs"
import { responseMessages } from "@/config/messages"

const login = async (email: string, password: string) => {
  await fetch(`${env.DIRECTUS_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data from login", data)

      if (!data.errors) {
        return data
      }

      // console.log(data.errors[0].extensions.code)
      let errorCode = data.errors[0].extensions.code
        ? data.errors[0].extensions.code
        : "UNKNOWN_ERROR"
      const errorMessage =
        responseMessages.directusAPI.login[
          errorCode as keyof typeof responseMessages.directusAPI.login
        ] || "Something went wrong"
      console.log(errorMessage)
      return errorMessage
    })
    .catch((err) => {
      console.log(err)
      return "Something went wrong"
    })
}

export default login
