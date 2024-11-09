import React from 'react'
import '../CSS/Loginpage.css'
import { NavLink } from 'react-router-dom'
import { facebookIocn } from '../Lib/svg'

const Login = () => {
  return (
    <div className='loginParent'>
      <div className="container">
        <h2>Instagram</h2>
        <input type="text" className="loginInput" placeholder='Phone number, User Name or email' />
        <input type="text" className="loginInput" placeholder='Password' />
        <button className='loginButton'>Login</button>
        <div className='Line'>
          <hr className='border'></hr>
          <div className='Or'>OR</div>
          <hr className='border'></hr>
        </div>
        <h6 className='withFaceBook'><span className='facebookIcon'> {facebookIocn}</span>Login With Facebook</h6>
        <div className='loginforgotPassword'>Forgot Password ?</div>
      </div>
      <div className='Account'>
        <div>Dont have an account?
          <NavLink to='/signup' style={{ textDecoration: "none"}}><span className='signUp'>Sign up</span></NavLink>
        </div>
      </div>
    </div >
  )
}

export default Login