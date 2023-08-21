import { useDropdown } from './dropdown-context'
import PropTypes from 'prop-types'

const List = ({ children }) => {
  const { show } = useDropdown()
  return (
    <>
      {show && (
        <div className='absolute top-full left-0 w-full bg-white shadow-sm rounded-lg'>
          {children}
        </div>
      )}
    </>
  )
}
List.propTypes = {
  children: PropTypes.node
}
export default List
