
import styles from '../style';
import SmallCard from '../Components/smallCard';
import MediumCard from '../Components/mediumCard';
import VerticalCard from '../Components/verticalCard';


function Sales() {

  return (

    <div className={`${styles.paddingMain} w-full h-full`}>
      <div className='flex flex-col flex-1 w-[100%] gap-[16px] h-full'>
        <div className='flex flex-row gap-[8px]  max-h-[300px] 2xl:flex-1'>
          <div className='flex flex-1'>
            <SmallCard
              heading = "Total Product"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Out of Stock"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Recently Added"
              percentage = {false}
            />
          </div>
          
        </div>


          <div className={` flex flex-1 flex-row  gap-[16px] justify-between`}>
            <div className='w-[70%] flex'>
              <MediumCard
              type = "lineChart"
              />
                
            </div>
            
            <div className='w-[34%]' >
              <VerticalCard
              type = "earningCategory"
              />

            </div>

          </div>

          <div className={` flex flex-row  gap-[16px] w-[100%]`}>
            <div className='w-[37%] flex' >
              <VerticalCard
              type = "topProduct"
              />

            </div>

            <div className='w-[70%] flex-1'>
              <MediumCard
              type = "transactions"
              />
                
            </div>

          </div>
      </div>
        


        
    </div>
    // </div>
  )
}

export default Sales


