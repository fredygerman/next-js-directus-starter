export interface IAuthState {
      user: IAppUser | null | undefined;
      token: string | undefined;
}
export interface IAdminState {
      user: IAdmin | null | undefined;
      googleIdToken: IAdmin | null | undefined;
      error: string | undefined;
      loading: 'idle' | 'pending' | 'succeeded' | 'failed' | undefined;
}

export interface IAdmin {

}

export interface IAppUser {

}

export interface IGoogleLoginData {
      id: string | undefined;
      email: string | null;
      id_token: string | null | undefined;
}