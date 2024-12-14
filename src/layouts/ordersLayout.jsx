
import styles, {typography} from '../style.js';
import ExportDataBtn from '../Components/exportDataBtn.jsx';
import AddOrderBtn from '../Components/addOrderBtn.jsx';
import CsearchIcon from '../Components/search.jsx'
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification.jsx';
import { ordersHeadingMessage} from '../constants/constant.js';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../Components/durationBtn.jsx';
import { Link } from 'react-router-dom';
import SideNav from '../Components/sideNav.jsx';

function OrdersLayout() {


  return (
    <div className={`fadein  w-[100%] min-h-screen  bg-bg-white-0  md:bg-backgroundGrey`}>
      <div className={`${styles.paddingMain} flex  w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-col-reverse md:flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}> Orders</h3>
                  <p className={`${typography.paragraphSmall}`}>{ordersHeadingMessage }</p>
          </div>

          <div className='ml-auto md:ml-0 flex items-center justify-center' >
            <div className='flex gap-[12px]'>
              <CsearchIcon/>
              <CnotificationIcon/>
              <div className='md:hidden'>
                <SideNav/>
              </div>
              <div className='hidden md:block'>
              <CinboxIcon/>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className={`${styles.paddingMain} w-[100%]  py-[12px] bg-backgroundGrey`}>
        <div className='flex flex-row justify-between border-b border-stroke-soft-200 pb-[10px]'>
            <div className='hidden md:block '>
              <DurationBtn/>
            </div>
            
            <div className='ml-auto md:ml-0 flex flex-row  '>
              <div className=' flex items-center'>
                <CsearchIcon/>
              </div>
              <div className='flex flex-1 flex-row gap-[12px]  items-center w-[]'>
                <div className='hidden md:block'>
                  <ExportDataBtn/>
                </div>
                
                <Link to ={`add-orders`} className=''>
                  <AddOrderBtn/>
                </Link>
              </div>
            </div>
          </div>
      </div>

    
            
      <div className='w-full h-full'>
        <>
          <Outlet/>
        </>
      </div>
    </div>
  )
}

export default OrdersLayout
