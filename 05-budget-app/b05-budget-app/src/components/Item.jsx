import { formatStringAmount, formatPercent } from "../helper";
import { useDispatch } from "react-redux";
import { actDeleteItemById } from "../store/action";

function Item({ desc, amount, total, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(actDeleteItemById(id));
  };
  return (
    <div className="item clearfix">
      <div className="item__description">{desc}</div>
      <div className="right clearfix">
        <div className="item__value">{formatStringAmount(amount)}</div>
        {amount < 0 && (
          <div className="item__percentage">{formatPercent(amount, total)}</div>
        )}
        <div className="item__delete">
          <button onClick={handleDelete} className="item__delete--btn">
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
