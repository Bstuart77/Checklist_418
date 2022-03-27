import { useState } from 'react';

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
    return (
        <div className = "SignUpBody">
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
        </div>


        </div>
    );
}

export default SignUp;