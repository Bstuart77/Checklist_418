import React, { useState } from "react";
import "./ResetPassword";
import "./ResetPassword.css";
import "./LocateEmail";
import "./LocateEmail.css";
import "./SignUp";
import "./Login.css";
import "./Profile";
import axios from "axios";

let ResetPassword = "./ResetPassword";
let LocateEmail = "./LocateEmail";
let SignUp = "./SignUp";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  // TODO make the variables have their separate consts.

  const submissionHandler = (e) => {
    e.preventDefault();
    Login(details); // pass data
  };

  return (
    <form className="login-form" onSubmit={submissionHandler}>
      <h1 className="login-title">Log In to Planner</h1>

      <div className="emailStuff">
        <label className="email-label-login-pg" htmlFor="email">
          Email:
        </label>
        <input
          className="email-input-on-login"
          type="email"
          required
          name="email"
          placeholder="email@domain.com"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <br></br>
        <div className="locate-email-link-lg">
          <a htmlFor="locate-email" href={LocateEmail}>
            Forgot Your Account Name?
          </a>
        </div>
      </div>
      <br></br>

      <div className="passwordStuff">
        <label className="password-label-login-pg">Password:</label>
        <input
          className="password-input-login"
          type="password"
          required
          name="password"
          placeholder="password"
          id="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />

        <div className="reset-password-link-lg">
          <a htmlFor="reset-password-lg" href={ResetPassword}>
            Forgot Your Password?
          </a>
        </div>

        <input
          className="login-button-login-page"
          type="submit"
          value="Log In"
        />
      </div>
      <div className="to-sign-up-pg">
        <a htmlFor="sign-up-lg" href={SignUp}>
          Don't have an account? Sign up!
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
