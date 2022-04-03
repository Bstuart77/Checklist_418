import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

function LoginMain() {
  const testUser = {
    email: "test@test.com",
    password: "test",
  };

  const [user, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === testUser.email &&
      details.password === testUser.password
    ) {
      console.log("Successfully logged in.");
      setUserData({
        email: details.email,
      });
    } else {
      if (details.email === "" || details.password === "") {
        console.log(
          "At least one of the fields is blank. Enter something for all the fields."
        );
        alert(
          "At least one of the fields is blank. Enter something for all the fields."
        );
        setError(
          "At least one of the fields is blank. Enter something for all the fields."
        );
      } else {
        console.log(
          "Login details do not match any records. Please try again."
        );
        alert("Login details do not match any records. Please try again.");
        setError("Login details do not match any records. Please try again.");
      }
    }
  };

  const Logout = () => {
    console.log("Logged out.");
    setUserData({ email: "" }); //name: "",
  };

  // Welcoming the User after they've logged in.
  // TODO link this to checklist or profile instead:

  let Profile = "./Profile";

  return (
    <div className="LoginPageBody">
      <div className="LoginPage">
        {user.email !== "" ? (
          <>
            <div className="Welcome">
              <h2>Welcome to *Planner*.</h2>
            </div>

            <br></br>

            <a htmlFor="to-profile" href={Profile}>
              {"Redirect to Profile page or some dashboard page.\n"}
            </a>
            <br></br>

            <text>
              Scroll up to read the parts that are displayed directly on top of
              the mountains. This placeholder text (and the breaks) needs to be
              in the code. Otherwise, the background doesn't display fully and
              instead displays a white margin. More text goes here. When this is
              gone, the white margin shows up and the background is truncated.
              Adding a background color does not change the color of the white
              margin. I have no idea what it is. and also, the text has to be
              placed over some sort of background color / box color because this
              unreadable until you scroll up.
            </text>

            <br></br>

            <br></br>
            <button className="LogoutButton" onClick={Logout}>
              Log Out
            </button>
          </>
        ) : (
          <LoginForm Login={Login} error={error} />
          // show login form when User is not logged in.
          // <span>{user.name}</span>
        )}
      </div>
    </div>
  );
}

export default LoginMain;
