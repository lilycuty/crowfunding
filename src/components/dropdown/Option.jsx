import PropTypes from 'prop-types'
import { useDropdown } from './dropdown-context'

const Option = (props) => {
  const { children, onClick } = props
  const { setShow } = useDropdown()
  const handleClick = () => {
    onClick && onClick()
    setShow(false)
  }
  return (
    <div
      className='px-5 py-4 cursor-pointer flex items-center justify-between hover:text-primary'
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
Option.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
export default Option
