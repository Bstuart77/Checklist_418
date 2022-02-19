import React from 'react'
import './Profile.css'
// import img1 from './images/doggy.jpg'

function ProfilePage(){
    return(
        // body is implicit
        <div className = 'ProfileCard'>
            <div className = 'ProfileHeader'> 
                <div className = 'ProfilePicture'>
                    <img src = "./images/doggy.jpg" alt ="you" />
                </div>

                <div className = 'ProfileGreeting'> 
                    <h3> Welcome back, () </h3>

                </div>


            </div>
            
            <div className = 'ProfileFooter'>
                <button id = "SettingsButton"> settings </button>

            </div>


        </div>




    // <h5> Header test idoasjdiasodj as</h5>
    )
}
    
export default ProfilePage