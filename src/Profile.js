import React from 'react'
import './Profile.css'
import BackgroundButton from './Component/BackgroundButton.js';
// import img1 from './images/doggy.jpg'

function ProfilePage(){
    /*
    function background1(){
        document.getElementById("profile-page").style.background = "url('./images/mountain.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }
    */

    function background2(){
        document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function background3(){
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function backgroundUpload(){
        document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function LoadProfileFile(event){
        console.log("Button clicked 1");
        document.getElementById("profile").src = URL.createObjectURL(event.target.files[0]);
        console.log("Button clicked 2");
    }

    return(
        // <button id = "SettingsButton"> settings </button>
        // body is implicitz
        <div className = 'ProfileBody' id = "profile-page">
             <div className = 'Grid'>
                <div className = 'ProfileCard'>
                    <div className = 'ProfileHeader'> 
                        <div className = 'ProfilePicture'>
                            <img src = "./images/doggy.jpg" id = "profile" alt ="you" />
                        </div>

                        <div className = 'ProfileGreeting'> 
                            Welcome back, chris kyle
                        </div>
                    </div>  
                    <div className = 'ProfileFooter'>
                        <button className = "ProfilePageButton"> checklist </button>
                        <button className = "ProfilePageButton" onClick = {LoadProfileFile}> profile </button>
                        <button className = "ProfilePageButton"> back ground </button>
                        <button className = "ProfilePageButton"> logout </button>
                    </div>
                </div>

                <div className = 'BackgroundModal'>
                    <BackgroundButton label = "1" background = "url('./images/mountain.jpg')"/>
                    <button className = "ProfilePageButton" onClick = {background2}> 2 </button>
                    <button className = "ProfilePageButton" onClick = {background3}> 3 </button>
                    <button className = "ProfilePageButton" onClick = {backgroundUpload}> Upload Background </button>
                    
                
                </div>

                <div className = 'ProfileModal'>
                    <input id = "ProfileChange" type = "file" onChange = {LoadProfileFile}/>
                </div>

                <div className = 'Settings'>
                    /** This is where profile and background modal will eventually go to */
                
                </div>

            </div>     
        </div>

    )


    let btn1 = document.querySelector('#profilebutton1');

    btn1.addEventListener('click', () => {
        document.body.style.backgroundImage = "../public/images/mountain2.jpg";

    });
    /**
     * 
     * <button className = "ChangeProfile"> profile picture </button>
     * 
     *                         <label className = 'HoverProfile' for = "file">
                            <span className = 'HoverEffect'></span>
                            <span> update picture </span>
                        </label>

                        <input id = "ProfileChange" type = "file" onchange = "changeProfilePicture(event)"/>
     * 
     */

    /**
     *                     <div className = 'ProfilePicture'>
                        <label className = 'ProfileHover' htmlFor = 'file'>
                            <span> Change Image </span>
                        </label>

                        <input id='profilefile' type='file' onChange={LoadProfileFile} />
                        <img src = "./images/doggy.jpg" id = "profile" alt ="you" />
                    </div>
     * 
     * 
     */

}
    
export default ProfilePage