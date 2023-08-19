import { defaultImage } from 'src/constants/global'
import PropTypes from 'prop-types'

const CampImage = ({ className = 'h-[158px]', image = defaultImage }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=''
        className='w-full h-full object-cover rounded-2xl'
      />
    </div>
  )
}
CampImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string
}
export default CampImage
