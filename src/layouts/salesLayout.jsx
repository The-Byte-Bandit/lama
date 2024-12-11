
import styles, {typography} from '../style.js';
import ExportDataBtn from '../Components/exportDataBtn.jsx';
import AddOrderBtn from '../Components/addOrderBtn.jsx';
import CsearchIcon from '../Components/search.jsx'
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification.jsx';
import { salesHeadingMessage} from '../constants/constant.js';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../Components/durationBtn.jsx';
import { Link } from 'react-router-dom';
import SideNav from '../Components/sideNav.jsx';

function SalesLayout() {


  return (
    <div className={`fadein min-h-screen  bg-backgroundGrey w-[100%]`}>
      <div className={`${styles.paddingMain} flex  w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}> Sales</h3>
                  <p className={`${typography.paragraphSmall}`}>{salesHeadingMessage }</p>
          </div>

          <div className=' flex' >
            <div className='flex gap-[12px]'>
              <CsearchIcon/>
              <CnotificationIcon/>
              <div className='md:hidden'>
                <SideNav/>
              </div>
              <CinboxIcon/>
            </div>
          </div>
        </div>
        
      </div>

      <div className={`${styles.paddingMain}  w-[100%]  py-[12px]`}>
        <div className='flex flex-row justify-between border-b border-stroke-soft-200 pb-[10px]'>
            <div>
              <DurationBtn/>
            </div>
            
            <div className='flex flex-row  '>
              <div className=' flexitems-center'>
                <CsearchIcon/>
              </div>
              <div className='flex flex-1 flex-row gap-[12px]  items-center'>
                <ExportDataBtn/>
                <Link to ={`add-orders`}>
                  <AddOrderBtn/>
                </Link>
              </div>
            </div>
          </div>
      </div>

        
      <div className='flex flex-1 w-full h-full'>
        <>
          <Outlet/>
        </>
      </div>
    </div>
  )
}

export default SalesLayout
