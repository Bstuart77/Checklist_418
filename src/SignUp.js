function SignUp() {
    return (
        <div className="SignUpClass">
        <h2>Sign Up!</h2>
        <form>
            <label className="FirstNameLabel"> First Name</label>
            <label className="LastNameLabel"> Last Name</label>
        <br/>
        
            <input className="FirstNameBox" type="text" required/>
            <input className="LastNameBox" type="text" required/>

            <br/>
            <br/>
            <br/>

            <label className="EmailLabel "> Email</label>
            <br/>
            <input className="EmailBox" type="text" required/>

            <br/>
            <br/>
            <br/>


            <label className="PasswordLabel"> Password</label>
            <br/>
            <input className="PasswordBox" type="text" required/>

            <br/>
            <br/>
            <br/>


            <button className="SignUpButton">Sign Up</button>
        </form>
        <br/>
        <br/>


        <button className="SignInWithGoogleButton">Log in with Google</button>
        </div>
    );
}

export default SignUp;