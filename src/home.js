
import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import {Nav} from './navbar';
import {Footer} from './footer';
import Country from './countryCard';
import { CopyRight } from './copyright';
import { useEffect } from 'react';


export const Home=()=>{

    
      
    return(
        <div className='All'>
            <Nav/>
            <div className='home-journeys'>
                <p className='home-journeys-quote'>Your Gateway to<br></br>Unforgettable<br></br>Journeys</p>
                <p className='home-journeys-desc'>At Wander Travel, we're your trusted partners for<br></br> exploring the breathtaking beauty, rich culture, and<br></br> 
                unparalleled experiences that Jordan has to offer.<br></br><br></br>
                With a focus on personalized travel, we specialize in<br></br> curating tailor-made itineraries, providing<br></br> exceptional 
                services, and making your dreams come<br></br> true, one journey at a time.</p>
         
            <img className='switzerland-img' src='./images/switzerland.jpg'/>
  </div> 

           

            <div className='countriesContainer'>
                
            <div className='countryIntro'>
            <h1 className='countryIntroHeader'>Explore the Wonders of the World with SwiftWing
            <img className='homePaperPlane' src='./images/paper-plane.png'></img>
            <img src='./images/compass.png' className='homeCompass'></img>
            </h1>
            
           </div>
           <div className='cards'>
            <Country country="Religious & Pilgrimage Tours"  desc="Jordan is a land of spiritual significance, hosting holy sites of Islam and Christianity. Our Religious & Pilgrimage Tours offer a sacred journey, allowing pilgrims"  img="./images/religious.png" />
            <Country country="Leisure, Health & Well-being "  desc="Our Leisure, Health & Well-being Packages are designed to rejuvenate your body and mind. Immerse yourself in relaxation, fitness, and nutrition and feeling refreshed"  img="./images/wellbeing.avif" />
            <Country country="Medical Tourism"  desc="Discover Jordan's world-renowned healthcare services. With a blend of modern medical facilities and natural wonders like the Dead Sea, we provide"  img="./images/medical.jpg" />
            <Country country="Honeymoon  &  Wedding "  desc="Celebrate love and create unforgettable memories with our Honeymoon Packages & Wedding Arrangements. We offer"  img="./images/marriage.jpg" />
            <Country country="Adventure Trips"  desc="Satisfy your inner adventurer with our Adventure Trips. From hiking canyons to biking through historical routes, Jordan's natural beauty awaits."  img="./images/adventure.jpg" />
            <Country country="Sports Travel"  desc="Experience the thrill of attending sporting events with our Sports Travel packages. Whether you're a fan or an athlete, we'll help you create unforgettable sporting"  img="./images/sport.jpg" />
            <Country country="Independent Travel"  desc="Plan your own adventure with Independent Travel. We're here to assist you in creating a perfect, unforgettable experience."  img="./images/indepent.avif" />
            <Country country="Combined Tours in Jordan & the Holy Land"  desc="Explore the Holy Land with our combined tours. Visit historic and religious sites, making your pilgrimage truly special."  img="./images/holyLand.jpg" />
            <Country country="Cultural & Historical Tours"  desc="Explore Jordan's rich heritage with our Cultural & Historical Tours. Uncover millennia of history, traditions, and the warm hospitality of the Jordanian people."  img="./images/cultural.jpg" />
            </div>
            </div>
            <Footer/>
            <CopyRight/>
        </div>

    )
}