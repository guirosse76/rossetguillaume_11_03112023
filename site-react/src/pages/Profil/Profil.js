import "./Profil.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoginFetch, saveUserProfil } from "../../services/API";
import {
  setFirstName,
  setUserName,
  setLastName,
} from "../../redux/features/user.js";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account/Account";

function Profil() {
  // Use State
  let [newFirstName, setNewFirstName] = useState("");
  let [newLastName, setNewLastName] = useState("");
  let [newUserName, setNewUserName] = useState("");
  let [openForm, setOpenForm] = useState(false);

  // Use Selector / Use Effect
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    // if (token) {
    const user = getLoginFetch(token);
    user.then((obj) => {
      console.log(obj);
      dispatch(setUserName(obj.userName));
      dispatch(setFirstName(obj.firstName));
      dispatch(setLastName(obj.lastName));
    });
    // }
  }, [token, dispatch]);

  // Edit name
  const handleEdit = () => {
    setOpenForm(true);
    //   document.getElementById("fullName").style.display = "none";
    //   document.getElementById("edit-button").style.display = "none";
    //   document.getElementById("edit-section").style.display = "block";
  };

  // Save Edit
  const handleEditSave = () => {
    setOpenForm(false);
    // document.getElementById("fullName").style.display = "block";
    // document.getElementById("edit-button").style.display = "initial";
    // document.getElementById("edit-section").style.display = "none";
    // dispatch(setFirstName(newFirstName));
    // dispatch(setLastName(newLastName));
    dispatch(setUserName(newUserName));
    const fullName = {
      // firstName: newFirstName,
      // lastName: newLastName,
      userName: newUserName,
    };
    saveUserProfil(token, fullName);
  };

  // Cancel Edit
  const handleEditCancel = () => {
    setOpenForm(false);
    //   document.getElementById("fullName").style.display = "block";
    //   document.getElementById("edit-button").style.display = "initial";
    //   document.getElementById("edit-section").style.display = "none";
  };

  // Redirection
  if (!token) return <Navigate to="/login" />;

  return (
    <main className="bg-dark">
      <div className="header">
        <h1 id="welcome-name">
          Welcome back
          <br />
          {!openForm && (
            <span id="fullName">
              {firstName} {lastName}
            </span>
          )}
        </h1>
        {!openForm && (
          <button id="edit-button" type="button" onClick={handleEdit}>
            Edit Name
          </button>
        )}
        {openForm && (
          <div id="edit-section">
            <form name="edit">
              <div className="profil-input-wrapper">
                <span>User name :</span>
                <input
                  type="text"
                  placeholder={userName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  required
                />
              </div>
              <div className="profil-input-wrapper">
                <span>First Name :</span>
                <input
                  type="text"
                  placeholder={firstName}
                  // onChange={(e) => setNewFirstName(e.target.value)}
                  disabled
                />
              </div>
              <div className="profil-input-wrapper">
                <span>Last Name :</span>
                <input
                  type="text"
                  placeholder={lastName}
                  // onChange={(e) => setNewLastName(e.target.value)}
                  disabled
                />
              </div>
            </form>
            <div className="btn-form">
              <button
                type="submit"
                className="save-button"
                onClick={handleEditSave}
              >
                Save
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={handleEditCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        titre="Argent Bank Checking (x8349)"
        montant="$2,082.79"
        description="Available Balance"
      />
      <Account
        titre="Argent Bank Savings (x6712)"
        montant="$10,928.42"
        description="Available Balance"
      />
      <Account
        titre="Argent Bank Credit Card (x8349)"
        montant="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default Profil;
