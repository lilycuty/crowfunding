import { PropTypes } from 'prop-types'

const Label = ({ htmlFor = '', className = '', children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 dark:text-text3 cursor-pointer inline-block self-start
      ${className}`}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string
}
export default Label
