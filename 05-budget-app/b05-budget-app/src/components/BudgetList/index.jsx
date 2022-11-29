import BudgetExpenses from "./BudgetExpenses";
import BudgetIncomes from "./BudgetIncomes";
import { useSelector } from "react-redux";
import { calcTotalAmount } from "../../helper";
function BudgetList() {
  const listData = useSelector((state) => state.listData);
  const dataIncomes = listData.filter((data) => {
    return data.amount > 0;
  });
  const dataExpenses = listData.filter((data) => {
    return data.amount < 0;
  });
  const totalAmountIncomes = calcTotalAmount(dataIncomes);

  return (
    <div className="container clearfix">
      <BudgetIncomes dataIncomes={dataIncomes}></BudgetIncomes>
      <BudgetExpenses
        dataExpenses={dataExpenses}
        total={totalAmountIncomes}
      ></BudgetExpenses>
    </div>
  );
}
export default BudgetList;
