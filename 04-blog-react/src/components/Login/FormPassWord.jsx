import Button from "../shared/Button/Button";
import { useState } from "react";
function FormPassWord() {
  const [ShowPassword, setShowPassword] = useState("password");
  let isShowIcon = <input type= placeholder="Enter Password ..." />;
  const handleShowPassword = (props) => {};

  return (
    <div className="form-control">
      <label htmlFor="true">Password</label>
      {isShowIcon}
      <div onClick={handleShowPassword}>
        <Button as="i" type="toggle-password ion-eye"></Button>
      </div>
    </div>
  );
}
export default FormPassWord;
