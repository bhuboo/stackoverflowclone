import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/icon.png'
import Aboutauth from './Aboutauth'


const Auth = () => {
 const [isSignup, setIsSignup] = useState(false)
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 

 const dispatch = useDispatch()
 const navigate = useNavigate()


   const handleSwitch = () => {
     setIsSignup(!isSignup)

      }

   const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert('Enter email and password')
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to continue")
      }

       
    }
   
   }

  return (
    <section className='auth-section'>
        {isSignup && <Aboutauth/>}
        <div className='auth-container-2'>
            {!isSignup && <img src={icon} alt='Stack overflow' className='login-logo' />}
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                  <label htmlFor='name'>
                        <h4>Display Name</h4>
                        <input type='text' name='name' id='name' onChange={(e) => {setName(e.target.value)}}/>
                  </label>
                    
    
                  )
                }
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                </label>
                <label htmlFor='password'>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <h4>Password</h4>
                      {!isSignup && <p style={{color:'#007ac6', fontSize:'13px'}}>Forgot Password?</p>}
                    </div>
                    <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                    {isSignup && <p style={{color:'#007ac6'}}>Passwords must conatain at least eight<br/>characters, including at least 1 letter and 1<br/> number.</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                        <input type='checkbox' id='check'/>
                        <p style={{color:'#007ac6'}}>Opt-in to  receive occasional,<br/>product updates,user research invitation,<br/>company announcement, and elgests</p>
                  </label>

                    )
                }
                <button type='submit' className='auth-btn'>{isSignup ? 'Sign up': "Log in"}</button>
                {
                    isSignup && (
                     <p style={{color:'#666767', fontSize:"15px"}}>By clicking "Sign Up", you agree<br/> to our
                    <span style={{color:'#007ac6'}}> terms of services</span>,<br/>
                    <span style={{color:'#007ac6'}}> privacy policy</span> and 
                    <span style={{color:'#007ac6'}}> cookie policy </span></p>
                  

                    )
                }
            </form>
            <p>
                {isSignup ? 'Already have an account?': "Don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : 'Sign Up'}</button>
            </p>

        </div>

      
    </section>
  )
}

export default Auth
