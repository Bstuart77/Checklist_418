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
        <h1>Log In to *Planner*</h1>
        <br />
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="UsernameLabel">Username:</label>
          <input
            type="text"
            name="name"
            placeholder="Username"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email" required
            name="email"
            placeholder="email@domain.com"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />

          <br />
          
        </div>
        
        <div className="reset-email">
          <label htmlFor="reset-email">Forgot Email?</label>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <input
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
        <input
          className="LogInWithGoogleButton"
          type="submit"
          value="Log In with Google"
        />
      </div>
    </form>
  );
  // made the login button.
}

export default LoginForm;
