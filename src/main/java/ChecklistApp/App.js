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

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Your Planner</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/monthlyview">Calendar View</Nav.Link>
            <Nav.Link href="/checklist">Today's Tasks</Nav.Link>
            <Nav.Link href="/resetpassword">Reset Password</Nav.Link>
            <Nav.Link href="/locateemail">Locate Your Account</Nav.Link>
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
