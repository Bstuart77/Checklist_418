import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

function LoginMain() {
  const testUser = {
    email: "test@test.com",
    password: "test",
  };

  const [user, setUserData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === testUser.email &&
      details.password === testUser.password
    ) {
      console.log("Successfully logged in.");
      setUserData({
        name: details.name,
        email: details.email,
      });
    } 
    else {
      if (details.email === "" ||
        details.password === ""){
          console.log("At least one of the fields is blank. Enter something for all the fields.");
          setError("At least one of the fields is blank. Enter something for all the fields.");
          return <h1>At least one of the fields is blank. Enter something for all the fields and try again.</h1>;    
        }
        else{
          console.log("Login details do not match any records. Please try again.");
          setError("Login details do not match any records. Please try again.");
          return <h1>The password and email combination don't match. Please try again.</h1>;    
        }
    }
  }

  const Logout = () => {
    console.log("Logged out.");
    setUserData({ name: "", email: "" });
  };

  // Welcoming the User after they've logged in.
  return (
    <div className="LoginPage">
      {user.email !== "" ? (
        <div className="Welcome">
          <h2>
            Welcome to *Planner*, <span>{user.name}</span>
          </h2>
          <button className = "LogoutButton" onClick={Logout}>Log Out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
        // show login form when User is not logged in.
      )}
    </div>
  );
}

export default LoginMain;