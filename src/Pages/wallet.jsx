
import styles from '../style';
import SmallCard from '../Components/smallCard';
import MediumCard from '../Components/mediumCard';
import CreditCardHolder from '../Components/creditCardHolder';
import BankCard from '../Components/bankCard';
import ExpenseCard from '../Components/expenseCard';
import { useSelector } from 'react-redux';

function Wallet() {
  const cardState = useSelector((state)=> state.sales)

  return (
    <div className={`${styles.paddingMain} flex  flex-1 flex-col w-[100%] `}>
      <div className='flex flex-col flex-1 [w-100%] gap-[16px] '>
        <div className={`flex-1   flex flex-row gap-[16px] justify-between `}>
            <div className={`flex flex-col gap-[16px] w-[100%]`}>
              <div className={`flex flex-row flex-1 lg:max-h-[158px] 2xl:max-h-[300px]  justify-between gap-[24px]`}>
                <div className='w-[100%]  flex flex-1'>
                  <SmallCard
                      heading= "Total Revenue"
                      amount= {cardState.totalSales}
                      difference = {cardState.totalSalesDifference}
                      percentage = {false}
                    />
                </div>

                <div className='w-[100%] h-full flex flex-1'>
                  <SmallCard
                      heading = "Average Order Values"
                      amount = {cardState.totalOrders}
                      difference = {cardState.totalOrdersDifference}
                      percentage = {false}
                    />
                </div>

              </div>

              <div className='h-full flex flex-1 w-full'>
                <MediumCard
                  type = "orders"
                />

              </div>
            </div>

          <div className='w-[45%] flex flex-col gap-[25px] h-full justify-between'>
            <div className='w-[100%] flex flex-1'>
              <CreditCardHolder/>
            </div>

            <div className='w-[100%] flex flex-1'>
              <BankCard/>
            </div>

            <div className='w-[100%] flex flex-1'>
              <ExpenseCard/>
            </div>
          </div>
        </div>         
      </div>
    </div>
  )
}

export default Wallet


