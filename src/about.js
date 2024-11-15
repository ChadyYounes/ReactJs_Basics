import React, { useState, useEffect } from 'react';
import './about.css';
import { Nav } from './navbar';
import Country from './countryCard';
import './home.css';
import { Footer } from './footer';
import { CopyRight } from './copyright';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts
    setIsVisible(true);
  }, []);

   const [component , setComponent] = useState([]);

  const Componentdata = [
    {
      country: "Company History and important Values",
      desc: "At SwiftWing Travel, our journey began with a passion for exploration and a commitment to delivering unparalleled travel experiences.We evolved into a travel agency, driven by core values of customer satisfaction. Every milestone in our company's history reflects our commitment.",
      img: "./images/values.png"
    },
    {
      country: "Expertise and Destination Specialization ",
      desc: "Discover the world with confidence as you embark on a journey with ABC Travels. Our team, comprised of seasoned travel experts, specializes in curating exceptional experiences tailored to your unique preferences. Whether you seek the thrill of adventure and the luxury of leisure",
      img: "./images/map.jpg"
    },
    {
      country: "Customer Testimonials and Success Stories",
      desc: "Our clients' stories are the heartbeat of Pinnacle Travel. We take pride in the smiles and shared memories of those who have entrusted us with their travel dreams. In our 'Traveler Tales' section, read firsthand accounts of journeys and the experiences our clients have enjoyed.",
      img: "./images/opinion.png"
    }

  ];

  return (
    <div className='aboutAll'>
      <Nav />
      <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
        <div className={`aboutContainer ${isVisible ? 'fade-in' : ''}`}>
          <h1 className='aboutHeader'>What We Offer</h1>
        </div>
        <div className='aboutFirst'>
          <div className='aboutTopic1'>
            <img className='aboutTopicImage1' src='./images/since.png'></img>
            <div className='aboutHP'>
              <h1 className='aboutTopicHeader1'>Since 1998</h1>
              <p className='aboutTopicText1'>Discover the world with us since 1998. Horizon Travels, your trusted travel companion, has been crafting unforgettable journeys</p>
            </div>
          </div>
        </div>
        <h1 className='aboutHeader2'>About SwiftWing</h1>
        <div className='aboutCards'>
          {Componentdata.map((item, index) => (
            <Country key={index} country={item.country} desc={item.desc} img={item.img} />
          ))}
        </div>
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
};
