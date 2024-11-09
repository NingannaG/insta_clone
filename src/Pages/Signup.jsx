import React from 'react'
import '../CSS/Loginpage.css'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='loginParent signupParent'>
      <div className="container">
        <h2 className='header'>Instagram</h2>
        <input type="text" className="loginInput" placeholder='Phone number or email' />
        <input type="text" className="loginInput" placeholder='Password' />
        <input type="text" className="loginInput" placeholder='Full Name' />
        <input type="text" className="loginInput" placeholder='User Name' />
        <div className='Line'>
          <hr className='border'></hr>
          <div className='Or'>OR</div>
          <hr className='border'></hr>
        </div>
        <div className='withfaceBook'>People who use our service may have uploaded your contact information to Instagram. <a href="">Learn More</a></div>
        <div className='loginforgotPassword'>By signing up, you agree to our <a href="">Terms , Privacy Policy and Cookies Policy .</a>
        </div>
        <button className='loginButton'>Sing Up</button>
      </div>
      <div className='Account'>
        <div>have an account
          <NavLink to='/login' style={{ textDecoration: "none" }}><span className='signUp'>Login</span></NavLink>
        </div>
      </div>
    </div >
  )
}

export default Signup