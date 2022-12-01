import "../Login/login.css";
import Button from "../shared/Button/Button";
import Input from "../shared/Input";
function Login() {
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
                  <Input label="UserName" type="text" />
                  <Input label="Password" type="password" />
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
