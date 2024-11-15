import React,{useState} from 'react';

import './bordingPass.css';
import { useNavigate } from 'react-router-dom';
import { userInfo } from './loggedInState';

export const BordingPass = () => {
    const navigate=useNavigate();
    const [name,setName]=useState(userInfo.name);
  return (
    
    <div className='bordingPassAll'>
        
      <div className="boardingPass">
        <header className="boardingPass-header">
          <h1 className="boardingPass-airline">Airline</h1>
        </header>

        <main className="boardingPass-main">
          <div className="row">
            <section className="boardingPass-departur col-xs">
              <span className="section-label">London, UK</span>
              <span className="boardingPass-departur-IATA">LDN</span>
            </section>

            <section className="boardingPass-transport boardingPass-icon col-xs">
              <i className="boardingPass-transport-icon material-icons">airplanemode_active</i>
            </section>

            <section className="boardingPass-arrival col-xs">
              <span className="section-label">Marseille, FR</span>
              <span className="boardingPass-arrival-IATA">MRS</span>
            </section>
          </div>

          <hr className="hr--invisible hr" />

          <div className="row">
            <section className="boardingPass-icon col-xs">
              <i className="material-icons">event</i>
            </section>

            <section className="boardingPass-date col-xs">
              <span className="section-label">Date:</span>
              <span>4 Nov</span>

              <span className="section-label">Departure:</span>
              <span>10:00</span>
        

              <span className="section-label">Arrival:</span>
              <span>12:05</span>
            </section>

          </div>

          <hr />

          <div className="row">
            <section className="boardingPass-icon col-xs">
              <i className="material-icons">flight_takeoff</i>
            </section>

            <section className="boardingPass-flight col-xs">
              <span className="section-label">Flight:</span>
              <span>EZY147</span>
            
              <span className="section-label">Terminal:</span>
              <span>North</span>
    
              <span className="section-label">Gate:</span>
              <span>58</span>
            </section>

            
          </div>

          <hr />

          <div className="row">
            <section className="boardingPass-icon col-xs">
              <i className="material-icons">account_circle</i>
            </section>

            <section className="boardingPass-passenger col-xs">
              <span className="section-label">Passenger:</span>
              <span>{name}</span>

              <span className="section-label">Seat:</span>
              <span>17A</span>
    

              <span className="section-label">Class:</span>
              <span>E</span>
            </section>

            
          </div>
        </main>

        <footer className="boardingPass-footer">
          <div className="row">
            <div className="boardingPass-qrCode col-xs"></div>
          </div>
        </footer>
      </div>
      <h1 className='boardingPassH1'>Please save this image or take a screenshot of it before leaving this tab cause you'll need it later!</h1><br></br>
        <button className='backHomeBtn' onClick={()=>navigate('/')}>Back Home</button>
    </div>
  );
};
