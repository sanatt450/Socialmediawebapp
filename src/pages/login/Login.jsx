import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Ilanos</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Ilanos
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput"/>
              <input placeholder="Password" className="loginInput"/>
              <span className="loginForget">Forget Password?</span>
              <button className="loginButton">Log In</button>
              
              <button className="loginRegis">Create a New Account</button>
            </div>
        </div>
      </div>  
    </div>
  )
}
