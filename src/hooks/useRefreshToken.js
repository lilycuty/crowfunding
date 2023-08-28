import axios from 'src/api/axios'
import { authUpdateUser } from 'src/store/auth/auth-slice'
import { getToken, saveToken } from 'src/utils/auth'

//Trả ra accessToken thông qua hàm refreshToken
export default function useRefreshToken() {
  async function refresh() {
    const { refresh_token } = getToken()
    if (!refresh_token) return null
    const response = await axios.post('/token', {
      'Content-Type': 'application/json',
      refreshToken: refresh_token
    })
    if (!response.data) return null
    saveToken(response.data.accessToken, response.data.refreshToken)
    authUpdateUser((prev) => ({
      ...prev,
      accessToken: response.data.accessToken
    }))
    return response.data.accessToken || ''
  }
  return refresh
}
