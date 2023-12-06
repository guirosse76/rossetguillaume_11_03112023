import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";

function Header() {
  // Use Selector
  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.user.token);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {/* Anonyme */}
        {!token && (
          <>
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </>
        )}

        {/* Connecté */}
        {token && (
          <>
            <NavLink to="/profil" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName}
            </NavLink>
            <NavLink to="/logout" className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
