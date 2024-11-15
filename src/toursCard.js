import React from 'react';
import './toursCard.css';
const ToursCard = (props) => {
    


    return (
        <div className="toursCard">
            <div className='tours-image-container'>
             <img className='toursCardImg' alt='switzerland' src={props.img}></img>
        </div>

        <div className='toursText1'>
              <h4 className='toursCardH4'>{props.country}</h4>

            <div className='toursInner'>
                <div className='toursLeft'>
                    <img className='toursRating' src='./images/5stars.png'></img>
                    <p className='toursPrice'>{props.price}</p>
                </div>
                <button type='button' className='toursButton' onClick={props.handleClick}>Book Now</button>
            </div>

        </div>
      </div>
    );
  };

  export default ToursCard;