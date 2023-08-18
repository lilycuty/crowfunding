/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  IconCampaign,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconTheme,
  IconWithdraw
} from 'src/components/icon'
import classNames from 'src/utils/classNames'

const sidebarLinks = [
  {
    icon: <IconDashboard />,
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: <IconCampaign />,
    title: 'Campaign',
    url: '/campaign'
  },
  {
    icon: <IconPayment />,
    title: 'Payment',
    url: '/payment'
  },
  {
    icon: <IconWithdraw />,
    title: 'Withdraw',
    url: '/withdraw'
  },
  {
    icon: <IconProfile />,
    title: 'Profile',
    url: '/profile'
  },
  {
    icon: <IconLogout />,
    title: 'Logout',
    url: '/#',
    onClick: () => {}
  },
  {
    icon: <IconTheme />,
    title: 'Light/Dark',
    url: '#',
    onClick: () => {}
  }
]
const DashboardSidebar = () => {
  return (
    <div className='w-full md:w-[76px] px-[14px] py-10 rounded-xl bg-white shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] flex flex-col'>
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={`flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-xl md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary ${({
            isActive
          }) => (isActive ? 'bg-primary text-primary bg-opacity-20' : '')}`}
        >
          <span>{link.icon}</span>
          <span className='md:hidden'>{link.title}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default DashboardSidebar
