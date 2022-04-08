import React, { useState } from "react";
import "./ResetPassword.css";
// TODO upon successfully obtaining a new password from the user, send it to the backend for recording, get the okay status from backend, and then take User to a new page.

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setNewPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");

  const submissionHandler = (e) => {
    e.preventDefault();

    const resetPassword = { newPassword };
    const resetPasswordConfirmation = { confirmNewPassword };
    // keeping the consts to send the stored password to backend.

    let emailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim()) {
      alert("You have to input an email address in the correct format.");
    } else if (email.length > 1) {
      if (emailFormat.test(email)) {
        console.log(email);
        // TODO send the email to the backend and wait for its reponse.
        // if the user has an account with the service then change their password if the inputted new password is legal.
        console.log("The account exists.\n");
        if (email === "test@test.com") {
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
              console.log(resetPassword);
              console.log(resetPasswordConfirmation);

              // TODO send password to backend.

              console.log(
                email,
                "The password for the account was successfully changed.\n"
              );
              alert("Password was successfully changed for the account.\n");
            }
          }
        } else {
          console.log(
            email,
            "Resetting your password failed. The email you entered doesn't have an account with this service.\n\nMake sure you didn't make a typo in your email or use our locate your account/email feature. You can also sign up for an account.\n"
          );
          alert(
            "Resetting your password failed. The email you entered doesn't have an account with this service.\n\nMake sure you didn't make a typo in your email or use our locate your account/email feature. You can also sign up for an account.\n"
          );
        }
      } else {
        console.log("Invalid email format entered.\nTry again.\n");
        alert("Invalid email format entered. Try again.");
      }
    } else {
      console.log("Invalid email format entered.\nTry again.\n");
      alert("Invalid email format entered. Try again.");
    }
  };

  return (
    <div className="ResetPasswordBody">
      <span className="circle2">
        <br />

        <h1 className="reset-password-title">Reset Password</h1>

        <form className="reset-password-form">
          <label className="email-label">Email:</label>

          <br />

          <input
            className="email-input-reset-page"
            type="email"
            required
            placeholder="email@domain.com"
            onChange={(g) => setEmail(g.target.value)}
          />

          <br />

          <label className="password-label-reset-page">New Password:</label>

          <br />

          <input
            className="password-input-reset-page"
            type="password"
            required
            placeholder="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <br />

          <label className="password-label-reset-page">
            Confirm Your Password:
          </label>

          <br />

          <input
            className="password-input-reset-page"
            type="password"
            required
            placeholder="password"
            onChange={(f) => [setNewPasswordConfirmation(f.target.value)]}
          />

          <br />

          <button
            className="new-password-button-reset-page"
            onClick={submissionHandler}
          >
            Reset My Password
          </button>
        </form>
      </span>
    </div>
  );
}

export default ResetPassword;
