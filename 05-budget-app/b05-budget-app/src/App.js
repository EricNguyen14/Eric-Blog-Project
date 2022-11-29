import BudgetHeader from "./components/BudgetHeader";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";

function App() {
  return (
    <div className="App">
      <BudgetHeader></BudgetHeader>
      <div className="bottom">
        <BudgetForm></BudgetForm>
        <BudgetList></BudgetList>
      </div>
    </div>
  );
}

export default App;
