import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import Checklist from "./ChecklistPage";
import ResetPassword from "./ResetPassword";
import LocateEmail from "./LocateEmail";
import MonthlyView from "./MonthlyView";

import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/MonthlyView" element={<MonthlyView/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>

      </BrowserRouter>


     
    </div>
  );
}

export default App;
