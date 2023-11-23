import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  setFirstName,
  setLastName,
  setUserName,
  setToken,
} from "../../redux/features/user";

import { Navigate } from "react-router-dom";

function Logout() {
  // Change the token
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(null));
    dispatch(setUserName(null));
    dispatch(setFirstName(null));
    dispatch(setLastName(null));

    localStorage.removeItem("token");
  });

  // Redirection
  return <Navigate to="/" />;
}

export default Logout;
