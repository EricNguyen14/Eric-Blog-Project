import Item from "../../Item";

function BudgetExpenses({ dataExpenses, total }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {dataExpenses.map((item, index) => (
          <Item
            key={index}
            desc={item.desc}
            amount={item.amount}
            total={total}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
export default BudgetExpenses;
