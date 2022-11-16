import "../Button/button.css";
import Iconloading from "../IconLoading";
function Button({ type, children, size, as, isShowIcon, href, ...restProps }) {
  const typeClass = {
    default: "btn btn-default",
    primary: "btn btn-primary",
    category: "btn btn-category",
  };
  let type1 = "";
  if (type === "default") {
    type1 = typeClass.default;
  }
  if (type === "primary") {
    type1 = typeClass.primary;
  }
  if (type === "category") {
    type1 = typeClass.category;
  }
  let size1 = ` btn-size-` + size;

  return (
    <>
      {as === "button" && (
        <button className={type1 + size1}>
          {isShowIcon && <Iconloading />}
          {children}
        </button>
      )}
      {as === "i" && <i className={type}></i>}
      {as === "a" && (
        <a href={href} className={type1 + size1}>
          {children}
        </a>
      )}
    </>
  );
}
export default Button;
