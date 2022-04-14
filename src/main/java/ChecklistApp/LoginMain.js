import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginMain() {
  const history = useNavigate();
  const testUser = {
    email: "test@test.com",
    password: "test",
  };

  const [user, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (details.email === "" || details.password === "") {
      console.log(
        "At least one of the fields is blank. Enter something for all the fields."
      );
      alert(
        "At least one of the fields is blank. Enter something for all the fields."
      );
      setError(
        "At least one of the fields is blank. Enter something for all the fields."
      );
    } else {
      const url = "http://localhost:8080/account/login"; // this is the server's URL. the server uses port 8080.
      axios
        .post(url, details)
        .then((response) => {
          console.log(response.data);
          console.log("Successfully logged in.");
          setUserData({
            email: testUser.email,
            // email: response.data.email,
          }); // ? <not sure if this will work.> supposed to return a User object--ask for change to return statements from the BE
          // DON'T RETURN THE PASSWORD. DON'T.
          history("/profile");
        })
        .catch((er) => {
          console.log(
            "Login details do not match any records. Please try again."
          );
          alert("Login details do not match any records. Please try again.");
          setError("Login details do not match any records. Please try again.");
        });
    }
  };

  const Logout = () => {
    console.log("Logged out.");
    setUserData({ email: "" });
  };

  // redirect the user to the profile page after they've logged in.
  return (
    <div className="LoginPageBody">
      <div className="LoginPage">
        {user.email !== "" ? (
          <>
            <Navigate to="/profile" replace={true} />
          </>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </div>
  );
}

export default LoginMain;
