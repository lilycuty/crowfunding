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
        ...state,
        ...action.payload
      }
    },
    authRegister: (state, action) => ({
      ...state,
      ...action.payload
    }),
    authUpdateUser: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken
      }
    }
  }
})

export const { authLogin, authRegister, authUpdateUser } = authSlice.actions
export default authSlice.reducer
