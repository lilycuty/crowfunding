import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

const TextArea = ({ control, name = '', placeholder = '', ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  })
  return (
    <textarea
      className='w-full py-4 px-6 border rounded-xl text-sm font-medium dark:text-white placeholder:text-text4 dark:placeholder:text-text2 bg-transparent outline-none resize-none min-h-[140px]'
      placeholder={placeholder}
      {...field}
      {...props}
    ></textarea>
  )
}
TextArea.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string
}
export default TextArea
