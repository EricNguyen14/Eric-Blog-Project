import { useSelector } from "react-redux";
import {
  formatStringAmount,
  calcTotalAmount,
  formatPercent,
} from "../../helper";

function BudgetHeader() {
  const listData = useSelector((state) => state.listData);
  const dataIncomes = listData.filter((data) => data.amount > 0);
  const dataExpenses = listData.filter((data) => data.amount < 0);
  const totalAmountIncomes = calcTotalAmount(dataIncomes);
  const totalAmountExpenses = calcTotalAmount(dataExpenses);
  const totalAmount = totalAmountExpenses + totalAmountIncomes;

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">%Month%</span>:
        </div>
        <div className="budget__value">{formatStringAmount(totalAmount)}</div>
        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              {formatStringAmount(totalAmountIncomes)}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">
              {formatStringAmount(totalAmountExpenses)}
            </div>
            <div className="budget__expenses--percentage">
              {formatPercent(totalAmountExpenses, totalAmountIncomes)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BudgetHeader;
