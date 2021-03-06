import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from "react-router-dom"
import BackgroundButton from './Component/BackgroundButton.js';
import axios from 'axios';

var firstTimeBackground1 = true;
var firstTimeBackground2 = true;
var firstTimeBackground3 = true;
var firstTimeBackground4 = true;
var firstTimeBackground5 = true;
var firstTimeBackground6 = true;
var firstTimeBackground7 = true;
var firstTimeBackground8 = true;

function ProfilePage() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        }, 1000);
    }, []);

    /*
        POINT COUNTER FOR TESTING
    */

    const [count, setCount] = useState(0);          // NEED TO CHANGE THIS: MAKE SURE THIS IS REPLACED WITH GET REQUEST
    const [quantity, setQuantity] = useState(0);
    
    const handleAddOne = () => {
        setCount(count + 5);
        // NEED TO UPDATE THE COUNT FOR THE GIVEN USER BY 5
    }

    const emailAddress = 'test123@test.com';

    axios.get('http://34.228.145.193:8080/account/profile/points', emailAddress)
                .then((response) => {
                    console.log(response.data);

                    if (response == 200) {
                        console.log("Get the points.");                                                                                                     
                }
    })

    /*
    useEffect(() => {
        const response =
        axios.get("ec2-100-24-37-156.compute-1.amazonaws.com:8080/account/profile/points",
              { params: {emailAddress: 'test123@test.com'}}
          )
        console.log(response.data)
        setCount(response.data, []);
    });
    */

    /*
    function getPoints(){
        const response =
        axios.get("ec2-100-24-37-156.compute-1.amazonaws.com:8080/account/profile/points",
              { params: {emailAddress: 'test@test.com'}}
          )
        console.log(response.data)
        [count, setCount] = response.data;
    }
    */

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

    function background1() {
        document.getElementById("profile-page").style.background = "url('./images/mountain.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    function background2() {
        if(firstTimeBackground2 == true){
            if(count < 5){
              alert("Insufficient Points")

            } else{
              document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
              document.getElementById("profile-page").style.backgroundSize = "cover";
              console.log("Button clicked");

              setCount(count - 5);
              firstTimeBackground2 = false;

            }

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");
        }



        /**
         *         if (count < 5 && firstTimeBackground2 === true) {
            alert("Insufficient Points")

        } else if (firstTimeBackground2 === false){
            document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");
        
        } else {
            if((count - 5) < 0){
              alert("Not enough points");

            } else if (firstTimeBackground2) {
              document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
              document.getElementById("profile-page").style.backgroundSize = "cover";
              console.log("Button clicked");

              setCount(count - 5);
              firstTimeBackground2 = false;

            } else {
              document.getElementById("profile-page").style.background = "url('./images/mountain2.jpg') no-repeat center";
              document.getElementById("profile-page").style.backgroundSize = "cover";
              console.log("Button clicked");

            }

        }
 


         */
    }

    function background3() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        if(firstTimeBackground3 == true){
          if(count < 10){
            alert("Insufficient Points")

          } else{
            document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

            setCount(count - 10);
            firstTimeBackground3 = false;

          }

      } else {
          document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
          document.getElementById("profile-page").style.backgroundSize = "cover";
          console.log("Button clicked");
      }

      /*
        if (count < 10) {
            alert("Insufficient Points")

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

        }
        */
    }

    function background4() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
        if(firstTimeBackground4 == true){
          if(count < 20){
            alert("Insufficient Points")

          } else{
            document.getElementById("profile-page").style.background = "url('./images/mountain4.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

            setCount(count - 20);
            firstTimeBackground4 = false;

          }

      } else {
          document.getElementById("profile-page").style.background = "url('./images/mountain4.jpg') no-repeat center";
          document.getElementById("profile-page").style.backgroundSize = "cover";
          console.log("Button clicked");
      }


      /*

        if (count < 20) {
            alert("Insufficient Points")

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain4.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

        }
        */
    }

    function background5() {
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";

        if(firstTimeBackground5 == true){
          if(count < 40){
            alert("Insufficient Points")

          } else{
            document.getElementById("profile-page").style.background = "url('./images/mountain5.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

            setCount(count - 40);
            firstTimeBackground5 = false;

          }

      } else {
          document.getElementById("profile-page").style.background = "url('./images/mountain5.jpg') no-repeat center";
          document.getElementById("profile-page").style.backgroundSize = "cover";
          console.log("Button clicked");
      }

        /*
        if (count < 40) {
            alert("Insufficient Points")

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain5.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

        }
        */
    }
    function background6() {
      if(firstTimeBackground6 == true){
        if(count < 80){
          alert("Insufficient Points")

        } else{
          document.getElementById("profile-page").style.background = "url('./images/mountain6.jpg') no-repeat center";
          document.getElementById("profile-page").style.backgroundSize = "cover";
          console.log("Button clicked");

          setCount(count - 80);
          firstTimeBackground6 = false;

        }

    } else {
        document.getElementById("profile-page").style.background = "url('./images/mountain6.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }
      /*
        if (count < 80) {
            alert("Insufficient Points")

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain6.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

        }
        */
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
    }
    function background7() {
      if(firstTimeBackground7 == true){
        if(count < 150){
          alert("Insufficient Points")

        } else{
          document.getElementById("profile-page").style.background = "url('./images/mountain7.jpg') no-repeat center";
          document.getElementById("profile-page").style.backgroundSize = "cover";
          console.log("Button clicked");

          setCount(count - 150);
          firstTimeBackground7 = false;

        }

    } else {
        document.getElementById("profile-page").style.background = "url('./images/mountain7.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

      /*
        if (count < 150) {
            alert("Insufficient Points")

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain7.jpg') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

        }
        */
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
    }
    function background8() {
      if(firstTimeBackground8 == true){
        if(count < 200){
          alert("Insufficient Points")

        } else{
          document.getElementById("profile-page").style.background = "url('./images/mountain8.png') no-repeat center";
          document.getElementById("profile-page").style.backgroundSize = "cover";
          console.log("Button clicked");

          setCount(count - 200);
          firstTimeBackground8 = false;

        }

    } else {
        document.getElementById("profile-page").style.background = "url('./images/mountain8.png') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }
      /*
        if (count < 200) {
            alert("Insufficient Points")

        } else {
            document.getElementById("profile-page").style.background = "url('./images/mountain8.png') no-repeat center";
            document.getElementById("profile-page").style.backgroundSize = "cover";
            console.log("Button clicked");

        }
        */
        //document.body.style.background = "url('./images/mountain3.jpg') no-repeat center";
        //document.body.style.backgroundSize = "cover";
    }

    function backgroundUpload() {
        document.getElementById("profile-page").style.background = "url('./images/mountain3.jpg') no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
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

    function UnlockBronzeStarIcon() {
        if (document.getElementById("DisplayBronzeStar").style.display === "none") {
            document.getElementById("DisplayBronzeStar").style.display = "block";
        } else {
            document.getElementById("DisplayBronzeStar").style.display = "block";
        }
    }

    function UnlockSilverStarIcon() {
        if (document.getElementById("DisplaySilverStar").style.display === "none") {
            document.getElementById("DisplaySilverStar").style.display = "block";
        } else {
            document.getElementById("DisplaySilverStar").style.display = "block";
        }
    }

    function UnlockGoldStarIcon() {
        if (document.getElementById("DisplayGoldStar").style.display === "none") {
            document.getElementById("DisplayGoldStar").style.display = "block";
        } else {
            document.getElementById("DisplayGoldStar").style.display = "block";
        }
    }

    function UnlockBronzeShieldIcon() {
        if (document.getElementById("DisplayBronzeShield").style.display === "none") {
            document.getElementById("DisplayBronzeShield").style.display = "block";
        } else {
            document.getElementById("DisplayBronzeShield").style.display = "block";
        }
    }

    function UnlockSilverShieldIcon() {
        if (document.getElementById("DisplaySilverShield").style.display === "none") {
            document.getElementById("DisplaySilverShield").style.display = "block";
        } else {
            document.getElementById("DisplaySilverShield").style.display = "block";
        }
    }

    function UnlockGoldShieldIcon() {
        if (document.getElementById("DisplayGoldShield").style.display === "none") {
            document.getElementById("DisplayGoldShield").style.display = "block";
        } else {
            document.getElementById("DisplayGoldShield").style.display = "block";
        }
    }
    function UnlockBronzeStar() {
        if (count >= 1) {
            UnlockBronzeStarIcon();
            setCount(count - 1);
        } else {
            alert("Insufficient Points")
        }
    }


    function UnlockSilverStar() {
        if (count >= 3) {
            UnlockSilverStarIcon();
            setCount(count - 3);
        } else {
            alert("Insufficient Points")
        }
    }

    function UnlockGoldStar() {
        if (count >= 5) {
            UnlockGoldStarIcon();
            setCount(count - 5);
        } else {
            alert("Insufficient Points")
        }
    }

    function UnlockBronzeShield() {
        if (count >= 10) {
            UnlockBronzeShieldIcon();
            setCount(count - 10);
        } else {
            alert("Insufficient Points")
        }
    }

    function UnlockSilverShield() {
        if (count >= 20) {
            UnlockSilverShieldIcon();
            setCount(count - 20);
        } else {
            alert("Insufficient Points")
        }
    }

    function UnlockGoldShield() {
        if (count >= 50) {
            UnlockGoldShieldIcon();
            setCount(count - 50);
        } else {
            alert("Insufficient Points")
        }
    }

    function goToCheckList() {
        navigateProfile("/monthlyview")
    }

    function goToLogin() {
        navigateProfile("/")
    }


    window.onclick = function (event) {
        if (event.target === document.getElementById("SettingsChangeModal")) {
            document.getElementById("SettingsChangeModal").style.display = "none";

        } else if (event.target === document.getElementById("RewardsPageModal")) {
            document.getElementById("RewardsPageModal").style.display = "none";

        } else if (event.target === document.getElementById("ShowStarModal")) {
            document.getElementById("ShowStarModal").style.display = "none";

        } else if (event.target === document.getElementById("ShowShieldModal")) {
            document.getElementById("ShowShieldModal").style.display = "none";
        }
    }

    /**
     * FUNCTION FOR GETTING USER'S FIRST NAME
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
     */

    /**
     * 
     * email and password
     * 
     * 

     const getPoints = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'ec2-100-24-37-156.compute-1.amazonaws.com:8080/account/profile/points');
        xhr.responseType = 'json';

        xhr.onload = () => {
            const data = xhr.response;
            console.log(data);
        }

        xhr.send();

        // Set the data equal to the points
    }

    


     */




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

                                <div className='BadgesDisplay'> Badges Earned
                                    <img src='/images/InactiveStar.png' className='InactiveStarClass' onClick={DisplayStars} />
                                    <img src='/images/InactiveShield.png' className='InactiveShield' onClick={ShowShields} />
                                    <img src='/images/BronzeStar.png' className='BronzeStarBadgeDisplay' id='DisplayBronzeStar'/>
                                    <img src='/images/SilverStar.png' className='SilverStarBadgeDisplay' id='DisplaySilverStar'/>
                                    <img src='/images/GoldStar.png' className='GoldStarBadgeDisplay' id='DisplayGoldStar'/>
                                    <img src='/images/BronzeShield.png' className='BronzeShieldBadgeDisplay' id='DisplayBronzeShield'/>
                                    <img src='/images/SilverShield.png' className='SilverShieldBadgeDisplay' id='DisplaySilverShield'/>
                                    <img src='/images/GoldShield.png' className='GoldShieldBadgeDisplay' id='DisplayGoldShield'/>
                                </div>

                                <div className='ShowStar' id="ShowStarModal">
                                    <img src='/images/BronzeStar.png' className='BronzeStar' />
                                    <button className='UnlockBronzeStar' onClick={UnlockBronzeStar}> Unlock Bronze Star: 1 </button>

                                    <img src='/images/SilverStar.png' className='SilverStar' />
                                    <button className='UnlockSilverStar' onClick={UnlockSilverStar}>Unlock Silver Star: 3 </button>

                                    <img src='/images/GoldStar.png' className='GoldStar' />
                                    <button className='UnlockGoldStar' onClick={UnlockGoldStar}>Unlock Gold Star: 5 </button>
                                </div>

                                <div className='ShowShield' id='ShowShieldModal'>
                                    <img src='/images/BronzeShield.png' className='BronzeShield' />
                                    <button className='UnlockBronzeShield' onClick={UnlockBronzeShield}>Unlock Bronze Shield: 10 </button>

                                    <img src='/images/SilverShield.png' className='SilverShield' />
                                    <button className='UnlockSilverShield' onClick={UnlockSilverShield}>Unlock Silver Shield: 20 </button>

                                    <img src='/images/GoldShield.png' className='GoldShield' />
                                    <button className='UnlockGoldShield' onClick={UnlockGoldShield}>Unlock Gold Shield: 50 </button>

                                </div>

                                <div className='PointCounter'> Points: {count} </div>
                                <button onClick={handleAddOne}> +5 </button>
                            </div>

                        </div>

                        <div className="SettingsModal" id="SettingsChangeModal">

                            <div className="SettingsModalBody">
                                <div className = "SettingsTitle">
                                    Settings
                                </div>

                                <div className="PointCounter">
                                    Points: {count}
                                </div>

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
                                    <button className="BackgroundChooseButton" onClick={background4}> 20 </button>
                                    <button className="BackgroundChooseButton" onClick={background5}> 40 </button>
                                    <button className="BackgroundChooseButton" onClick={background6}> 80 </button>
                                    <button className="BackgroundChooseButton" onClick={background7}> 150 </button>
                                    <button className="BackgroundChooseButton" onClick={background8}> 200 </button>
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
