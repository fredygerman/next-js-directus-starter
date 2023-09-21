export interface IAuthState {
  user: IAppUser | null | undefined
  auth: TAuth | null | undefined
}
export interface IAdminState {
  user: IAdmin | null | undefined
  googleIdToken: IAdmin | null | undefined
  error: string | undefined
  loading: "idle" | "pending" | "succeeded" | "failed" | undefined
}

export type TAuth = {
  access_token: string | null | undefined
  expires_in: number | null | undefined
  refresh_token: string | null | undefined
}

export interface IAdmin {}

export interface IAppUser {}

export interface IGoogleLoginData {
  id: string | undefined
  email: string | null
  id_token: string | null | undefined
}
