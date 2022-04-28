import React, { useState } from "react";
import "./ResetPassword.css";
import axios from "axios";

// TODO upon successfully obtaining a new password from the user, send it to the backend for recording, get the okay status from backend, and then take User to a new page.

function ResetPassword() {

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setNewPasswordConfirmation] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [error, setError] = useState("");

  const submissionHandler = (e) => {
    e.preventDefault();

    let emailAddressFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailAddress.trim()) {
      alert("You have to input an emailAddress address in the correct format.");
    } else if (emailAddress.length > 1) {
      if (emailAddressFormat.test(emailAddress)) {
        console.log("User entered: ", emailAddress);
        // if the user has an account with the service, change their password if the inputted new password is legal.
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
          // password is in valid form and has to be checked against itself before being sent to backend.
          if (confirmNewPassword !== newPassword) {
            alert("Your passwords don't match.");
            console.log(newPassword);
            console.log(confirmNewPassword);
          } else {
            // passwords match and will be sent to backend.
            console.log("User entered: ", newPassword);
            console.log("User confirmed: ", confirmNewPassword);

            const resetPasswordInfo = {emailAddress, confirmNewPassword};

            const url = "http://localhost:8080/account/resetPassword";
            axios
              .post(url, resetPasswordInfo, {headers: {"Content-Type": "application/json"}})
              .then((response) => {
                console.log(response.data);
                setError(response);
                console.log(
                  "Sent the account (emailAddress) to locate + verify and the password to change."
                );
                if (response.data === 200) {
                  // the emailAddress address is registered for an account and the password to it was successfully reset.
                  console.log(
                    emailAddress,
                    "The emailAddress entered has an account with this service."
                  );
                  console.log(
                    emailAddress,
                    "The password for the account was successfully changed.\n"
                  );
                  alert(
                    "The password was successfully changed for your account.\n"
                  );
                }else if (response.data === 404) {
                  console.log("Connecting failed.");
                  alert("Connecting failed.");
                  setError("Connecting failed.");
                }else if (response.data === 401) {
                  console.log(
                    emailAddress,
                    "Resetting your password failed. The emailAddress you entered doesn't have an account with this service.\n\nMake sure you didn't make a typo in your emailAddress or use our locate your account/emailAddress feature. You can also sign up for an account.\n"
                  );
                  alert(
                    "Resetting your password failed. The emailAddress you entered doesn't have an account with this service.\n\nMake sure you didn't make a typo in your emailAddress or use our locate your account/emailAddress feature. You can also sign up for an account.\n"
                  );
                }
              });  
            }
          }    
      } else {
        console.log("Invalid emailAddress format entered.\nTry again.\n");
        alert("Invalid emailAddress format entered. Try again.");
      }
    } else {
      console.log("Invalid emailAddress format entered.\nTry again.\n");
      alert("Invalid emailAddress format entered. Try again.");
    }
  };

  return (
    <div className="ResetPasswordBody">
      <span className="circle2">
        <br />

        <h2 className="reset-password-title">Reset Password</h2>

        <form className="reset-password-form">
          <label className="emailAddress-label">emailAddress:</label>

          <br />

          <input
            className="emailAddress-input-reset-page"
            type="emailAddress"
            required
            placeholder="emailAddress@domain.com"
            onChange={(g) => setemailAddress(g.target.value)}
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
