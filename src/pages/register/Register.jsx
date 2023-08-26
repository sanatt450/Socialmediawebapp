import "./register.css"

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
            <input placeholder="Username" className="loginInput"/>
              <input placeholder="Email" className="loginInput"/>
              <input placeholder="Password" className="loginInput"/>
              
              <button className="loginButton">Sign Up</button>
              
              <button className="loginRegis">Login In your account</button>
            </div>
        </div>
      </div>  
    </div>
  )
}