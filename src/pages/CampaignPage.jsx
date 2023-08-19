import LayoutDashboard from 'src/layout/LayoutDashboard'
import Heading from 'src/components/common/Heading'
import CampaignGrid from 'src/modules/campaign/CampaignGrid'
import CampaignFeature from 'src/modules/campaign/CampaignFeature'
import { IconPlus } from 'src/components/icon'
import { Button } from 'src/components/button'

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <div className='mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10'>
        <div className='flex items-start gap-x-6'>
          <div className='w-14 h-14 rounded-full flex items-center justify-center text-white bg-secondary bg-opacity-60'>
            <IconPlus></IconPlus>
          </div>
          <div className='flex-1'>
            <h1 className='text-[22px] font-semibold mb-2'>
              Create Your Campaign
            </h1>
            <p className='text-sm text-text3 mb-2'>
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href='/' className='text-primary text-sm'>
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button
          type='button'
          kind='ghost'
          className='px-8'
          href='/start-campaign'
        >
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type='secondary'>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className='mt-10 text-center'>
        <Button kind='ghost' className='mx-auto px-8' type='button'>
          <span>See more +</span>
        </Button>
      </div>
    </LayoutDashboard>
  )
}

export default CampaignPage
