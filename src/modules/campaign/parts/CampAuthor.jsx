import { defaultImage } from 'src/constants/global'
import PropTypes from 'prop-types'

const CampAuthor = ({ author = 'Le Quang Thai', image = defaultImage }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <img src={image} alt='' className='w-8 h-8 rounded-full object-cover' />
      <p className='text-xs text-text3'>
        by <span className='font-semibold text-text2'>{author}</span>
      </p>
    </div>
  )
}
CampAuthor.propTypes = {
  author: PropTypes.string,
  image: PropTypes.string
}
export default CampAuthor
