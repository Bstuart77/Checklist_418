import React from 'react'
import './Profile.css'
// import img1 from './images/doggy.jpg'

function ProfilePage(){
    return(
        // <button id = "SettingsButton"> settings </button>
        // body is implicit
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
                <a href = "#" className = "ChangeProfilePicture"> Your Checklist</a>
                <a href = "#" className = "ChangeProfilePicture"> Edit Profile Picture</a>
                <a href = "#" className = "ChangeProfilePicture"> Edit Background </a>
                <a href = "#" className = "ChangeProfilePicture"> Log Out </a>

            </div>


        </div>




    // <h5> Header test idoasjdiasodj as</h5>
    )
}
    
export default ProfilePage