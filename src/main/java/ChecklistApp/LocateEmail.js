import React, { useState } from "react";
import axios from "axios";
import "./LocateEmail.css";
import "./ResetPassword";
import "./SignUp";

function LocateEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submissionHandler = (e) => {
    e.preventDefault();
    let emailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const locateEmail = { email };
    const emailAddress = { locateEmail };
    if (!email.trim()) {
      alert("Please enter the email you think you registered with.");
    } else {
      if (emailFormat.test(email)) {
        console.log("The user looked up: ", locateEmail);

        const url = "100.24.37.156:8080/account/locateEmail";
        axios
          .get(url, { emailAddress: emailAddress })
          .then((response) => {
            console.log(response.data);
            setError(response);

            console.log("Sent email to locate.");
            setEmail({
              email: locateEmail,
            });

            if (response === 200) {
              console.log(
                locateEmail,
                "The email entered has an account with this service."
              );
              alert(
                "You have an account with our service. Please sign into your account or reset your password.\n"
              );
            }
          })
          .catch((error) => {
            if (error === 404) {
              console.log("Connecting failed.");
              alert("Connecting failed.");
              setError("Connecting failed.");
            }
            // The email wasn't used to register an account, so error 401 occurred.
            if (error === 401) {
              console.log(
                locateEmail,
                "The email entered doesn't have an account with this service. Try entering another email or sign up using this email."
              );
              alert(
                "You do not have an account with our service. Please sign up or try searching for your account with another email.\n"
              );
            }
          });
      } else {
        console.log("Invalid email format entered.");
        alert("Invalid email format entered. Try again.");
      }
    }
  };

  return (
    <div className="LocateEmailBody">
      <span className="circle">
        <br />
        <br />
        <h1 className="locate-email-title">Locate Your Account</h1>
        <form className="locate-email-form">
          <label className="locate-email-label">Email</label>
          <input
            className="locate-email-input"
            type="email"
            required
            placeholder="email@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <button className="locate-login-button" onClick={submissionHandler}>
            Locate Email Login
          </button>
        </form>

        <div className="other-links">
          <a htmlFor="to-reset-password" href={"./ResetPassword"}>
            {"Reset Password"}
          </a>
          <br></br>
          <a htmlFor="to-sign-up" href={"./SignUp"}>
            {"Sign Up for an Account"}
          </a>
        </div>
        <br></br>
      </span>
    </div>
  );
}

export default LocateEmail;
