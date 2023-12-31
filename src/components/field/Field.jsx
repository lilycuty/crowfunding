import PropTypes from 'prop-types'

const Field = ({ children }) => {
  return (
    <div className='flex flex-col gap-y-2 lg:gap-y-3 mb-4 lg:mb-6'>
      {children}
    </div>
  )
}
Field.propTypes = {
  children: PropTypes.node
}
export default Field
