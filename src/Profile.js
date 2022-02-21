import React from 'react'
import './Profile.css'
// import img1 from './images/doggy.jpg'

function ProfilePage(){
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
                        Welcome back, ()
                    </div>


                </div>
                
                <div className = 'ProfileFooter'>
                    <button className = "Checklist"> Your Checklist </button>
                    <button className = "ChangeProfile"> Change Profile Picture </button>
                    <button className = "ChangeBackground"> Change Background </button>
                    <button className = "Logout"> Log Out </button>

                </div>


            </div>
        </div>




    // <h5> Header test idoasjdiasodj as</h5>
    )
}
    
export default ProfilePage