import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function SignUp() {

    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let emailFormat =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const submitSignUp = (e) => {
        e.preventDefault();


        const signUpInfo = { emailAddress, firstName, lastName, password };
        if (!firstName.trim()) {
            alert('Please Enter Name');
            return;
        } else if (!lastName.trim()) {
            alert('Please Last Name');
            return;
        } else if (!emailAddress.trim()) {
            alert('Please Enter Email');
            return;
        } else if (!password.trim()) {
            alert('Please Enter Password');
            return;
        } else if (confirmPassword != password) {
            alert('Passwords do not match');
            return;
        } else if (!emailFormat.test(emailAddress)) {
            alert('Invalid Email');
        } else {
            axios.post('100.24.37.156:8080/account/register', signUpInfo)
                .then((response) => {
                    console.log(response.data);

                    if (response == 200) {
                        console.log("Successfully Signed Up.");
                    }
                })
            goToProfile();
        }
    }
    
    const navigateProfile = useNavigate();

    function goToProfile() {
        navigateProfile("/")
    }

    return (
        <div className="SignUpBody">
            <div className="SignUpClass">
                <h3 className='SignUpText'> Sign Up</h3>
                <form>
                    <label className="FirstNameLabel">First Name</label>
                    <label className="LastNameLabel"> Last Name</label>
                    <br />

                    <input className="FirstNameBox" type="text" onChange={(e) => setFName(e.target.value)} />
                    <input className="LastNameBox" type="text" onChange={(e) => setLName(e.target.value)} />

                    <br />
                    <br />

                    <label className="EmailLabel ">Email</label>
                    <br />
                    <input className="EmailBox" type="text" onChange={(e) => setEmail(e.target.value)} />

                    <br />
                    <br />


                    <label className="PasswordLabel">Password</label>
                    <br />
                    <input className="PasswordBox" type="text" onChange={(e) => setPassword(e.target.value)} />

                    <br />
                    <br />

                    <label className="ConfirmPasswordLabel">Confirm Password</label>
                    <br />
                    <input className="ConfirmPasswordBox" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                    <button className="SignUpButton" onClick={submitSignUp}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;