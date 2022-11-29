import { useState, useEffect } from "react";
import { actAddItem } from "../../store/action";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
function BudgetForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    optionSelected: "inc",
    className: "",
    tagIclassName: "",
  });
  const [desc, setDesc] = useState();
  const [amount, setAmount] = useState();
  const handleChange = (event) => {
    if (event.target.value === "exp") {
      setState({
        optionSelected: "exp",
        className: " red-focus",
        tagIclassName: "red",
      });
    } else if (event.target.value === "inc") {
      setState({
        optionSelected: "inc",
        className: "",
        tagIclassName: "",
      });
    }
  };
  const handleGetAmount = (event) => {
    let typeOfAmount = state.optionSelected;
    if (typeOfAmount === "exp") {
      setAmount(-event.target.value);
    } else setAmount(+event.target.value);
  };
  const handleGetDesc = (event) => {
    setDesc(event.target.value);
  };
  let descValue = desc;
  let amountValue = amount;
  const handleAddBudget = () => {
    setDesc("");
    setAmount(" ");
    let item = {
      id: uuidv4(),
      desc: desc,
      amount: amount,
    };
    dispatch(actAddItem(item));
  };
  return (
    <>
      {/* Trường hợp dấu + */}
      <div className="add">
        <div className="add__container">
          <select
            className={"add__type" + state.className}
            value={state.optionSelected}
            onChange={handleChange}
          >
            <option value="inc" selected>
              +
            </option>
            <option value="exp">-</option>
          </select>
          <input
            type="text"
            className={"add__description" + state.className}
            placeholder="Add description"
            onChange={handleGetDesc}
            value={descValue}
          />
          <input
            type="number"
            className={"add__value" + state.className}
            placeholder="Value"
            onChange={handleGetAmount}
            value={amountValue}
          />
          <button
            className={"add__btn " + state.tagIclassName}
            onClick={handleAddBudget}
          >
            <i className="ion-ios-checkmark-outline" />
          </button>
        </div>
      </div>
    </>
  );
}
export default BudgetForm;
