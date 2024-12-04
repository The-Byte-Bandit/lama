import styles from '../style';
import SmallCard from '../Components/smallCard';
import MediumCard from '../Components/mediumCard';
import CreditCardHolder from '../Components/creditCardHolder';
import BankCard from '../Components/bankCard';
import ExpenseCard from '../Components/expenseCard';
import { useSelector } from 'react-redux';

function Wallet() {
  const cardState = useSelector((state) => state.sales);

  return (
    <div className={`${styles.paddingMain} flex flex-col w-full min-h-full`}>
      <div className="flex flex-col flex-1 w-full gap-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Left Column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Small Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SmallCard
                heading="Total Revenue"
                amount={cardState.totalSales}
                difference={cardState.totalSalesDifference}
                percentage={false}
              />
              <SmallCard
                heading="Average Order Values"
                amount={cardState.totalOrders}
                difference={cardState.totalOrdersDifference}
                percentage={false}
              />
            </div>

            {/* Medium Card Section */}
            <div className="w-full h-full flex ">
              <MediumCard type="orders" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 h-full">
            <div className="w-full">
              <CreditCardHolder />
            </div>
            <div className="w-full flex 2xl:h-full">
              <BankCard />
            </div>
            <div className="w-full flex 2xl:h-full">
              <ExpenseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
