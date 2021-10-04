import React from 'react'
import './index.css'

export default function SignIn() {
    return (
        <div className="container">
        <div id="heading">SIGN IN</div>
        <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Username</label>
              <input type="text" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Your Username" required/>
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control w-75" id="exampleInputPassword1" placeholder="Your Password" required/>
            </div>
            <div><a href="/" className="forgot-password-prompt">Forgot Password?</a></div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Login</button>
            </div>
            <div className="Sign-In-prompt">Or Sign In using</div>
            <div className="signInOptions">
                <a href="/"><img src="facebook-logo.png" alt="facebook-logo" className="logo"/></a>
                <a href="/"><img src="google-logo.png" alt="google-logo" className="logo"/></a>
            </div>
            <div className="Sign-In-prompt">Don't have an account?</div>
            <div><a href="/" className="Sign-Up">Sign Up</a></div>
        </form>
    </div>
    )
}
