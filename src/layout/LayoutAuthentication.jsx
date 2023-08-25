/* eslint-disable react-refresh/only-export-components */
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../components/common/ErrorComponent'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const LayoutAuthentication = (props) => {
  const { heading = '', children } = props
  const { user } = useSelector((state) => state.auth)
  console.log('LayoutAuthentication ~ user', user)
  const navigate = useNavigate()
  //Nếu đăng nhập rồi thì sẽ ko chạy vào trang SignIn mà về Trang chủ
  useEffect(() => {
    if (user && user?.email) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  if (user && user?.email) return null

  return (
    <div className='w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate'>
      <img
        src='/ellipse.png'
        alt='Elippse'
        className='pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]'
      />
      <Link to='/' className='inline-block mb-5 lg:mb-16'>
        <img srcSet='/logo.png 2x' alt='Crowfunding-app' />
      </Link>
      <div className='w-full max-w-[556px] mx-auto bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-[60px] lg:py-[50px] shadow'>
        <h1 className='font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 dark:text-white text-center'>
          {heading}
        </h1>
        {children}
      </div>
    </div>
  )
}

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node
}
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent
})
