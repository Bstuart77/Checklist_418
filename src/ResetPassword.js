import React, { useState } from "react";
import "./ResetPassword.css";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");

  const submitSignUp = (e) => {
    e.preventDefault();

    const resetPassword = { newPassword };
    if (!newPassword.trim()) {
      alert("Please enter a new password. Don't leave it blank.");
    } else {
      console.log(resetPassword);
    }
  };

  return (
    <div className="reset-password-content">
      <span class="circle">
        <br />
        <br />
        <h1 className="reset-password-title">Reset Your Password</h1>
        <form className="reset-password-form">
          <label className="password-label">New Password</label>
          <input
            className="password-input"
            type="text"
            required
            placeholder="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <br />
          <button className="new-password-button" onClick={submitSignUp}>
            Reset My Password
          </button>
        </form>
      </span>
    </div>
  );
}

export default ResetPassword;
