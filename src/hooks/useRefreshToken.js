import axios from 'src/api/axios'
import { authUpdateUser } from 'src/store/auth/auth-slice'
import { getToken } from 'src/utils/auth'

//Trả ra accessToken thông qua hàm refreshToken
export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken()
    if (!refresh_token) return null
    const response = await axios.post('/token', {
      'Content-Type': 'application/json',
      refreshToken: refresh_token
    })
    authUpdateUser((prev) => ({
      ...prev,
      accessToken: response?.data?.accessToken
    }))
    return response?.data?.accessToken || ''
  }
  return refresh
}
