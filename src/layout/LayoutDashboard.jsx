import { Outlet } from 'react-router-dom'
import Overlay from 'src/components/common/Overlay'
import ModalBackProject from 'src/components/modal.jsx/ModalBackProject'
import DashboardSidebar from 'src/modules/dashboard/DashboardSidebar'
import DashboardTopbar from 'src/modules/dashboard/DashboardTopbar'

const LayoutDashboard = () => {
  return (
    <div className='p-10 bg-lite min-h-screen'>
      <ModalBackProject></ModalBackProject>
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

export default LayoutDashboard
