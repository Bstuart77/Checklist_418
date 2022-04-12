import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from "react-router-dom"
import BackgroundButton from './Component/BackgroundButton.js';

function ProfilePage() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        }, 1000);
    }, []);

    function background1() {
        document.getElementById("profile-page").style.background = "url('./images/mountain.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function background2() {
        document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function background3() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function background4() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain4.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function background5() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain5.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }
    function background6() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain6.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }
    function background7() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain7.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }
    function background8() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        document.getElementById("profile-page").style.background = "url('./images/mountain8.png') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function backgroundUpload() {
        document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function LoadProfileFile(event) {
        console.log("Button clicked 1");
        document.getElementById("profileImage").src = URL.createObjectURL(event.target.files[0]);
        console.log("Button clicked 2");
    }

    function DisplayProfileModal() {
        if (document.getElementById("ProfileChangeModal").style.display === "block") {
            document.getElementById("ProfileChangeModal").style.display = "none";
        } else {
            document.getElementById("ProfileChangeModal").style.display = "block";
        }
        /** document.getElementById("ProfileChangeModal").style.display = "block";*/
        console.log("Button clicked")
    }

    function DisplayBackgroundModal() {
        if (document.getElementById("BackgroundChangeModal").style.display === "block") {
            document.getElementById("BackgroundChangeModal").style.display = "none";
        } else {
            document.getElementById("BackgroundChangeModal").style.display = "block";
        }
        /** document.getElementById("ProfileChangeModal").style.display = "block";*/
        console.log("Button clicked")
    }

    function DisplaySettingModal() {
        if (document.getElementById("SettingsChangeModal").style.display === "block") {
            document.getElementById("SettingsChangeModal").style.display = "none";
        } else {
            document.getElementById("SettingsChangeModal").style.display = "block";
        }
        /** document.getElementById("ProfileChangeModal").style.display = "block";*/
        console.log("Button clicked")
    }

    function DisplayRewards() {
        if (document.getElementById("RewardsPageModal").style.display === "block") {
            document.getElementById("RewardsPageModal").style.display = "none";
        } else {
            document.getElementById("RewardsPageModal").style.display = "block";
        }
    }

    /*
        POINT COUNTER FOR TESTING
    */

    const [count, setCount] = useState(0);          // NEED TO CHANGE THIS: MAKE SURE THIS IS REPLACED WITH GET REQUEST
    const [quantity, setQuantity] = useState(0);

    const handleAddOne = () => {
        setCount(count + 10);
     }



    function DisplayStars() {
        if (document.getElementById("ShowStarModal").style.display === "block") {
            document.getElementById("ShowStarModal").style.display = "none";
        } else {
            document.getElementById("ShowStarModal").style.display = "block";
        }
    }

    function ShowShields() {
        if (document.getElementById("ShowShieldModal").style.display === "block") {
            document.getElementById("ShowShieldModal").style.display = "none";
        } else {
            document.getElementById("ShowShieldModal").style.display = "block";
        }
    }
    function goToCheckList() {
        navigateProfile("/monthlyview")
    }

    function goToLogin() {
        navigateProfile("/")
    }


    window.onclick = function (event) {
        if (event.target == document.getElementById("SettingsChangeModal")) {
            document.getElementById("SettingsChangeModal").style.display = "none";

        } else if (event.target == document.getElementById("RewardsPageModal")) {
            document.getElementById("RewardsPageModal").style.display = "none";

        } else if (event.target == document.getElementById("ShowStarModal")) {
            document.getElementById("ShowStarModal").style.display = "none";
        }
    }


    /**
     *    FUNCTION FOR CALLING THE BACKEND TO GET THE PROFILE PICTURE
     * 
     * 
     * 
     *    FUNCTION FOR CALLING THE BACKEND TO GET THE CORRECT BACKGROUND PICTURE
     * 
     * 
     */

    const navigateProfile = useNavigate();


    return (
        // <button id = "SettingsButton"> settings </button>
        // body is implicitz
        <div className='ProfileBody' id="profile-page">
            <div className='Grid'>
                <div className='ProfileCard'>
                    <div className='ProfileHeader'>
                        <div className='ProfilePicture'>
                            <img src="./images/default.jpg" id="profileImage" alt="you" />
                        </div>

                        <div className='Clock'>
                            <p> Welcome back, it is currently </p>
                            {clockState}
                        </div>


                    </div>
                    <div className='ProfileFooter'>
                        <button className="ProfilePageButton" onClick={goToCheckList}> Your Checklist </button>


                        <button className="ProfilePageButton" onClick={DisplayRewards}> Rewards </button>
                        <button className="ProfilePageButton" onClick={DisplaySettingModal}> Settings </button>

                        <div className="RewardModal" id="RewardsPageModal">
                            <div className="RewardsModalBody">
                                My Rewards
                                <br />
                                <br />

                                <div className='ProfileIcon'> Icon </div>
                                <div className='UserSince'>User Since</div>
                                <div className='BadgesDisplay'> Badges on display
                                    <img src='/images/InactiveStar.png' className='InactiveStarClass' onClick={DisplayStars} />
                                    <img src='/images/InactiveShield.png' className='InactiveShield' onClick={ShowShields} />
                                </div>

                                <div className='ShowStar' id="ShowStarModal">
                                    <img src='/images/BronzeStar.png' className='BronzeStar' />
                                    <button className='UnlockBronzeStar'>Unlock Bronze Star: 1 </button>

                                    <img src='/images/SilverStar.png' className='SilverStar' />
                                    <button className='UnlockSilverStar'>Unlock Silver Star: 3 </button>

                                    <img src='/images/GoldStar.png' className='GoldStar' />
                                    <button className='UnlockGoldStar'>Unlock Gold Star: 5 </button>
                                </div>

                                <div className='ShowShield' id='ShowShieldModal'>
                                    <img src='/images/BronzeShield.png' className='BronzeShield' />
                                    <img src='/images/SilverShield.png' className='SilverShield' />
                                    <img src='/images/GoldShield.png' className='GoldShield' />
                                </div>

                                <div className='PointCounter'> {count} </div>
                                <button onClick={handleAddOne}> +10 </button>
                            </div>

                        </div>

                        <div className="SettingsModal" id="SettingsChangeModal">
                            <div className="SettingsModalBody">
                                Settings

                                <button className="ProfilePageButton" onClick={DisplayProfileModal}> Upload Profile Picture </button>

                                <div className='ProfileModal' id='ProfileChangeModal'>
                                    <label htmlFor='file'> Select file </label>
                                    <input id='ProfileChangeButton' type="file" onChange={LoadProfileFile} />
                                </div>

                                <button className="ProfilePageButton" onClick={DisplayBackgroundModal}> Change Background </button>

                                <div className='BackgroundModal' id='BackgroundChangeModal'>
                                    <button className="BackgroundChooseButton" onClick={background1}> 0 </button>
                                    <button className="BackgroundChooseButton" onClick={background2}> 5 </button>
                                    <button className="BackgroundChooseButton" onClick={background3}> 10 </button>
                                    <button className="BackgroundChooseButton" onClick={background4}> 15 </button>
                                    <button className="BackgroundChooseButton" onClick={background5}> 20 </button>
                                    <button className="BackgroundChooseButton" onClick={background6}> 50 </button>
                                    <button className="BackgroundChooseButton" onClick={background7}> 100 </button>
                                    <button className="BackgroundChooseButton" onClick={background8}> 150 </button>
                                </div>


                            </div>
                        </div>

                        <button className="ProfilePageButton" onClick={goToLogin}> Log Out </button>
                    </div>
                </div>

            </div>
        </div>
    )


    let btn1 = document.querySelector('#profilebutton1');

    btn1.addEventListener('click', () => {
        document.body.style.backgroundImage = "../public/images/mountain2.jpg";

    });

    /*
    <div className='ProfileGreeting'>
                Welcome back, (username here)
            </div>
 
 
            <div className='Clock'>
                {clockState}
 
            </div>
            */

}

export default ProfilePage