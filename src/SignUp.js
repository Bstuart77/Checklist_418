import { useState } from 'react';
import GoogleLogin, { GoogleLogIn } from 'react-google-login'
const clientId = "222186129129-lheckv1f7jfcq4225n35ob7aed05tooc.apps.googleusercontent.com"

function SignUp() {

    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitSignUp = (e) => {
        e.preventDefault();


        const signUpInfo = { firstName, lastName, email, password }
        if (!firstName.trim()) {
            alert('Please Enter Name');
            return;
        } else if (!lastName.trim()) {
            alert('Please Last Name');
            return;
        } else if (!email.trim()) {
            alert('Please Enter Email');
            return;
        } else if (!password.trim()) {
            alert('Please Enter Password');
            return;
        } else {
            console.log(signUpInfo);
        }
    }

    const refreshTokenSetup = (res) => {
        // Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
            console.log('newAuthRes:', newAuthRes);
            // saveUserToken(newAuthRes.access_token);  <-- save new token
            localStorage.setItem('authToken', newAuthRes.id_token);

            // Setup the other timer after the first one
            setTimeout(refreshToken, refreshTiming);
        };

        // Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    };

    const onSuccess = (res) => {
        console.log("Logged IN AS: ", res.profileObj);
        // console.log(res.user.givenName);
        refreshTokenSetup(res);
    }

    return (
        <div className="SignUpClass">
            <form>
                <label className="FirstNameLabel"> First Name</label>
                <label className="LastNameLabel"> Last Name</label>
                <br />

                <input className="FirstNameBox" type="text" onChange={(e) => setFName(e.target.value)} />
                <input className="LastNameBox" type="text" onChange={(e) => setLName(e.target.value)} />

                <br />
                <br />

                <label className="EmailLabel "> Email</label>
                <br />
                <input className="EmailBox" type="text" onChange={(e) => setEmail(e.target.value)} />

                <br />
                <br />


                <label className="PasswordLabel"> Password</label>
                <br />
                <input className="PasswordBox" type="text" onChange={(e) => setPassword(e.target.value)} />

                <br />
                <br />

                <label className="ConfirmPasswordLabel"> Confirm Password</label>
                <br />
                <input className="ConfirmPasswordBox" type="text" onChange={(e) => setPassword(e.target.value)} />

                <br />
                <br />
                <br />
                <br />
                <br />


                <button className="SignUpButton" onClick={submitSignUp}>Sign Up</button>
            </form>
            <br />


            <GoogleLogin clientId={clientId} onSuccess={onSuccess} buttonText='Sign In With Google' theme='dark' isSignedIn={true} className='SignInWithGoogleButton' />
        </div>
    );
}

export default SignUp;