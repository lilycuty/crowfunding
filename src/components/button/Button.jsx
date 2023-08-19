/* eslint-disable no-extra-boolean-cast */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'src/utils/classNames'

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

  let defaultBtnClassName =
    'p-4 text-base font-semibold rounded-xl flex items-center justify-center min-h-[56px]'
  switch (props.kind) {
    case 'primary':
      defaultBtnClassName += ' ' + 'bg-primary text-white'
      break
    case 'secondary':
      defaultBtnClassName += ' ' + 'bg-secondary text-white'
      break
    case 'ghost':
      defaultBtnClassName += ' ' + 'bg-secondary bg-opacity-10 text-secondary'
      break
    default:
      break
  }
  if (props.href) {
    return (
      <Link
        to={props.href}
        className={classNames(defaultBtnClassName, className)}
      >
        {child}
      </Link>
    )
  }
  return (
    <button
      type={type}
      className={classNames(
        className,
        defaultBtnClassName,
        !!isLoading ? 'opacity-50 pointer-events-none' : ''
      )}
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
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary', 'ghost'])
}
export default Button
