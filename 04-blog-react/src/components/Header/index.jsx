import "./header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
function Header() {
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          {/*  Header Logo */}
          <HeaderLogo />
          {/* Header Search   */}
          <HeaderSearch></HeaderSearch>
          <div className="tcl-col-6">
            <div className="header-nav">
              <ul className="header-nav__lists">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                  <ul>
                    <li>
                      <a href="#">Our Team 1</a>
                    </li>
                    <li>
                      <a href="#">Our Team 2</a>
                    </li>
                    <li>
                      <a href="#">Our Team 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Contact</a>
                  <ul>
                    <li>
                      <a href="#">Contact 1</a>
                    </li>
                    <li>
                      <a href="#">Contact 2</a>
                    </li>
                    <li>
                      <a href="#">Contact 3</a>
                      <ul>
                        <li>
                          <a href="#">Contact 11</a>
                        </li>
                        <li>
                          <a href="#">Contact 12</a>
                        </li>
                        <li>
                          <a href="#">Contact 13</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="header-nav__lists">
                <li className="user">
                  <a href="login.html">
                    <i className="icons ion-person" /> Tài khoản
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
