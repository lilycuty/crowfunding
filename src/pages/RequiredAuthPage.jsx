import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

const RequiredAuthPage = ({ allowPermissions }) => {
  const { user } = useSelector((state) => state.auth)
  console.log('RequiredAuthPage ~ user', user)
  const userPermissions = user.permissions
  const location = useLocation()
  console.log('RequiredAuthPage ~ location', location)
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!user || !user?.email) {
  //     navigate('/login')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user])

  // //Flow dữ liệu nó sẽ chạy vào đây trước khi vào useEffect lên ta thêm dòng 18 để tránh trường hợp nó sẽ load chớp nhanh cái trang chủ
  // if (!user || !user?.email) return null
  return userPermissions?.find((p) => allowPermissions?.includes(p)) ? (
    <Outlet></Outlet>
  ) : user ? (
    <Navigate to='/unauthorize' replace state={{ from: location }}></Navigate>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace></Navigate>
  )
}
RequiredAuthPage.propTypes = {
  allowPermissions: PropTypes.array
}
export default RequiredAuthPage
