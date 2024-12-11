import { arrowRight, sideNavLinks, Swiphr, tip, userProfile, verified } from '../constants/constant';
import styles from '../style';
import { useSelector, useDispatch } from 'react-redux';
import { activate } from '../features/sideNav';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SideNav() {
  const dispatch = useDispatch();
  const itemState = useSelector((state) => state.nav);
  const location = useLocation();

  // State for toggling the mini navigation
  const [miniNavVisible, setMiniNavVisible] = useState(false);

  useEffect(() => {
    sideNavLinks.forEach((link) => {
      if (location.pathname.includes(link.url)) {
        dispatch(activate(link.id));
      }
    });
  }, [location, dispatch]); // Re-run when location changes

  return (
    <div id='sidenav'>
      <div className='mini md:hidden absolute top-0 left-0 z-20'>
        {/* Small Screen Navigation */}
        <div className={`${miniNavVisible ? 'border-r-[#E2E4E9] border-b-[#E2E4E9] border-b-[1.5px] border-r-[1.5px] min-h-screen fadein transition-opacity' : ''} bg-neutrals-white-50 w-full  flex flex-col justify-between  rounded-tr rounded-br`}>
          {/* Header Section */}
          <div className='flex justify-between items-center px-3 py-3 border-b-stroke-soft-200'>
                        {/* Collapsible Button */}
                        <button
              id="toggleMiniNav"
              className='text-[#000] text-2xl flex items-center justify-center'
              onClick={() => setMiniNavVisible(!miniNavVisible)}
            >
              ☰
            </button>
            <div className={`${miniNavVisible ? 'flex' : 'hidden'} flex items-center gap-3`}>
              <img src={Swiphr} alt="Swiphr Logo" />
              <h3 className='text-swiphr-purple font-medium text-[18px]'>Vendor</h3>
            </div>

          </div>

          {/* Links Section */}
          <div className={`${miniNavVisible ? 'flex ' : 'hidden'} flex-col gap-2 px-4`}>
            <ul className='flex flex-col gap-3'>
              {sideNavLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    dispatch(activate(link.id));
                    setMiniNavVisible(false); // Close the menu after navigation
                  }}
                  className='flex items-center gap-4 cursor-pointer hover:bg-weak-100 p-2 rounded-md'
                >
                  <Link to={`/home/${link.url}`} className='flex gap-3 items-center'>
                    {itemState[link.id] ? (
                      <img src={link.activeIcon} alt={link.title} />
                    ) : (
                      <img src={link.icon} alt={link.title} />
                    )}
                    <span className='label-small'>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Section */}
          <div className={`${miniNavVisible ? 'flex' : 'hidden'} flex mt-auto py-3 px-4 justify-between items-center border-t-stroke-soft-200 border-t-[1.5px]`}>
            <div className='flex items-center gap-2'>
              <img src={userProfile[0].profilePricture} alt={userProfile[0].userName} className='w-8 h-8 rounded-full' />
              <div className='flex flex-col'>
                <span className='flex items-center gap-1'>
                  {userProfile[0].userName}
                  <img src={verified} alt='Verified' />
                </span>
                <span className='text-sm text-gray-500'>{userProfile[0].userEmail}</span>
              </div>
            </div>
            <img src={arrowRight} alt='Arrow' />
          </div>
        </div>
      </div>

      <div className={`${miniNavVisible ? 'flex' : 'hidden'} w-screen h-screen bg-[#00000081] ease-linear absolute left-0 z-10 transition-opacity duration-300 top-0`}></div>
      
      {/* {miniNavVisible && (
          <div
            className="w-screen h-screen bg-[#00000081] absolute z-10 transition-opacity duration-300"
            onClick={() => setMiniNavVisible(false)}
          />
        )} */}

      <div className=' bg-neutrals-white-50  max-w-[227px] w-[100%] h-full hidden md:flex flex-1 flex-col justify-between border-r-[#E2E4E9] border-b-[#E2E4E9] border-b-[1.5px] border-r-[1.5px] rounded-tr rounded-br'>
        <div  className=''>
          <div className={`${styles.paddingL1} flex flex-col `}>
            <div className='flex max-w-[248px] justify-center items-center border-b-stroke-soft-200 border-b-[1.5px] h-[77px]'>
              <img src={Swiphr} alt="Swiphr" />
              <h3 className='text-swiphr-purple font-medium text-[22.27px]'>Vendor</h3>
            </div>

            <div className='flex flex-col max-w-[348px] my-4'>
              <h3 className='subheading-X-small ml-[22px]'>MAIN</h3>
              <div className='flex flex-col'>
                <div className='flex flex-col my-3'>
                  <ul className='flex flex-col gap-3'>
                    {sideNavLinks.map((link) => (
                      <li key={link.id} onClick={() => { dispatch(activate(link.id)); }} className='inline-block items-center gap-6 cursor-pointer hover:bg-weak-100'>
                        <Link to={`/home/${link.url}`}>
                          {itemState[link.id] && <img src={tip} className='absolute' alt="top" />}
                          <div className='flex gap-[6px] items-center ml-[.9rem] relative'>
                            {itemState[link.id] ? (
                              <img src={link.activeIcon} alt={link.title} />
                            ) : (
                              <img src={link.icon} alt={link.title} />
                            )}
                            <span className='label-small'>{link.title}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex mt-auto mb-5 justify-center'>
          <div className='flex flex-row justify-evenly items-center gap-x-4'>
            <div className='flex justify-center items-center'>
              <img src={userProfile[0].profilePricture} alt={userProfile[0].userName} />
            </div>
            <div className='flex flex-col'>
              <span className='flex'>{userProfile[0].userName}<img src={verified} alt='tick' /></span>
              <span>{userProfile[0].userEmail}</span>
            </div>
            <div>
              <img src={arrowRight} alt='arrow' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
