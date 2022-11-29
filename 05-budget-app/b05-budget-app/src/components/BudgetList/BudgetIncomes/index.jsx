import Item from "../../Item";
function BudgetIncomes({ dataIncomes }) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {dataIncomes.map((item, index) => {
          return (
            <Item
              key={index}
              desc={item.desc}
              amount={item.amount}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default BudgetIncomes;
