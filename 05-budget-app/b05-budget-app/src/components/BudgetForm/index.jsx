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

  const [formData, setFormData] = useState({
    desc: "",
    amount: "",
    sign: "inc",
  });
  const handleChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "amount" && value !== "") {
      value = +value;
    }
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
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

  const handleAddBudget = () => {
    let amount =
      formData.sign === "inc" ? formData.amount : formData.amount * -1;
    let item = {
      id: uuidv4(),
      desc: formData.desc,
      amount: amount,
    };
    dispatch(actAddItem(item));
    setFormData({
      desc: "",
      amount: "",
      sign: "inc",
    });
  };
  return (
    <>
      {/* Trường hợp dấu + */}
      <div className="add">
        <div className="add__container">
          <select
            className={"add__type" + state.className}
            onChange={handleChangeData}
            name="sign"
          >
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input
            type="text"
            className={"add__description" + state.className}
            placeholder="Add description"
            onChange={handleChangeData}
            name="desc"
            value={formData.desc}
          />
          <input
            type="number"
            className={"add__value" + state.className}
            placeholder="Value"
            onChange={handleChangeData}
            name="amount"
            value={formData.amount}
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
