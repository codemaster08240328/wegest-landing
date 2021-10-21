import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { reducer as authReducer } from './auth'

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk = ThunkAction<void, AppState, unknown, Action>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const wrapper = createWrapper<AppState>(makeStore)
