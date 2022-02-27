import React, { useState } from "react";
import "./LocateEmail.css";

function LocateEmail() {
  const [email, setEmail] = useState("");

  const submitSignUp = (e) => {
    e.preventDefault();

    const locateEmail = { email };
    if (!email.trim()) {
      alert("Please enter the email you think you registered with.");
    } else {
      console.log(locateEmail);
    }
  };

  return (
    <div className="locate-email-content">
      <span class="circle">
        <br />
        <br />
        <br />
        <br />
        <h1 className="locate-email-title">Locate Your Email</h1>
        <form className="locate-email">
          <label className="email-label">Email</label>
          <input
            className="email-input"
            type="text"
            required
            placeholder="email@domain.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <br />
          <button className="Locate-Login" onClick={submitSignUp}>
            Locate Email Login
          </button>
        </form>
      </span>
    </div>
  );
}

export default LocateEmail;
