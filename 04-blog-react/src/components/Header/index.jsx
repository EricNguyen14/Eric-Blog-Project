import "./header.css";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
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
            <HeaderMenu></HeaderMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
