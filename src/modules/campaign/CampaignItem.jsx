import CampAuthor from './parts/CampAuthor'
import CampCategory from './parts/CampCategory'
import CampDesc from './parts/CampDesc'
import CampImage from './parts/CampImage'
import CampMeta from './parts/CampMeta'
import CampTitle from './parts/CampTitle'

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className='px-5 py-4'>
        <CampCategory text='Education'></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc className='mb-4 text-sm'>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className='flex items-start justify-between gap-x-5 mb-5'>
          <CampMeta amount='$2,000' text='Raised of $1,900'></CampMeta>
          <CampMeta amount='173' text='Total backers'></CampMeta>
        </div>
        <CampAuthor author='Lionel Andres Messi'></CampAuthor>
      </div>
    </div>
  )
}

export default CampaignItem
