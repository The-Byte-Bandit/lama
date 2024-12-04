
import styles from '../style';
import LargeCardOne from '../Components/largeCardOne.jsx';
import SmallCard from '../Components/smallCard.jsx';
// import ExportAsBtn from '../Components/exportAsBtn';

function Orders() {
  return (
    <div className={`${styles.paddingMain} w-[100%] h-full flex flex-col `}>
      <div className='flex flex-col flex-1 w-[100%] h-[100%] gap-[16px] justify-between '>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mb-6'>

            <SmallCard
              heading = "Total Orders"
              percentage = {false}
            />
          
            <SmallCard
              heading = "Completed Orders"
              percentage = {false}
            />
          
            <SmallCard
              heading = "Ongoing Orders"
              percentage = {false}
            />
          
            <SmallCard
              heading = "Returned Orders"
              percentage = {false}
            />
          
        </div>

        <div className='h-full w-full flex-1'>
          {/* <LargeCardOne/> */}
          <LargeCardOne/>
        </div>
      </div>

    </div>
  )
}

export default Orders