import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, IUser } from './types'
import { AppState } from '..'

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state, action: PayloadAction<IUser>) {
      state.user = action.payload
      state.isAuthenticated = true
    },
    signout(state) {
      state.user = null
      state.isAuthenticated = false
    },
    signup(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
  },
})

export const selectUser = (state: AppState) => state.auth.user

export const { actions, reducer } = authSlice
