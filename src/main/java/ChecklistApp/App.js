import SignUp from "./SignUp";
import LoginMain from "./LoginMain";
import Profile from "./Profile";
import Checklist from "./ChecklistPage";
import ResetPassword from "./ResetPassword";
import LocateEmail from "./LocateEmail";
import MonthlyView from "./MonthlyView";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { useState } from "react";

function App() {
  // const [localStorage, setLocalStorage] = useState("");

  // function displayNavbar() {
  //   if (localStorage === "t") {
  //     return (
  //       <Navbar bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand href="/">📝MyPlanner</Navbar.Brand>
  //           <Nav className="me-auto">
  //             <Nav.Link href="/profile">Profile</Nav.Link>
  //             <Nav.Link href="/monthlyview">Calendar</Nav.Link>
  //             <Nav.Link href="/resetpassword">Reset Password</Nav.Link>
  //             <Nav.Link href="/locateemail">Locate Account</Nav.Link>
  //             <Nav.Link
  //               href="/login"
  //               onClick={
  //                 (setLocalStorage("f"), localStorage.removeItem("navbar", "t"))
  //               }
  //             >
  //               Log Out
  //             </Nav.Link>
  //           </Nav>
  //         </Container>
  //       </Navbar>
  //     );
  //   } else {
  //     // localStorage is "f" or null:
  //     return (
  //       <Navbar bg="dark" variant="dark">
  //         <Container>
  //           <Navbar.Brand href="/">📝MyPlanner</Navbar.Brand>
  //           <Nav className="me-auto">
  //             <Nav.Link href="/login">Login</Nav.Link>
  //             <Nav.Link href="/signup">Sign Up</Nav.Link>
  //             <Nav.Link href="/resetpassword">Reset Password</Nav.Link>
  //             <Nav.Link href="/locateemail">Locate Account</Nav.Link>
  //           </Nav>
  //         </Container>
  //       </Navbar>
  //     );
  //   }
  // }

  return (
    <div className="App">
      {/* {displayNavbar()} */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">📝MyPlanner</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            {/* <Nav.Link href="/checklist">Today's Tasks</Nav.Link> */}
            <Nav.Link href="/monthlyview">Calendar</Nav.Link>
            <Nav.Link href="/resetpassword">Reset Password</Nav.Link>
            <Nav.Link href="/locateemail">Locate Account</Nav.Link>
            <Nav.Link href="/login">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>{" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginMain />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/locateemail" element={<LocateEmail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/monthlyview" element={<MonthlyView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
