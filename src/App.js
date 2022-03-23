import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import Checklist from "./ChecklistPage";
import ResetPassword from "./ResetPassword";
import LocateEmail from "./LocateEmail";
import {gapi} from 'gapi-script'
import { useEffect } from "react";
const clientId = "222186129129-lheckv1f7jfcq4225n35ob7aed05tooc.apps.googleusercontent.com"

function App() {

  useEffect(() =>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2',start);
  })

  return (
    <div className="App">
  
      {/* <Login/>
      {<><img src="images/spiral.PNG" className='Spiral1' /><img src="images/spiral.PNG" className='Spiral2' /><img src="images/spiral.PNG" className='Spiral3' /><img src="images/spiral.PNG" className='Spiral4' /><img src="images/spiral.PNG" className='Spiral5' /><img src="images/spiral.PNG" className='Spiral6' /></> } */}

      {/* <ResetPassword/> */}
      {/* <LocateEmail/> */}
      
      {/* <SignUp />    
      <img src="images/spiral.PNG" className='SignUpSpiral1' /><img src="images/spiral.PNG" className='SignUpSpiral2' /><img src="images/spiral.PNG" className='SignUpSpiral3' /><img src="images/spiral.PNG" className='SignUpSpiral4' /><img src="images/spiral.PNG" className='SignUpSpiral5' /><img src="images/spiral.PNG" className='SignUpSpiral6' /> */}
      

      {/* <Profile/>  */}
    </div>
  );
}

export default App;
