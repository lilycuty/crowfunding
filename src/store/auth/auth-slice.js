/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    accessToken: null
  },
  reducers: {
    authLogin: (state, action) => {
      return {
        ...state
        // ...action.payload
      }
    },
    authRegister: (state, action) => ({
      ...state,
      ...action.payload
    }),
    authUpdateUser: (state, action) => {
      console.log('authUpdateUser-action', action)
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken
      }
    },
    authFetchMe: (state, action) => {
      console.log('authFetchMe action', action)
      return {
        ...state,
        ...action.payload
      }
    },
    authRefreshToken: (state, action) => ({
      //Gửi refresh_token lên server để lấy access_token mới
    }),
    authLogout: (state, action) => ({})
  }
})

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogout
} = authSlice.actions
export default authSlice.reducer
