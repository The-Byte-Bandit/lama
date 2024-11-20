
import TopNav from '../Components/topNav.jsx';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className='fadein dashboard w-[100%] bg-backgroundGrey overflow-hidden'>
            <div className='flex flex-col flex-1 sticky'>
                <TopNav />
                <div className='h-full'>
                <Outlet/>
                </div>
            </div>
        
    </div>
  )
}

export default DashboardLayout
