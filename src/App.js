import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons';
import { MailOutlined, LockOutlined } from '@ant-design/icons';



function App() {
  const[showLogin, setShowLogin] = useState(true);
  const toggleForm = () => {

    setShowLogin(!showLogin)
   
  }
  const handleClose = () => {
  setShowLogin(false); // Close the page
  };
  return (
    <div className="App">
      <header>
        <h2 className='logo'>Logo</h2>
        <nav className='navigation'>
           <a href='#home'>Home</a>
           <a href='#about'>About</a>
           <a href='#services'>Services</a>
           <a href='#contact'>Contact</a>
           <button className='btnLogin-popup' onClick={toggleForm}> {showLogin ? 'Register' : 'Login'} </button>
        </nav>
      </header>

<div className='wrapper'>
  <span className='icon-close' onClick={handleClose}><CloseCircleOutlined/></span>
  <div className='form-box login' style={{display: showLogin? 'block' : 'none'}}>
    <h2>Login</h2>
    <form action='#'>
      <div className='input-box'>
        <span className='icon'><MailOutlined/></span>
        <input type='email' required></input>
        <label>Email</label>
      </div>
      <div className='input-box'>
        <span className='icon'><LockOutlined/></span>
        <input type='password' required></input>
        <label>Password</label>
      </div>
      <div className='remember-forgot'>
        <label><input type="checkbox"/>Remember me</label>
        <a href='#'>forgot password</a>
      </div>
      <button  type='submit' className='btn'>Login
      </button>
      <div className='login-register'>
        <p>Don't have an account? <a href='#' className ='register-link' onClick={toggleForm}>Register</a></p>
      </div>
          
    </form>
  </div>
  <span className='icon-close' onClick={handleClose}><CloseCircleOutlined/></span>
  <div className='form-box Register' style={{display: showLogin ? 'none' : 'block'}}>
    <h2>Registration</h2>
    <form action='#'>
    <div className='input-box'>
        <span className='icon'><UserOutlined/></span>
        <input type='text' required></input>
        <label>Username</label>
      </div>
      <div className='input-box'>
        <span className='icon'><MailOutlined/></span>
        <input type='email' required></input>
        <label>Email</label>
      </div>
      <div className='input-box'>
        <span className='icon'><LockOutlined/></span>
        <input type='password' required></input>
        <label>Password</label>
      </div>
      <div className='remember-forgot'>
        <label><input type="checkbox"/>I agree to the terms & conditions</label>
        <a href='#'> </a>
      </div>
      <button  type='submit' className='btn'>Register
      </button>
      <div className='login-register'>
        <p>Already have an account <a href='#' className ='register-link' onClick={toggleForm}>Login</a></p>
      </div>
          
    </form>
  </div>
</div>

    </div>
  );
}

export default App;
