import { call } from 'redux-saga/effects'
import { requestAuthLogin, requestAuthRegister } from './auth-requests'
import { toast } from 'react-toastify'
import { saveToken } from 'src/utils/auth'

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

// eslint-disable-next-line no-unused-vars
function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload)
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken)
    }
    yield 1
  } catch (error) {
    console.log('function*handleAuthLogin ~ error', error)
  }
}

export { handleAuthLogin }
