import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user || !user?.email) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  //Flow dữ liệu nó sẽ chạy vào đây trước khi vào useEffect lên ta thêm dòng 18 để tránh trường hợp nó sẽ load chớp nhanh cái trang chủ
  if (!user || !user?.email) return null
  return <>{children}</>
}
RequiredAuthPage.propTypes = {
  children: PropTypes.node
}
export default RequiredAuthPage
