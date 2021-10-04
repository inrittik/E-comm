import React from 'react'
import Radium, { StyleRoot } from 'radium';
const container={
    marginTop: '5vh',
    marginBottom: '5vh',
    maxWidth: '40vw',
    minWidth: '320px',
    backgroundColor: '#bfd4fe63',
    borderRadius: '15px',
    height: '660px',
    '@media only screen and (min-width: 780px)':{
        height:'700px',
    },
    '@media only screen and (min-width: 1200px)':{
        height:'780px',
    },
}
const heading={    
    padding: '30px',
    textAlign: 'center',
    color: '#242acdb0',
    fontSize: '36px',
    fontWeight: 'bold',
    fontFamily: 'PT Sans Caption, sans-serif',  
}
const formLabel={
    padding: '0 10%',
    color: '#6066EF',
    fontSize: '18px',
    textAlign: 'left',
}
const formControl={
    margin: '0 10%',
    borderRadius: '10px',
    height: '50px',
}
const forgotPassword={
    height: '30px',
    display: 'block',
    padding: '0 10%',
    textAlign: 'right',
    color: 'rgba(0, 0, 0, 0.452)',
    textDecoration: 'none',
}
const btn={
    float:'none',
    display: 'block',
    backgroundColor: '#242acda2',
    color: 'white',
    borderRadius: '20px',
    position:'relative',
    width: '160px',
    height: '64px',
    left: '10px',
    right: '10px',
    top: '10px',
    textAlign: 'center',
    fontSize: '36px',
    fontFamily: 'PT Sans Caption, sans-serif', 
    margin: '10px 60px',
    wordWrap: 'break-word',
    maxWidth: '100%',

    '@media only screen and (min-width: 780px)':{
        width: '220px',
        margin: '10px 60px',
    },
    '@media only screen and (min-width: 1200px)':{
        width: '380px',
        margin: '10px 60px',
    },
    '@media only screen and (min-width: 1400px)':{
        width: '420px',
        margin: '10px 60px',
    },
}
const signInOptions={
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
}
const signInPrompt={
    height: '30px',
    display: 'block',
    padding: '10% 10%',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.452)',
    textDecoration: 'none',
}
const logo={
    height: '60px',
    width: '65px',
    borderRadius: '100%',
}
const signUp={
    display: 'block',
    padding: '0 10%',
    textAlign: 'center',
    color: '#6066EF',
    textDecoration: 'none',
    fontSize: '20px',
}
export default function SignIn() {
    return (
        <>
        <StyleRoot>

        <div className="container" style={container}>
        <div id="heading" style={heading}>SIGN IN</div>
        <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label" style={formLabel}>Username</label>
              <input type="text" className="form-control w-75" style={formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Your Username" required/>
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label" style={formLabel}>Password</label>
              <input type="password" className="form-control w-75" style={formControl} id="exampleInputPassword1" placeholder="Your Password" required/>
            </div>
            <div><a href="/" className="forgot-password-prompt" style={forgotPassword}>Forgot Password?</a></div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" style={btn}>Login</button>
            </div>
            <div className="Sign-In-prompt" style={signInPrompt}>Or Sign In using</div>
            <div className="signInOptions" style={signInOptions}>
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png" alt="facebook-logo" className="logo" style={logo}/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqMq-9dnyMBsF9kJriB-Fj9xqRyalTiiRFw&usqp=CAU" alt="google-logo" className="logo" style={logo}/></a>
            </div>
            <div className="Sign-In-prompt" style={signInPrompt}>Don't have an account?</div>
            <div><a href="/" className="Sign-Up" style={signUp}>Sign Up</a></div>
        </form>
        </div>
        </StyleRoot>
        </>
    )
}
