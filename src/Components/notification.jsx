
import {notificationIcon } from '../constants/constant';

function CnotificationIcon() {
  return (
    <div>
        <div className='hidden md:block py-[10px] px-[10px]'>
        <img src={notificationIcon} alt='inbox'/>
        </div>
    </div>
  )
}

export default CnotificationIcon