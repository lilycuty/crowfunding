import { Link } from 'react-router-dom'
import { IconFolder } from 'src/components/icon'
import PropTypes from 'prop-types'

const CampCategory = ({ text = '', className = 'text-xs' }) => {
  return (
    <Link
      to='/'
      className={`${className} flex items-baseline mb-4 gap-x-3 font-medium text-text3`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  )
}
CampCategory.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
export default CampCategory
