import classNames from 'src/utils/classNames'
import { useDropdown } from './dropdown-context'
import PropTypes from 'prop-types'

const Select = ({
  placeholder = 'Please select an option',
  className = ''
}) => {
  const { show, toggle } = useDropdown()
  return (
    <div
      className={classNames(
        'flex items-center justify-between py-4 px-6 bg-white rounded-xl cursor-pointer font-medium border border-strock text-sm text-text4',
        className
      )}
      onClick={toggle}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 15l7-7 7 7'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        )}
      </span>
    </div>
  )
}

Select.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string
}
export default Select
