/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../components/common/ErrorComponent'

const LayoutAuthentication = (props) => {
  const { heading, children } = props
  return (
    <div className='w-full min-h-screen bg-lite p-10 relative isolate'>
      <img
        src='/ellipse.png'
        alt='Elippse'
        className='pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]'
      />
      <Link to='/' className='inline-block mb-5 lg:mb-16'>
        <img srcSet='/logo.png 2x' alt='Crowfunding-app' />
      </Link>
      <div className='w-full max-w-[556px] mx-auto bg-white rounded-xl px-5 py-8 lg:px-[60px] lg:py-[50px] shadow'>
        <h1 className='font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center'>
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
