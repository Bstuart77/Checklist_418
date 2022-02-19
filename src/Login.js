function Login() {
    return (
        <div className="LoginClass">
        <h2>Login to *Planner*</h2>
        <form>
            <label className="Username Label"> Username</label>
            <label className="LastNameLabel"> Password</label>
        <br/>
        
            <input className="UsernameInput" type="text" required/>
            <input className="PasswordInput" type="text" required/>

            <br/>
            <br/>
            <br/>

            <label className="PasswordLabel"> Password</label>
            <br/>
            <input className="PasswordBox" type="text" required/>

            <br/>
            <br/>
            <br/>


            <button className="LoginButton">Login</button>
        </form>
        <br/>
        <br/>


        <button className="SignInWithGoogleButton">Log in with Google</button>
        </div>
    );
}

export default Login;