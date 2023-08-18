import { PropTypes } from 'prop-types'
import DashboardSidebar from 'src/modules/dashboard/DashboardSidebar'
import DashboardTopbar from 'src/modules/dashboard/DashboardTopbar'

const LayoutDashboard = ({ children }) => {
  return (
    <div className='p-10 bg-lite min-h-screen'>
      <DashboardTopbar></DashboardTopbar>
      <div className='flex gap-x-10 items-start'>
        <DashboardSidebar></DashboardSidebar>
        <div>{children}</div>
      </div>
    </div>
  )
}
LayoutDashboard.propTypes = {
  children: PropTypes.node
}
export default LayoutDashboard
