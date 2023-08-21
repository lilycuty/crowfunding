import { Fragment } from 'react'
import CampImage from './parts/CampImage'
import CampCategory from './parts/CampCategory'
import CampTitle from './parts/CampTitle'
import CampDesc from './parts/CampDesc'
import CampMeta from './parts/CampMeta'
import { Button } from 'src/components/button'
import CampProgress from './parts/CampProgress'
import CampViewAuthor from './parts/CampViewAuthor'
import { defaultImage } from 'src/constants/global'
import CampaignSupport from './CampaignSupport'
import CampaignPerk from './CampaignPerk'
import CampaignGrid from './CampaignGrid'
import CampaignItem from './CampaignItem'

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className='h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-80 flex items-center justify-center text-white text-[40px] font-bold mb-10'
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0) 0%, #000 93.43%), url(https://source.unsplash.com/random)`
        }}
      >
        <h1>Education</h1>
      </div>
      <div className='flex items-start gap-x-10 w-full max-w-[1066px]'>
        <div className='flex-1'>
          <CampImage className='h-[398px] mb-8'></CampImage>
          <div className='flex justify-center gap-x-5'>
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src={defaultImage}
                  alt=''
                  key={index}
                  className='w-[89px] h-[70px] rounded-lg object-cover'
                />
              ))}
          </div>
        </div>
        <div className='flex-1 max-w-[443px]'>
          <CampCategory text='Film' className='text-sm'></CampCategory>
          <CampTitle className='font-bold text-xl mb-4'>
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>
          <CampDesc className='text-sm mb-6'>
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <CampProgress></CampProgress>
          <div className='flex items-start justify-between gap-x-5 mb-4'>
            <CampMeta
              size='big'
              amount='$2,000'
              text='Raised of $1,900'
            ></CampMeta>
            <CampMeta size='big' amount='173' text='Total backers'></CampMeta>
            <CampMeta size='big' amount='30' text='Days left'></CampMeta>
          </div>
          <Button className='w-full' kind='primary' type='button'>
            Back this project
          </Button>
        </div>
      </div>

      <div
        className='flex items-center justify-between mt-[100px] bg-white p-5
        border-b border-b-slate-100 mb-6'
      >
        <div className='flex items-center gap-x-[60px] text-sm font-medium text-text3'>
          <span className='cursor-pointer text-secondary'>Campaign</span>
          <span className='cursor-pointe'>Risks</span>
          <span className='cursor-pointe'>FAQ</span>
          <span className='cursor-pointe'>Updates</span>
          <span className='cursor-pointe'>Comments</span>
        </div>
        <Button type='button' kind='primary'>
          Back this project
        </Button>
      </div>

      <div className='grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]'>
        <div></div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className='mb-[60px]'></div>
          <div className='flex flex-col gap-x-[30px]'>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>

      <h2 className='mb-10 font-semibold text-xl'>
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  )
}

export default CampaignView
