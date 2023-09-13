import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "..";
import { IAuthState } from "@/types/auth";

const initialState: IAuthState = {
      user: null,
      token: '',
}

export const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            setAuthState: (state, action: PayloadAction<IAuthState>) => {
                  let payload = action.payload;

                  state.user = payload.user;
                  state.token = payload.token;
            },
            updateUser : (state, action: PayloadAction<any>) => {
                  let payload = action.payload;

                  state.user = payload;
            },
            logoutUser: (state) => {

            }
      }
});

export const { logoutUser, setAuthState, updateUser } = authSlice.actions;

export const user = (state: RootState) => state.auth.user;
export const token = (state: RootState) => state.auth.token;

export default authSlice.reducer;