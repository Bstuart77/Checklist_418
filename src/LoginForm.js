import React, { useState } from "react";
import "./ResetPassword";
import "./ResetPassword.css";
import "./LocateEmail";
import "./LocateEmail.css";
import "./Login.css";
import "./Profile";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({  email: "", password: "" });
    
  const submissionHandler = (e) => {
    e.preventDefault();    
    Login(details);
  };

  let ResetPassword = "./ResetPassword";
  let LocateEmail = "./LocateEmail";

  return (
    <form className = "login-form" onSubmit={submissionHandler}>
      <div className="inside-form">

        <h1 className="page-title">Log In to *Planner*</h1>
        
        <br />

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input className = "email-input"
            type="email" required
            name="email"
            placeholder="email@domain.com"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>  
        <div className="locate-email">
        <a htmlFor="locate-email" href={LocateEmail}>Forgot Email?</a>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <input className = "password-input"
            type="password" required
            name="password"
            placeholder="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <div className="reset-password">
          <a htmlFor="reset-password" href={ResetPassword}>Forgot Password?</a>
        </div>
        
        <input className="LoginButton" type="submit" value="Log In" />{" "}
        <br />
        <input
          className="LogInWithGoogleButton"
          type="submit"
          value="Log In with Google"
        />
      </div>

    </form>
  );
  // made the login buttons.
  // make a link to Google login inputs or some new page for it.
}

export default LoginForm;
