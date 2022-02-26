import React, { useState } from "react";
import "./ResetPassword";
import "./ResetPassword.css";
import "./Login.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submissionHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className = "login-form" onSubmit={submissionHandler}>
      <div className="inside-form">

        <h1 className="page-title">Log In to *Planner*</h1>
        
        <br />

        {error !== "" ? <div className="error">{alert(error)}</div> : ""}
        
        <div className="form-group">
          <label htmlFor="UsernameLabel">Username:</label>

          <br />

          <input className = "username-input"
            type="text"
            name="name"
            placeholder="username"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />

        </div>

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
        <div className="reset-email">
          <label htmlFor="reset-email">Forgot Email?</label>
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
          <label htmlFor="reset-password">Forgot Password?</label>
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
}

export default LoginForm;
