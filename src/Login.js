import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";

function LoginMain() {
  const testUser = {
    email: "test@test.com",
    password: "test",
  };

  const [user, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === testUser.email &&
      details.password === testUser.password
    ) {
      console.log("Successfully logged in.");
      setUserData({
        email: details.email,
      });
    } else {
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
        console.log(
          "Login details do not match any records. Please try again."
        );
        alert("Login details do not match any records. Please try again.");
        setError("Login details do not match any records. Please try again.");
      }
    }
  };

  // const Logout = () => {
  //   console.log("Logged out.");
  //   setUserData({ email: "" }); //name: "",
  // };

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
