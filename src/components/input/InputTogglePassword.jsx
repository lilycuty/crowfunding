/* eslint-disable react-refresh/only-export-components */
import useToggleValue from 'src/hooks/useToggleValue'
import PropTypes from 'prop-types'
import ErrorComponent from '../common/ErrorComponent'
import { withErrorBoundary } from 'react-error-boundary'
import { useController } from 'react-hook-form'
import { IconEyeClose, IconEyeOpen } from '../icon'
import classNames from 'src/utils/classNames'

const InputTogglePassword = ({
  control,
  name = '',
  error = '',
  placeholder = '',
  ...rest
}) => {
  const { value: togglePassword, handleToggleValue: handleTogglePassword } =
    useToggleValue(false)

  const { field } = useController({
    control,
    name,
    defaultValue: ''
  })

  return (
    <div className='relative'>
      <input
        id={name}
        type={`${togglePassword ? 'text' : 'password'}`}
        className={classNames(
          'w-full py-4 pl-6 pr-16 border rounded-xl text-sm font-medium text-text1 dark:text-white placeholder:text-text4 dark:placeholder:text-text2 bg-transparent dark:border-darkStroke',
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
      <span className='absolute top-2/4 -translate-y-2/4 right-6 cursor-pointer select-none'>
        {togglePassword ? (
          <IconEyeOpen onClick={handleTogglePassword}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={handleTogglePassword}></IconEyeClose>
        )}
      </span>
    </div>
  )
}
InputTogglePassword.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string
}
export default withErrorBoundary(InputTogglePassword, {
  FallbackComponent: ErrorComponent
})
