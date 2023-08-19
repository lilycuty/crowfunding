import PropTypes from 'prop-types'

const FieldRow = ({ children }) => {
  return <div className='grid grid-cols-2 gap-x-[45px]'>{children}</div>
}
FieldRow.propTypes = {
  children: PropTypes.node
}
export default FieldRow
