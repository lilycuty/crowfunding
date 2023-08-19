/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import ErrorComponent from '../common/ErrorComponent'
import classNames from 'src/utils/classNames'
import { withErrorBoundary } from 'react-error-boundary'
import { useController } from 'react-hook-form'

const Input = (props) => {
  const {
    control,
    name = '',
    type = 'text',
    error = '',
    placeholder = '',
    ...rest
  } = props
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  })
  return (
    <div className='relative'>
      <input
        id={name}
        type={type}
        className={classNames(
          'w-full py-4 px-6 border rounded-xl text-sm font-medium dark:text-white placeholder:text-text4 dark:placeholder:text-text2 bg-transparent',
          error.length > 0
            ? 'border-error dark:border-error text-error'
            : 'border-strock dark:border-darkStroke text-text1'
        )}
        placeholder={`${error.length > 0 ? '' : placeholder}`}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span
          className='error-input text-sm font-medium text-error absolute top-2/4 
          -translate-y-2/4 left-6 pointer-events-none'
        >
          {error}
        </span>
      )}
    </div>
  )
}
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent
})
