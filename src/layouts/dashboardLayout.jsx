
import TopNav from '../Components/topNav.jsx';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className='fadein dashboard w-[100%] min-h-screen bg-backgroundGrey overflow-hidden'>
            <div className='flex flex-col flex-1 h-full'>
                <TopNav />
                <div className='h-full'>
                <Outlet/>
                </div>
            </div>
        
    </div>
  )
}

export default DashboardLayout
