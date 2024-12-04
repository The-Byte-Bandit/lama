
import CreditCard from './creditCard'
import { whiteAddIcon, stroke } from '../constants/constant'
import {typography} from '../style'

function CreditCardHolder() {
  return (
    <div className='max-w-[652px] max-h-[384px] flex-1'>
        <div className=' flex flex-col rounded-[16px] p-[16px] gap-[4px] bg-white-0 items-center border-[1px] shadow-custom-150 bg-bg-white-0 border-stroke-soft-200 w-[100%] h-[100%]'>
          <CreditCard/>
          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
          <div className="flex flex-row items-center justify-between w-full gap-4">
            {/* Primary Button */}
            <button className="flex flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary-purple-700 hover:scale-110 transition duration-300 flex-grow sm:flex-grow-0 lg:flex-grow">
              <img src={whiteAddIcon} alt="add" />
              <h5 className={`${typography.labelSmall} text-white text-nowrap`}>Send Funds</h5>
            </button>

            {/* Secondary Button */}
            <button className="flex flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg border border-stroke-soft-200 shadow-custom-150 bg-bg-weak-100 hover:scale-110 transition duration-300 flex-grow sm:flex-grow-0 lg:flex-grow">
              <img src={stroke} alt="add" />
              <h5 className={`${typography.labelSmall} text-text-main-900 text-nowrap`}>Send Funds</h5>
            </button>
          </div>


        </div>
    </div>
  )
}

export default CreditCardHolder