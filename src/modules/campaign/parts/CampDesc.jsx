import PropTypes from 'prop-types'

const CampDesc = ({ className = 'mb-4 text-xs', children }) => {
  return <p className={`${className} font-normal text-text3`}>{children}</p>
}
CampDesc.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
export default CampDesc
