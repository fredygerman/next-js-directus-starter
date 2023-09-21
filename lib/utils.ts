import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { responseMessages } from "@/config/messages"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getResponseMessage(data: any) {
  // check if data is an object and if  data.errors[0].extensions.code exists in data object, if it does
  // then return the message from responseMessages object, if not return the default message

  if (
    typeof data === "object" &&
    data.errors &&
    data.errors[0].extensions.code
  ) {
    if (data.errors[0].extensions.code === "TOKEN_EXPIRED") {
      // !TODO: call logout function here to clear local storage
      return "Your session has expired, please log in again"
    }
    const errorMessage =
      responseMessages[
        data.errors[0].extensions.code as keyof typeof responseMessages
      ] || responseMessages.UNKNOWN_ERROR
    return errorMessage
  }

  // check if data. message exists in data object, if it does return it otherwise return the default message
  if (typeof data === "object" && data.message) {
    return data.message
  }

  return responseMessages.UNKNOWN_ERROR
}
