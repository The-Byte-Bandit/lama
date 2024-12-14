
import SideNav from '../Components/sideNav.jsx';
import TopNav from '../Components/topNav.jsx';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className='fadein dashboard w-[100%] min-h-screen bg-bg-white-0  md:bg-backgroundGrey overflow-hidden'>
            <div className='flex flex-col flex-1 h-full'>
            <div className='md:hidden'>
                <SideNav/>
              </div>
                <TopNav />
                <div className='h-full'>
                <Outlet/>
                </div>
            </div>
        
    </div>
  )
}

export default DashboardLayout
