import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginMain() {
  const history = useNavigate();

  const user = {
    email: "test@test.com",
    password: "test",
  };

  const [userEmailAddress, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [error, setError] = useState("");

  const Login = (userEmailAddress, loginPassword) => {
    if (userEmailAddress === "" || loginPassword === "") {
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
      const url = "http://localhost:8080/account/login";
      axios
        .post(url, userEmailAddress, loginPassword)
        .then((response) => {
          console.log(response.data);
          setError(response);

          if (response == 200) {
            console.log("Successfully logged in.");
            setEmail({
              userEmailAddress: userEmailAddress,
            }); // ?
            history("/profile");
          }
        })
        .catch((error) => {
          // use error to handle specific errors:
          alert("MAYBE YOU'RE NOT EVEN ON THE INTERNET.");

          // when the response is 401:
          console.log(
            "Login details do not match any records. Please try again."
          );
          alert(
            "The login details do not match any records. Please try again."
          );
          setError(
            "The login details do not match any records. Please try again."
          );
        });
    }
  };

  const Logout = () => {
    console.log("Logged out.");
    setEmail("");
  };

  // redirect the user to the profile page after they've logged in.
  return (
    <div className="LoginPageBody">
      <div className="LoginPage">
        {userEmailAddress !== "" ? (
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
