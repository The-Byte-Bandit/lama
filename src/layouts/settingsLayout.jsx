import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles, { typography } from '../style.js';
import CsearchIcon from '../Components/search.jsx';
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification.jsx';
import { userset, settings_wallet, notification_seticon, privAndsec, arro, settingstHeadingMessage } from '../constants/constant.js';
import { useSelector } from 'react-redux';
import SideNav from '../Components/sideNav.jsx';

function SettingsLayout() {
  const userProfile = useSelector((state) => state.userProfile);
  const paymentSettings = useSelector((state) => state.paymentSettings);
  const businessDetails = useSelector((state) => state.businessDetails);
  console.log(userProfile);
  console.log(paymentSettings);
  console.log(businessDetails);

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation(); 
  useEffect(() => {
    if (location.pathname.includes('account-settings')) {
      setActiveIndex(0);
    } else if (location.pathname.includes('payment-settings')) {
      setActiveIndex(1);
    } else if (location.pathname.includes('notification-settings')) {
      setActiveIndex(2);
    } else if (location.pathname.includes('privacy-settings')) {
      setActiveIndex(3);
    }
  }, [location]);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className={` fadein w-[100%] min-h-screen bg-bg-white-0  md:bg-backgroundGrey`}>
      <div className={`${styles.paddingMain} mb-[0px] flex w-[100%] pt-[20px] pb-[9px] bg-bg-white-0`}>
        <div className='flex flex-row flex-1 justify-between gap-[12px]'>
          <div className='hidden md:flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}>Settings</h3>
            <p className={`${typography.paragraphSmall}`}>{settingstHeadingMessage}</p>
          </div>
          <div className='flex w-full md:w-fit'>
            <div className='flex gap-[12px] w-full'>
              <div className='md:hidden'>
                <SideNav/>
              </div>
            
              <CsearchIcon />
              <div className='ml-auto md:ml-0'>
                <CnotificationIcon />
              </div>
              <div className=' hidden md:block'>
                <CinboxIcon />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-row flex-1 w-full h-full'>
        <div className='hidden md:flex flex-col w-[35%]  bg-bg-white-0 p-[20px] border-[1px] border-stroke-soft-200'>
          <div className='max-w-[400px] flex flex-col flex-1'>
            <div className='flex flex-col w-[100%] font-semibold text-text-soft-400'>
              <Link to='account-settings'>
                <div className={activeIndex === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
                  <div className='p-[8px] flex justify-between'>
                    <div className='flex items-center w-full'>
                      <img className='cgrey pr-2' src={userset} alt='img'/>
                      <h5 className={`${typography.labelSmall}`}>Account Settings</h5>
                    </div>
                    <img className='arr' src={arro} alt='img'/>
                  </div>
                </div>
              </Link>

              <Link to='payment-settings'>
                <div className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
                  <div className='p-[8px] flex justify-between'>
                    <div className='flex items-center w-full'>
                      <img className='cgrey pr-2' src={settings_wallet} alt='img'/>
                      <h5 className={`${typography.labelSmall}`}>Payment Settings</h5>
                    </div>
                    <img className='arr' src={arro} alt='img'/>
                  </div>
                </div>
              </Link>

              <Link to='notification-settings'>
                <div className={activeIndex === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
                  <div className='p-[8px] flex justify-between'>
                    <div className='flex items-center w-full'>
                      <img className='cgrey pr-2' src={notification_seticon} alt='img'/>
                      <h5 className={`${typography.labelSmall}`}>Notification Settings</h5>
                    </div>
                    <img className='arr' src={arro} alt='img'/>
                  </div>
                </div>
              </Link>

              <Link to='privacy-settings'>
                <div className={activeIndex === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
                  <div className='p-[8px] flex justify-between'>
                    <div className='flex items-center w-full'>
                      <img className='cgrey pr-2' src={privAndsec} alt='img'/>
                      <h5 className={`${typography.labelSmall}`}>Privacy & Security</h5>
                    </div>
                    <img className='arr' src={arro} alt='img'/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full mb-[60px] h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SettingsLayout;
