import React, { useState } from "react";
import "./ResetPassword.css";
// TODO upon successfully obtaining a new password from the user, send it to the backend for recording, get the okay status from backend, and then take User to a new page.

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");

  const submissionHandler = (e) => {
    e.preventDefault();

    const resetPassword = { newPassword };
    if (newPassword.length == 1 || newPassword.length <= 7){
      alert("Your password has to be at least 7 characters long.");
      setNewPassword("");
    } else if (!newPassword.trim()) {
      alert("Please enter a new password. Don't leave it blank.");
    } else {
      console.log(resetPassword);
      // send info to backend for recording
    }
  };

  return (
    <div className = "ResetPasswordBody">
      <div className="reset-password-content">
        <span className="circle2">
          <br />
          <br />
          <h1 className="reset-password-title">Reset Your Password</h1>
          <form className="reset-password-form">
            <label className="password-label">New Password</label>
            <input
              className="password-input"
              type="password"
              required
              placeholder="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <br />
            <button className="new-password-button" onClick={submissionHandler}>
              Reset My Password
            </button>
          </form>
        </span>
      </div>



    </div>
  );
}

export default ResetPassword;
