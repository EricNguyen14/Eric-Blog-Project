import { useState } from "react";
import cls from "classnames";

function Input({ type, label, isSearch, ...restProps }) {
  const [localType, setLocalType] = useState(type);
  function handlePassWord() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }

  const classesIconPassword = cls("toggle-password", {
    "ion-eye": localType === "password",
    "ion-eye-disabled": localType === "text",
  });

  return (
    (isSearch && (
      <div className="header-search">
        <input
          className="header-search__input"
          type={localType}
          {...restProps}
        />
      </div>
    )) || (
      <div className="tcl-container">
        <div className="form-control">
          {label && <label>{label}</label>}
          {type === "password" && (
            <i className={classesIconPassword} onClick={handlePassWord}></i>
          )}
          <input type={localType} {...restProps} />
        </div>
      </div>
    )
  );
}
export default Input;
