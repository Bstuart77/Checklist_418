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

function LoginForm({ Login }) {
  const [userEmailAddress, setEmail] = useState({ email: "" });
  const [loginPassword, setPassword] = useState({ password: "" });

  const submissionHandler = (e) => {
    e.preventDefault();
    Login(userEmailAddress, loginPassword); // pass data
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
          onChange={(e) => setEmail({ email: e.target.value })}
          value={userEmailAddress.email}
        />

        <div className="locate-email-link-lg">
          <a htmlFor="locate-email" href={LocateEmail}>
            Forgot Your Account Name?
          </a>
        </div>
      </div>

      <div className="passwordStuff">
        <label className="password-label-login-pg">Password:</label>
        <input
          className="password-input-login"
          type="password"
          required
          name="password"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword({ password: e.target.value })}
          value={loginPassword.password}
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
          Sign Up for an Account
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
