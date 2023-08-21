/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types'
import { Outlet } from 'react-router-dom'
import Overlay from 'src/components/common/Overlay'
import DashboardSidebar from 'src/modules/dashboard/DashboardSidebar'
import DashboardTopbar from 'src/modules/dashboard/DashboardTopbar'

const LayoutDashboard = ({ children }) => {
  return (
    <div className='p-10 bg-lite min-h-screen'>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className='flex gap-x-10 items-start'>
        <DashboardSidebar></DashboardSidebar>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
LayoutDashboard.propTypes = {
  children: PropTypes.node
}
export default LayoutDashboard
