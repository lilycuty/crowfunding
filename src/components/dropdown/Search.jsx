import { useDropdown } from './dropdown-context'
import PropTypes from 'prop-types'

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown()
  return (
    <div className='p-2 sticky top-0 z-10 bg-white'>
      <input
        type='text'
        placeholder={placeholder}
        className='p-4 outline-none w-full border border-gray-200 rounded'
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
Search.propTypes = {
  placeholder: PropTypes.string
}
export default Search
