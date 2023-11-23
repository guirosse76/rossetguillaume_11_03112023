import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../../redux/features/user";
import { getFirstName } from "../../redux/features/User/firstName";
import { getLastName } from "../../redux/features/User/lastName";
import { Navigate } from "react-router-dom";

function Logout() {
  // Change the token
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(0));
    dispatch(getFirstName(""));
    dispatch(getLastName(""));

    localStorage.removeItem("token");
  });

  // Redirection
  return <Navigate to="/" />;
}

export default Logout;
