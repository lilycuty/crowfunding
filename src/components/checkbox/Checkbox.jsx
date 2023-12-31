import PropTypes from 'prop-types'

const Checkbox = ({
  name = '',
  checked = false,
  onClick = () => {},
  children
}) => {
  return (
    <div className='flex items-center gap-x-5 justify-center'>
      <label
        htmlFor={name}
        className={`inline-flex items-center justify-center p-1 w-5 h-5 rounded border cursor-pointer select-none ${
          checked
            ? 'bg-primary border-primary text-white'
            : 'border-text4 text-transparent dark:border-text3'
        }`}
        onClick={onClick}
      >
        <input
          type='checkbox'
          name={name}
          checked={checked}
          className='hidden'
          onChange={() => {}}
        />
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            />
          </svg>
        </span>
      </label>

      {children && (
        <label onClick={onClick} className='cursor-pointer'>
          {children}
        </label>
      )}
    </div>
  )
}
Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node
}
export default Checkbox
