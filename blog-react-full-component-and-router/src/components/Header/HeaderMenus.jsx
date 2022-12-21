import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderMenus() {
  const menu = useSelector((state) => state.MENU.menu);
  const showMenu = (item, index) => {
    return (
      <li key={index}>
        <a href="/">{item?.title}</a>
        {item.childItems.length > 0 && <ul>{item.childItems.map(showMenu)}</ul>}
      </li>
    );
  };
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">{menu && menu.map(showMenu)}</ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
