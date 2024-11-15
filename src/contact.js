import React from 'react';
import ReactDOM from 'react-dom';
import './contact.css';
import './footer.css'
import './copyright_Style.css'
import {Nav} from './navbar'
import {Footer} from './footer';
import { CopyRight } from './copyright';


export const Contact=()=>{
    return(
        <div>
            {/* <div className="contact-body"> */}
            <Nav />
            <div className="contact-quote-container "><h1 className="contact-quote">Adventure awaits! Reach out and let us turn your travel dreams into reality. Our team is here to assist you on your journey to discover new horizons and create unforgettable memories.</h1></div>
            <div style={{marginLeft:'20%'}} className="contact-form-container ">
                <div className="contact-us">
                    <div className="contact-header">
                    <h1 className="contact-header-h1">
                        &#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US
                    </h1>
                    </div>
                    <div className="social-bar">
                    <ul className="social-bar-ul">
                        <li className="social-bar-ul-li">
                        <i className="fab fa-facebook-f"></i>
                        </li>
                        <li className="social-bar-ul-li">
                        <i className="fab fa-twitter"></i>
                        </li>
                        <li className="social-bar-ul-li">
                        <i className="fab fa-instagram"></i>
                        </li>
                        <li className="social-bar-ul-li">
                        <i className="fab fa-dribbble"></i>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="header">
                    <h1 className="header-h1">
                    Have any suggestion or complaint?
                    </h1>
                    <h2 className="header-h2">
                    Contact us so that we take it into consideration! 
                    </h2>
                </div>
                <div className="address">
                    <i className="fas fa-map-marker-alt address-i"></i>
                    <h3 className="address-h3">
                    Beirut, Lebanon
                    </h3>
                </div>
                <div className="phone">
                    <i className="fas fa-phone-alt phone-i"></i>
                    <h3 className="phone-h3">
                    +961 3 543 016
                    </h3>
                </div>
                <div className="email">
                    <i className="fas fa-envelope email-i"></i>
                    <h3 className="email-h3">
                    swiftwing@gmail.com
                    </h3>
                </div>
                <div className="contact-form">
                    <form className="contact-form-form">
                    <input placeholder="Name" type="text" className="contact-form-form-input"/><input placeholder="Email" type="email" className="contact-form-form-input"/><textarea placeholder="Tell us about your project..." rows="4" className="contact-form-form-textarea"></textarea><button type="button" className="contact-form-form-button">SEND </button>
                    </form>
                </div>
                </div>
                
        {/* </div> */}
        <Footer/>
            <CopyRight/>
        </div>

    )
}