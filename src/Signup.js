import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Signup_Style.css';
import {Link} from 'react-router-dom'

export const Sign = ({ history }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const[error,setError]=useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

   
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;


    if(fullName=='' || email=='' || password=='' || confirmPassword==''){
      setError("please fill all the required fields!")
    }
    else if(!/^\S+@\S+\.\S+$/.test(email)){
      setError("please enter a valid email!")
    }
    else if(!passwordRegex.test(password)){
      setError("Password must be at least 8 characters long and include uppercase and lowercase letters, special characters, and digits!")
    }
    else if(password!=confirmPassword){
      setError("Passwords do not match!");
    }
    else{
      setError("");
    }
  }

  return (
    <div className='signupBody'>
      <div className="container1" id="container1">
        <Link to="/"><img src={process.env.PUBLIC_URL + '/images/Back_Arrow.png'} className='img1' alt="Back"></img></Link>
        <div className="form-container1 sign-in-container1">
          <form className='signupForm' action="#" onSubmit={handleSubmit}>
            <h1 className='signupH1'>Sign up</h1>
            <label className='signupLabel'>FullName</label>
            <input
              className="input1"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label className='signupLabel'>Email</label>
            <input
              className="input1"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='signupLabel'>Password</label>
            <input
              className="input1"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className='signupLabel'>ConfirmPassword</label>
            <input
              className="input1"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <div style={{ color: 'red', marginTop: '5px' }}>
              {fullNameError && <p>{fullNameError}</p>}
              {emailError && <p>{emailError}</p>}
              {passwordError && <p>{passwordError}</p>}
              {confirmPasswordError && <p>{confirmPasswordError}</p>}
            </div> */}
            {/* <p className='signupInfo'>Already Have an Account?<a href="#">Login</a></p> */}
            <button className='signupBtn' type="submit">Register</button>
            <p id='errorMsgSignUp'>{error}</p>
            <p className="haveAnAccount">Already have an account? <Link to="/login" className="haveAnAccountLink">Login</Link></p>
            {/* {registrationSuccess && <p style={{ color: 'green' }}>Registration successful! Redirecting to login page.</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};