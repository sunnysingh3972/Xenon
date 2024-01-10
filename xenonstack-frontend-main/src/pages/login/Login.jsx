import React from 'react'
import './login.css'
function Login() {
  return (
    <div>
        <div className="logo text-center">
        <h1>Logo</h1>
        </div>
        <div className="wrapper">
        <div className="inner-warpper text-center">
            <h2 className="title">Login to your account</h2>
            <form action="" id="formvalidate">
            <div className="input-group">
                <label className="palceholder" for="userName">User Name</label>
                <input className="form-control" name="userName" id="userName" type="text" placeholder="" />
                <span className="lighting"></span>
            </div>
            <div className="input-group">
                <label className="palceholder" for="userPassword">Password</label>
                <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="" />
                <span className="lighting"></span>
            </div>

            <button type="submit" id="login">Login</button>
            <div className="clearfix supporter">
                <div className="pull-left remember-me">
                <input id="rememberMe" type="checkbox" />
                <label for="rememberMe">Remember Me</label>
                </div>
                <a className="forgot pull-right" href="#">Forgot Password?</a>
            </div>
            </form>
        </div>
        <div className="signup-wrapper text-center">
            <a href="#">Don't have an accout? <span className="text-primary">Create One</span></a>
        </div>
        </div>
    </div>
  )
}

export default Login