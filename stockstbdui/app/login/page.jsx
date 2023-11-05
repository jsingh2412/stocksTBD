'use client'
import React, {useState} from 'react';
import './login.css';

const LogIn = () => {
  const [action,setAction] = useState('Sign Up');

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="pizzazz"></div>
      </div>
      <div className="inputs">
        <div className="input">
        <input type="email" placeholder="example@this.com"/>
        </div>
        <div className="input">
        <input type="password" placeholder="********"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click here!</span></div>
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    
  );
};

export default LogIn;
