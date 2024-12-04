
import {searchIcon } from '../constants/constant';

function CsearchIcon() {
  return (
    <div>
        <div className='hidden md:block py-[10px] px-[10px]'>
        <img src={searchIcon} alt='search'/>
        </div>
    </div>
  )
}

export default CsearchIcon