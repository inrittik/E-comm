import React  from 'react'
import "./Login.css";
import { Link  } from "react-router-dom";


function Login() {
 
     
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input   type="password" />
                    <button  type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>By signing-in here, you agree to  Fake Amazon Page Terms & Conditions</p>
                <button  >Create a new fake Amazon account</button>
            </div>
        </div>
    );
}

export default Login;