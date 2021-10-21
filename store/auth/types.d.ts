export interface IUser {
  email: string
  firstName: string
  lastName: string
  gender: string
  phone: string
  role: string
}

export interface IAuthState {
  user: IUser | null
  isAuthenticated: boolean
}
