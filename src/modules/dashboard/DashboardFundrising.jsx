const DashboardFundrising = () => {
  return (
    <div className='flex items-center gap-x-2 text-text2 font-medium text-base'>
      <span>Fundrising for</span>
      <span className='w-4 cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 max-w-full'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </span>
    </div>
  )
}

export default DashboardFundrising
