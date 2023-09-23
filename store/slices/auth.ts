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

export const storedUser = (state: RootState) => state.auth.user || null
export const storedAuth = (state: RootState) => state.auth.auth || null
export const storedToken = (state: RootState) =>
  state.auth?.auth?.access_token || null

export default authSlice.reducer
