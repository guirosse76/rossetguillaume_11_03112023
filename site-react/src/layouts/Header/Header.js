import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { setToken } from "../../redux/features/user";
// import { getLoginFetch } from "../../services/API";
// import { setUserName } from "../../redux/features/user";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
// import firstName from "../../redux/features/User/firstName";

function Header() {
  // Use Selector
  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.user.token);

  console.log(userName, token);

  // Use Effect
  // const dispatch = useDispatch();
  // useEffect(() => {
  // if (token === localStorage.getItem("token")) {
  //   dispatch(setToken(localStorage.getItem("token")));
  //   const user = getLoginFetch(token);
  //   user.then((obj) => {
  //     dispatch(setUserName(obj.userName));
  //   });
  // }
  // if (token) {
  // }
  // });

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
