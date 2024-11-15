import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';
import { Link } from 'react-router-dom';
import {loggedState,userInfo} from './loggedInState';
import { useState } from 'react';


export const Nav=()=>{
    const [showInfoCard,setShowInfoCard]=useState(false);

    const handleUserDetail=()=>{
        setShowInfoCard(true);
    }
    const handleLogout=()=>{
        loggedState.loggedIn=false;
        setShowInfoCard(false);
    }
    const handleCancelInfo=()=>{
        setShowInfoCard(false);
    }
    return(
        <div className='nav'>
           
            <p className='logo'>SwiftWing</p>
            <div>
                <ul className='navList'>
                    <li className='navListElement'>
                        <Link className='navListElementLink' to="/">Home</Link>
                    </li>
                    <li className='navListElement'>
                        <Link className='navListElementLink' to="/tours">Tours</Link>
                    </li>
                    <li className='navListElement'>
                        <Link className='navListElementLink' to="/about">About</Link>
                    </li>
                    <li className='navListElement'>
                        <Link className='navListElementLink' to="/contact">Contact Us</Link>
                    </li>
                    
                    
                </ul>
            </div>
            {
                loggedState.loggedIn === false ? (
                    <>
                    <button id='signup'><Link style={{ textDecoration: 'none', color: 'inherit' }} className='NavBtn' to="/signup">Signup</Link></button>
                    <button id='login'><Link style={{ textDecoration: 'none', color: 'inherit' }} className='NavBtn' to="/login">Login</Link></button>
                    </>
                ) : (
                    <div style={{ float: 'right', marginTop: '-6%', textAlign: 'end' }}>
                        <img onClick={handleUserDetail} style={{ maxWidth: "5%", height: "auto", display: 'inline-block', verticalAlign: 'middle' }} src="./images/user.png" alt="UserProfile" />
                        <p style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>{userInfo.name}</p>
                    </div>

                )
                }

                {showInfoCard === true && (
                        <div style={{ textAlign:'center', color:'white',backgroundColor: '#21B6A8', width: '220px',height:'220px', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', position:'absolute',left:'80%',top:'12%',zIndex:'3' }}>
                            <img onClick={handleCancelInfo} style={{maxWidth:'20px',height:'auto',position:'relative',left:'45%',top:'0%'}} src='./images/Close.png'/>
                            <p>Name: {userInfo.name}</p>
                            <p>Email: {userInfo.email}</p>
                            
                            <button style={{ fontFamily: 'Playfair Display SC, serif',fontFamily: 'Poppins, sans-serif',padding: '10px', fontSize:'15px',backgroundColor: '#ff0000', color: '#fff', border: 'none', borderRadius: '8px' }} onClick={handleLogout}>Logout</button>
                        </div>
                        )}

            <div className='hrContainer'>
                <hr className='hrHome'></hr>
            </div>
        </div>
    )
}