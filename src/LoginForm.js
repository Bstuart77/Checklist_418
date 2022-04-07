import React, { useState } from "react";
import "./ResetPassword";
import "./ResetPassword.css";
import "./LocateEmail";
import "./LocateEmail.css";
import "./SignUp";
import "./Login.css";
import "./Profile";

let ResetPassword = "./ResetPassword";
let LocateEmail = "./LocateEmail";
let SignUp = "./SignUp";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submissionHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className="login-form" onSubmit={submissionHandler}>
      <h1 className="title">Log In to Planner</h1>

      <div className="emailStuff">
        <label className="emailLabel" htmlFor="email">
          Email:
        </label>

        <input
          className="email-input"
          type="email"
          required
          name="email"
          placeholder="email@domain.com"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />

        <div className="space">
          <br></br>
          {""}
        </div>

        <a className="locate-email" htmlFor="locate-email" href={LocateEmail}>
          Forgot Your Account Name?
        </a>
      </div>

      <div className="passwordStuff">
        <label htmlFor="password">Password:</label>
        <input
          className="password-input"
          type="password"
          required
          name="password"
          placeholder="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />

        <div className="space2">
          <br></br>
          {""}
        </div>

        <div className="reset-password">
          <a htmlFor="reset-password" href={ResetPassword}>
            Forgot Your Password?
          </a>
        </div>

        <div className="space3">
          <br></br>
          {""}
        </div>

        <input className="LoginButton" type="submit" value="Log In" />
        {""}
      </div>
      <div className="toSignUp">
        <a htmlFor="sign-up" href={SignUp}>
          Don't have an account? Sign up!
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
