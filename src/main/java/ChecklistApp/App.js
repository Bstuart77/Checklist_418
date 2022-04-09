import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import Checklist from "./ChecklistPage";
import ResetPassword from "./ResetPassword";
import LocateEmail from "./LocateEmail";
import MonthlyView from "./MonthlyView";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
