import DashboardSearch from './DashboardSearch'
import DashboardFundrising from './DashboardFundrising'
import { Link } from 'react-router-dom'
import { Button } from 'src/components/button'

const DashboardTopbar = () => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-x-10 flex-1'>
        <Link to='/' className='inline-block'>
          <img srcSet='/logo.png 2x' alt='Crowfunding-app' />
        </Link>
        <div className='w-full max-w-[458px]'>
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className='flex items-center justify-end gap-x-10 flex-1'>
        <DashboardFundrising></DashboardFundrising>
        <Button
          className='px-7'
          type='button'
          href='/start-campaign'
          kind='secondary'
        >
          Start a campaign
        </Button>
        <img
          srcSet='/logo.png 2x'
          alt='Avatar'
          className='rounded-full object-cover'
        />
      </div>
    </div>
  )
}

export default DashboardTopbar
