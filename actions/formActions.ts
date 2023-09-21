"use server"

import { env } from "@/env.mjs"

const login = async (email: string, password: string) => {
  await fetch(`${env.DIRECTUS_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.error) {
        console.log(data.error)
        // setLoginError(data.message);
        return data
      }
      // setLoginError('');
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

export default login
