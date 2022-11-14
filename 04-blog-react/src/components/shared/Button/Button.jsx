import "../Button/button.css";
import IcoinLoading from "../IconLoading";

function Button() {
  return (
    <button className="btn btn-primary btn-size-large">
      <IcoinLoading></IcoinLoading>
      Load more
    </button>
  );
}
export default Button;
