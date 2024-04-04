import React, { useState } from 'react'
import './LoginpopUp.css'
import { assets } from '../../assets/assets'
const LoginpopUp = ({setshowlogin}) => {

  const [currentstate,setcurrentstate]=useState("Login")
  return (
    <div className='login-popup'>
    <form className='login-popup-cintainer'>
         <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt=""/>
         </div>
         <div className="login-popup-inputs">
          {currentstate==="Login"?<></>: <input type='text' placeholder='your name' required/>}
          
           <input type='email' placeholder='your mail' required/>
           <input type='password' placeholder='password' required/>
         </div>
         <button>{currentstate==="Sign Up"?"Create account":"Login"}</button>
         <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy polocy.</p>
         </div>
         {currentstate==="Login"
         ? <p>Create a new account ? <span onClick={()=>setcurrentstate("Sign Up")}>Click here</span></p>
         :<p>Already have an account?<span onClick={()=>setcurrentstate("Login")}>Login here</span></p>
        }
        
         
    </form>
    </div>
  )
}

export default LoginpopUp
