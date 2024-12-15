
import styles from '../style';
import SmallCard from '../Components/smallCard';
import MediumCard from '../Components/mediumCard';
import VerticalCard from '../Components/verticalCard';


function Sales() {

  return (

    <div className={`${styles.paddingMain} w-full h-full`}>
      <div className='flex flex-col flex-1 w-[100%] gap-[16px] h-full'>
        <div className={`grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mb-6`}>
          {/* <div className='flex flex-1'> */}
            <SmallCard
              heading = "Total Product"
              percentage = {false}
            />
          {/* </div> */}
          
          {/* <div className='flex flex-1'> */}
            <SmallCard
              heading = "Out of Stock"
              percentage = {false}
            />
          {/* </div> */}
          
          {/* <div className='flex flex-1'> */}
            <SmallCard
              heading = "Recently Added"
              percentage = {false}
            />
          {/* </div> */}
          
        </div>


          <div className={` grid grid-cols-1 lg:grid-cols-3 gap-6` }>
            <div className='md:col-span-2'>
              <MediumCard
              type = "lineChart"
              />
                
            </div>
            
            <div className='flex' >
              <VerticalCard
              type = "earningCategory"
              />

            </div>

          </div>

          <div className={` grid grid-cols-1 lg:grid-cols-3 gap-6`}>
            <div className='' >
              <VerticalCard
              type = "topProduct"
              />

            </div>

            <div className='md:col-span-2'>
              <MediumCard
              type = "transactions"
              />
                
            </div>

          </div>
      </div>
        


        
    </div>

  )
}

export default Sales


