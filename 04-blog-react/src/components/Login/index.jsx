import "../Login/login.css";
import Button from "../shared/Button/Button";
import { useState } from "react";
function Login() {
  const [showPass, setShowPass] = useState(true);
  const [showEye, setShowEye] = useState(true);
  let isShowEye = "toggle-password ion-eye";
  let isShowPass = "password";
  if (showPass === false) {
    isShowPass = "text";
  }
  if (showEye === false) {
    isShowEye = "toggle-password ion-eye";
  }
  const handleShowPassword = () => {
    setShowPass(!showPass);
    setShowEye(!showEye);
  };
  return (
    <div>
      <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
          <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
              <h1 className="form-title text-center">Login</h1>
              <div className="form-login-register">
                <form action="true">
                  <div className="form-control">
                    <label htmlFor="true">Username</label>
                    <input type="text" placeholder="Enter Username ..." />
                  </div>
                  <div className="form-control">
                    <label htmlFor="true">Password</label>
                    <div onClick={handleShowPassword}>
                      <Button as="i" type={isShowEye}></Button>
                    </div>
                    <input type={isShowPass} placeholder="Enter Password ..." />
                  </div>
                  <div className="d-flex tcl-jc-between tcl-ais-center">
                    <Button type="primary" size="large" as="button">
                      Sumbit
                    </Button>
                    <a href="register.html">Regiter</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing" />
      </main>
    </div>
  );
}
export default Login;
