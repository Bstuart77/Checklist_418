import React from 'react'
import './Profile.css'
// import img1 from './images/doggy.jpg'

function ProfilePage(){

    function profile1(){
        document.body.style.background = "url('./images/mountain.jpg') no-repeat center";
        document.body.style.backgroundSize = "cover";
        console.log("Button clicked");
    }
    

    return(
        // <button id = "SettingsButton"> settings </button>
        // body is implicit
        <div className = 'Grid'>
            <div className = 'ProfileCard'>
                <div className = 'ProfileHeader'> 
                    <div className = 'ProfilePicture'>
                        <img src = "./images/doggy.jpg" alt ="you" />
                    </div>

                    <div className = 'ProfileGreeting'> 
                        Welcome back, asdsadada
                    </div>


                </div>
                
                <div className = 'ProfileFooter'>
                    <button className = "Checklist"> checklist </button>
                    <button className = "ChangeProfile"> profile picture </button>
                    <button className = "ChangeBackground"> back ground </button>
                    <button className = "Logout"> logout </button>

                </div>
            </div>

            <div className = 'ProfileModal'>
                <button onClick = {profile1}> 1 </button>
                <button className = 'profilebutton1'> 2 </button>
                <button className = 'profilebutton1'> 3 </button>
                <button className = 'profilebuttonuploadpic'> Upload Profile </button>
                
            
            </div>

            <div className = 'BackgroundModal'>
            
            </div>

            <div className = 'Settings'>
                /** This is where profile and background modal will eventually go to */
            
            </div>

        </div>
    )


    let btn1 = document.querySelector('#profilebutton1');

    btn1.addEventListener('click', () => {
        document.body.style.backgroundImage = "../public/images/mountain2.jpg";

    });

}
    
export default ProfilePage