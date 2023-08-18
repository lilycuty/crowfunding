/* eslint-disable no-extra-boolean-cast */
import PropTypes from 'prop-types'

const Button = ({
  type = 'button',
  className = '',
  isLoading = false,
  children,
  ...props
}) => {
  const child = !!isLoading ? (
    <div className='w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin transition-all'></div>
  ) : (
    children
  )
  return (
    <button
      type={type}
      className={`p-4 text-base font-semibold rounded-xl text-white flex items-center justify-center min-h-[56px] ${className} ${
        !!isLoading ? 'opacity-50 pointer-events-none' : ''
      }`}
      {...props}
    >
      {child}
    </button>
  )
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool
}
export default Button
