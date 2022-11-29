import "../Button/button.css";
import Iconloading from "../IconLoading";
import cls from "classnames";

function Button({
  type,
  children,
  size,
  as,
  isShowIcon,
  htmlType = "button",
  iconPos = "left",
  className,
  ...restProps
}) {
  const classes = cls(
    "btn",
    {
      "btn-default": type === "default",
      "btn-category": type === "category",
      "btn-primary": type === "primary",
      "btn-size-large": size === "large",
    },
    className
  );
  const content = (
    <>
      {isShowIcon && iconPos === "left" && <Iconloading />}
      {children}
      {isShowIcon && iconPos === "right" && <Iconloading />}
    </>
  );
  if (as === "a") {
    return (
      <a className={classes} {...restProps}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={htmlType} {...restProps}>
      {content}
    </button>
  );
}
export default Button;
