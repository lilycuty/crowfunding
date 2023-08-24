import { call, put } from 'redux-saga/effects'
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister
} from './auth-requests'
import { toast } from 'react-toastify'
import { saveToken } from 'src/utils/auth'
import { authUpdateUser } from './auth-slice'

export default function* handleAuthRegister(action) {
  try {
    const { payload } = action
    const response = yield call(requestAuthRegister, payload)
    if (response.status === 201) {
      toast.success('Created new account successfully')
    }
  } catch (error) {
    console.log(error)
  }
}

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload)
    console.log('function*handleAuthLogin ~ response', response)
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken)
      yield call(handleAuthFetchMe, { payload: response.data.accessToken })
    }
  } catch (error) {
    console.log('function*handleAuthLogin ~ error', error)
  }
}

function* handleAuthFetchMe({ payload }) {
  console.log('function*handleAuthFetchMe ~ payload', payload)
  try {
    const response = yield call(requestAuthFetchMe, payload)
    console.log('function*handleAuthFetchMe ~ response', response)
    //response.data -> userInfo
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload
        })
      )
    }
  } catch (error) {
    console.log('function*handleAuthFetchMe ~ error', error)
  }
}
function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload)
    console.log('function*handleAuthRefreshToken ~ response', response)
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken)
      yield call(handleAuthFetchMe, { payload: response.data.accessToken })
    } else {
      //Log-out
    }
  } catch (error) {
    console.log('function*handleAuthRefreshToken ~ error', error)
  }
}
export { handleAuthLogin, handleAuthFetchMe, handleAuthRefreshToken }
