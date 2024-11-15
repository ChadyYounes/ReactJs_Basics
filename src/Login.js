import React, { useState ,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './Login_Style.css';
import {Link,useNavigate} from 'react-router-dom'
import {loggedState,userInfo} from './loggedInState';


const  Login = (props)=>{
    const [userData,setUserData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://192.168.1.152/users.json');
            const data = await response.json();
            setUserData(data.users);
          } catch (exception) {
            console.log(exception);
          }
        };
    
        fetchData();
      }, []);
    const navigate=useNavigate();

// const[loggedIn,isLoggedIn]=useState(false);
const[email,setEmail]=useState("");
const[pass,setPass]=useState("");
const[error,setError]=useState("");
const onchangeEmail =(e)=> setEmail(e.target.value);
const onchangePass =(e)=> setPass(e.target.value);

const handlesubmit = (e) =>{
  e.preventDefault();
 if(email=='' && pass==''){
    setError("please fill the required fields!");
 }
 else if(email=='' && pass!=''){
    setError("please enter your email!")
 }
 else if(email!='' && pass==''){
    setError("Please Enter Your Password!");
 }
 else{
    setError("");
    const user = userData.find((user) => user.email === email && user.password === pass);
    if(user){
        loggedState.loggedIn=true;
        userInfo.name=email.split('@')[0];
        userInfo.email=email;
        navigate("/");
    }
    else{
        setError("Invalid Email or password!");
    }
    
 }
}

return(
<div className='loginBody'>
    <div class="container" id="container">
        <div class="form-container sign-in-container"> 
            <Link to="/"><img src={process.env.PUBLIC_URL + '/images/Back_Arrow.png'} className='img1' alt="Back"></img></Link>
            <form className='loginForm' action="#" onSubmit={handlesubmit}>
                <h1 className='loginH1'>Log in</h1>
            
                
                <label className='loginLabel'>Email</label>
                <input className='loginInput' type="email" placeholder="Email"  email={email} onChange={onchangeEmail} />
                <label className='loginLabel'>Password</label>
                <input className='loginInput' type="password" placeholder="Password"  pass={pass} onChange={onchangePass}/>
                {/* <a href="#">I forgot my password</a> */}
                <button className='loginBtn' type='submit'>Login</button>
                <p id='errorMsg'>{error}</p>
                <p className="forgotPass">Forgot your password?<Link className="forgotPassLink">click here</Link></p>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Traveler!</h1>
                    <p className='loginInfo'>Enter your personal details and start journey with us</p>
                    <Link to="/signup"><button  className="ghost" id="signUp">SignUp</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>

)
}

export default Login;