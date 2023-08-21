/* eslint-disable no-unused-vars */
import React from 'react'
import { defaultImage } from 'src/constants/global'
import CampTitle from './parts/CampTitle'

const CampaignPerk = () => {
  return (
    <div className='bg-white shadow-1 rounded-xl'>
      <img
        src={defaultImage}
        alt=''
        className='h-[232px] object-cover rounded-xl w-full'
      />
      <div className='p-5'>
        <span className='inline-block text-white bg-secondary text-xs font-medium py-1 px-3 rounded-sm mb-5'>
          Featured
        </span>
        <CampTitle className='text-xl mb-1 font-semibold'>
          Special One Camera
        </CampTitle>
        <div className='flex items-center gap-x-3 mb-4'>
          <span className='text-text1 font-bold text-xl'>$2,724 USD</span>
          <span className='text-sm text-error line-through font-medium'>
            $1,504 USD
          </span>
          <span className='text-sm font-medium text-error'>(12% OFF)</span>
        </div>
        <div className='flex flex-col gap-y-1 mb-4'>
          <strong>Estimated Shipping</strong>
          <span className='text-text2'>October 2022</span>
        </div>
        <p className='text-text2 mb-4'>
          <strong className='text-text1'>05</strong> claimed
        </p>
        <p className='text-text2'>Ships worldwide</p>
      </div>
    </div>
  )
}

export default CampaignPerk
