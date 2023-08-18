/* eslint-disable react-refresh/only-export-components */
import { withErrorBoundary } from 'react-error-boundary'
import { IconGoogle } from '../icon'
import PropTypes from 'prop-types'
import ErrorComponent from '../common/ErrorComponent'

const ButtonGoggle = ({ children, onClick = () => {} }) => {
  return (
    <button
      className='flex items-center justify-center gap-x-3 w-full py-4 border border-strock  dark:border-darkStroke rounded-xl text-text2 text-base font-semibold mb-5 dark:text-white'
      onClick={onClick}
    >
      <IconGoogle />
      <span>{children}</span>
    </button>
  )
}
ButtonGoggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
export default withErrorBoundary(ButtonGoggle, {
  FallbackComponent: ErrorComponent
})
