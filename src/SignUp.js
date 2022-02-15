import {useState} from 'react';

function SignUp() {

    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitSignUp = (e) =>{
        e.preventDefault();

        const signUpInfo = {firstName, lastName, email, password}
        console.log(signUpInfo);
    } 

       return (
        <div className="SignUpClass">
        <form>
            <label className="FirstNameLabel"> First Name</label>
            <label className="LastNameLabel"> Last Name</label>
        <br/>
        
            <input className="FirstNameBox" type="text" required onChange={(e) => setFName(e.target.value)}/>
            <input className="LastNameBox" type="text" required onChange={(e) => setLName(e.target.value)}/>

            <br/>
            <br/>
            <br/>

            <label className="EmailLabel "> Email</label>
            <br/>
            <input className="EmailBox" type="text" required onChange = {(e) => setEmail(e.target.value)}/>

            <br/>
            <br/>
            <br/>


            <label className="PasswordLabel"> Password</label>
            <br/>
            <input className="PasswordBox" type="text" required onChange={(e) => setPassword(e.target.value)}/>

            <br/>
            <br/>
            <br/>


            <button className="SignUpButton" onClick={submitSignUp}>Sign Up</button>
        </form>
        <br/>
        <br/>


        <button className="SignInWithGoogleButton">Log in with Google</button>
        </div>
    );
}

export default SignUp;