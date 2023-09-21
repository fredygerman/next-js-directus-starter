import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { IAuthState } from "@/types/auth"

import { RootState } from ".."

const initialState: IAuthState = {
  user: null,
  auth: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<IAuthState>) => {
      let payload = action.payload
      state.user = payload.user
      state.auth = payload.auth
    },
    updateUser: (state, action: PayloadAction<any>) => {
      let payload = action.payload
      state.user = payload
    },
    logoutUser: (state) => {},
  },
})

export const { logoutUser, setAuthState, updateUser } = authSlice.actions

export const user = (state: RootState) => state.auth.user
export const token = (state: RootState) => state.auth.token

export default authSlice.reducer
