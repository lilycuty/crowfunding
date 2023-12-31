/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { defaultImage } from 'src/constants/global'

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='relative z-50'>
      <div className='bg-white rounded-full shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] p-2 flex items-center'>
        <div className='flex-1 px-5'>
          <input
            type='text'
            placeholder='Do fundrise now'
            className='bg-transparent placeholder:text-text4 text-sm text-text1 w-full'
          />
        </div>
        <button className='w-[72px] h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      {/* Search results */}
      {showSearch && (
        <div className='search-results w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 shadow translate-y-5 pb-6 rounded-3xl'>
          <div className='flex items-center justify-between p-3 bg-graySoft rounded-3xl'>
            <h4 className='font-medium text-sm pl-4 underline'>
              See all 10,124 fundraisier
            </h4>
            <button className='flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          {/* Search bottom*/}
          <div className='p-6 pb-0'>
            <div className='flex flex-col gap-y-5 mb-6'>
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
            <h3 className='text-sm font-semibold mb-4'>Related searchs</h3>
            <div className='flex flex-col gap-y-3 text-sm text-text2'>
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
              <p>
                <strong>education</strong> and schools fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SearchItem() {
  return (
    <div className='flex items-center gap-x-5'>
      <img
        src={defaultImage}
        alt=''
        className='w-[50px] h-[50px] object-cover rounded-lg'
      />
      <div className='flex-1 text-sm'>
        <h3 className='mb-1'>
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className='text-text3'>By Durgham Family</p>
      </div>
    </div>
  )
}
export default DashboardSearch
