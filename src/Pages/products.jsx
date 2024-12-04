
import styles, {typography} from '../style';
import { arrowDown} from '../constants/constant';

// import LargeCardOne from '../Components/largeCardOne';
import LargeCardTwo from '../Components/largeCardTwo'
import SmallCard from '../Components/smallCard';
import ExportAsBtn from '../Components/exportAsBtn';

function Products() {
  return (
    <div className={`${styles.paddingMain}  w-[100%] h-full flex flex-col justify-between`}>
      <div className='flex flex-col flex-1 [w-100%]  gap-[16px] '>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mb-6'>
            <SmallCard
              heading = "Total Product"
              percentage = {false}
            />
          
            <SmallCard
              heading = "Out of Stock"
              percentage = {false}
            />
          
            <SmallCard
              heading = "Recently Added"
              percentage = {false}
            />
          
        </div>

        <div className='flex  w-[100%]'>
          <div className='flex flex-row flex-1 justify-between items-center h-fit  gap-[12px] py-[12px] border-b border-stroke-soft-200'>
            <div className='flex flex-1 flex-col gap-[4px]'>
              <h3 className={`${typography.labelLarge} flex flex-row gap-[6px] items-center`}>All Products <div className='bg-bg-white-0 border-[1px] rounded-[999px] p-[1px] w-[20px] h-[20px] border-stroke-soft-200 flex items-center justify-center'><img src={arrowDown} alt='drop down'/></div>  </h3>
              <p className={`${typography.paragraphSmall}`}>Monitor and manage transactions across all your cards.</p>
            </div>

            <div className=' flex  ' >
              <div className='flex flex-1 flex-row gap-[12px]  items-center w-[]'>
                    <ExportAsBtn/>
              </div>
            </div>
          </div> 
        </div>

        <div className='w-[100%] flex flex-row flex-1'>
          {/* <LargeCardOne/> */}
          <LargeCardTwo/>
        </div>
      </div>

    </div>
  )
}

export default Products