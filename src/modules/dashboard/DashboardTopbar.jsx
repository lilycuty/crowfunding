/* eslint-disable no-unused-vars */
import React from 'react'
import DashboardSearch from './DashboardSearch'
import DashboardFundrising from './DashboardFundrising'
import { Button } from 'src/components/button'

const DashboardTopbar = () => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-x-10 flex-1'>
        <img srcSet='/logo.png 2x' alt='Crowfunding-app' />
        <div className='w-full max-w-[458px]'>
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className='flex items-center justify-end gap-x-10 flex-1'>
        <DashboardFundrising></DashboardFundrising>
        <Button className='bg-secondary px-7' type='button'>
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
