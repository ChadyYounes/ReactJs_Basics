import React from 'react';
import './home.css';
import { BrowserRouter as Router } from 'react-router-dom';
const Country = (props) => {
    
    return (
      <div className="countryCard">
            <div className='image-container'>
             <img className='countryCardImg' alt='switzerland' src={props.img}></img>
         </div>
         <div className='text1'>
              <h4 className='countryCardH4'>{props.country}</h4>
              <p className='countryCardDesc'>{props.desc}</p>
              </div>
      </div>
    );
  };

  export default Country;