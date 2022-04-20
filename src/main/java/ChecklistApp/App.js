import SignUp from "./SignUp";
import LoginMain from "./LoginMain";
import Profile from "./Profile";
import Checklist from "./ChecklistPage";
import ResetPassword from "./ResetPassword";
import LocateEmail from "./LocateEmail";
import MonthlyView from "./MonthlyView";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";

function App() {
  return (
    <div className="App">
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
