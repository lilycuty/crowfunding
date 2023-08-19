import classNames from 'src/utils/classNames'
import PropTypes from 'prop-types'

const CampTitle = ({
  children = 'Title',
  className = 'mb-1 font-semibold'
}) => {
  return <h3 className={classNames('text-text1', className)}>{children}</h3>
}
CampTitle.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}
export default CampTitle
