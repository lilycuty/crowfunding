import { useSelector } from 'react-redux'
import useRefreshToken from './useRefreshToken'
import { useEffect } from 'react'
import { axiosPrivate } from 'src/api/axios'

//Dùng để gọi các API cần accessToken
export default function useAxiosPrivate() {
  const refresh = useRefreshToken()
  const { auth } = useSelector((state) => state)
  useEffect(() => {
    const resquestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          // Thêm một tiêu đề xác thực vào tất cả các yêu cầu
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          return axiosPrivate(prevRequest)
        }
        return Promise.reject(error)
      }
    )

    return () => {
      axiosPrivate.interceptors.request.eject(resquestInterceptor)
      axiosPrivate.interceptors.response.eject(responseInterceptor)
    }
  }, [auth.accessToken, refresh])

  return axiosPrivate
}
