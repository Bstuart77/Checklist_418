import React, { useState } from "react";
import "./ResetPassword.css";
// TODO upon successfully obtaining a new password from the user, send it to the backend for recording, get the okay status from backend, and then take User to a new page.

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setNewPasswordConfirmation] = useState("");

  const submissionHandler = (e) => {
    e.preventDefault();

    const resetPassword = { newPassword };
    const resetPasswordConfirmation = { confirmNewPassword };
    // keeping the consts to send the stored password to backend.
    if (
      newPassword.length === 1 ||
      newPassword.length <= 6 ||
      confirmNewPassword.length === 1 ||
      confirmNewPassword.length <= 6
    ) {
      alert("Your password has to be at least 7 characters long.");
      console.log(newPassword);
      console.log(confirmNewPassword);
    } else if (!newPassword.trim() || !confirmNewPassword.trim()) {
      alert("Please enter a new password. Don't leave it blank.");
      console.log(newPassword);
      console.log(confirmNewPassword);
    } else {
      if (confirmNewPassword !== newPassword) {
        alert("Your passwords don't match.");
        console.log(newPassword);
        console.log(confirmNewPassword);
      } else {
        alert("Your password was reset successfully.");
        console.log(resetPassword);
        console.log(resetPasswordConfirmation);
        // TODO send password to backend.
      }
    }
  };

  return (
    <div className="ResetPasswordBody">
      <div className="reset-password-content">
        <span className="circle2">
          <br />
          <br />
          <h1 className="reset-password-title">Reset Your Password</h1>
          <form className="reset-password-form">
            <label className="password-label">New Password</label>
            <br />
            <input
              className="password-input"
              type="password"
              required
              placeholder="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <label className="password-label">Confirm Your New Password</label>
            <br />
            <input
              className="password-input"
              type="password"
              required
              placeholder="password"
              onChange={(f) => [
                // setNewPassword(e.target.value),
                setNewPasswordConfirmation(f.target.value),
              ]}
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
