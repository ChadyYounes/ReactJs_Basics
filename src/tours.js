import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {Nav} from './navbar'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './tours.css';
import { Footer } from './footer';
import { CopyRight } from './copyright';
// import { set } from 'react-hook-form';
import ToursCard from './toursCard';
// import {BordingPass} from './bordingPass'
import { loggedState } from './loggedInState';
export const Tours=()=>{

  const [tableData,setTableData]=useState([]);
  
  const handleBookNow=(destination,price,e)=>{
    const obj={
      destination,
      price,
    }
    setTableData((prevTableData) => [...prevTableData, obj]);
  // e.target.disabled = true;

  }

  const handleRemove = (index,e) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };
  const [isVisible, setIsVisible] = useState(false);
  const [flightsData,setFlightsData]=useState([]);
  const [showBordingPass,setShowBordingPass]=useState(true);
  const navigate=useNavigate();
      useEffect(() => {
        setIsVisible(true);
          const fetchData = async () => {
            try {
              const response = await fetch('http://172.16.180.19/flights.json');
              const data = await response.json();
              setFlightsData(data.flights);
            } catch (exception) {
              console.log(exception);
            }
          };
      
          fetchData();
        }, []);
    
   

    const [hotelsClassName , setHotelsClassName] = useState('hotelsButton');
    const [flightClassName , setFlightClassName] = useState('flightsButton');

    const [showHotels,setShowHotels]=useState(false);
    const [people,setPeople] = useState(1);
    
    const onchangePeople =(e)=> setPeople(e.target.value);
    
    const handleMinus =()=>{
      if(people > 1)
      setPeople(people-1);
    else 
    setPeople(1)

    }
    const handlePlus =()=>{
      
      setPeople(people+1);
   

    }

    const handleFlightButton = ()=>{
        setFlightClassName('flightsButtonV2');
        setHotelsClassName('hotelsButtonV2');
        setShowHotels(true);
    }

    const handleHotelsButton = ()=>{
        setFlightClassName('flightsButton');
        setHotelsClassName('hotelsButton');
        setShowHotels(false);
    }
    const [errorMsg,setErrorMsg]=useState('');
    const [toDate,setToDate]=useState('');
    const [fromDate,setFromDate]=useState('');
    const handleFlyNowBtn=()=>{
      const flightSelect=document.getElementById('flightSelect').value;
      const fromDate=document.getElementById('fromDate').value;
      const toDate=document.getElementById('toDate').value;
      if(loggedState.loggedIn===false){
        navigate('/login')
      }
      else if(flightSelect==''){
        setErrorMsg('please select a flight!')
      }
      else if(toDate==='' || fromDate===''){
        setErrorMsg('please fill in with the departure and return dates!')
      }
      else if(loggedState.loggedIn===true && flightSelect!='' && fromDate
      !='' && toDate!='' ){
      navigate("/ticket")
    }
  }
    return(

        <div className='toursContainer'>
            <Nav />
            <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
              <div className='toursHeader'>
                <div className='toursHeaderHP'>
            <h1 className='toursIntroHeader1'>Discover Amazing Tours with SwiftWing Travel Agency</h1>
            <p className='toursIntroDesc'>Embark on a journey of discovery with SwiftWing Travel Agency and unlock a world of amazing tours that promise unforgettable experiences.</p>
            </div>
            <img src='./images/worldWide.jpg' className='worldWide'></img>
            </div>
              <div className='toursFeatures'>
                <div className='toursSecond'>
            <div className='toursIntro'>
            <h1 className='toursIntroHeader'>Top destinations for your next vacation
            {/* <img className='homePaperPlane'alt='paper-plane' src='./images/paper-plane.png'></img>
            <img src='./images/compass.png' alt='compass' className='homeCompass'></img> */}
            </h1>
            
           </div>
           <div className='toursCards2'>
            <ToursCard  handleClick={(e)=>handleBookNow("Switzerland, Bern","200$ per adult",e)} country="Switzerland, Bern" price='200$ per Adult'   img="./images/swiss.jpg" />
            <ToursCard handleClick={(e)=>handleBookNow("Germany, Berlin" ,'160$ per Adult',e )} country="Germany, Berlin"   price='160$ per Adult'   img="./images/Berlin.jpg" />
            <ToursCard handleClick={(e)=>handleBookNow("France, Monaco",'110$ per Adult' ,e )} country="France, Monaco"    price='110$ per Adult'   img="./images/Monaco.jpg" />
            <ToursCard handleClick={(e)=>handleBookNow("Morroco, Casablanca",'90$ per Adult' ,e )} country="Morocco, Casablanca"price='90$ per Adult'  img="./images/Casablanca.jpg" />
            <ToursCard handleClick={(e)=>handleBookNow("Turkey, Istanbul",'80$ per Adult' ,e )} country="Turkey, Istanbul"   price='80$ per Adult'  img="./images/istanbul.jpg" />
            <ToursCard handleClick={(e)=>handleBookNow("Spain, Madrid",'220$ per Adult' ,e )} country="Spain, Madrid"      price='220$ per Adult'  img="./images/Madrid.jpg" />
              </div>

              </div>
              <table className="tableContainer">
                <thead>
                  <tr>
                    <th className="tableHeader">Destination</th>
                    <th className="tableHeader">Price</th>
                    <th className="tableHeader">Book</th>
                    <th className="tableHeader">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((country, index) => (
                    <tr key={index}>
                      <td className="tableCell">{country.destination}</td>
                      <td className="tableCell">{country.price}</td>
                      <td className="tableCell"><button className="actionButton">Book Now</button></td>
                      <td className="tableCell"><button className="actionButton actionButtonRemove" onClick={(e)=>handleRemove(index,e)}>Remove</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


<div>
  <div className ="content">
    <div className='toursform'>
    <div className ="title">
      <h1 className='toursHeader11'>Book a Flight</h1>
        <p className='toursP'>Select locations and dates to get started.</p>
    </div>
    <div className="progress">
      {/* <p className='toursP'>Step 1 of 3</p> */}
    <div className="progress-bar">
      {/* <div className="bar-pink">
        <p className='toursP'>33%</p>
      </div> */}
     </div>
    </div>
    <div className ="categories">
    <button type='button' className={flightClassName} onClick={handleHotelsButton}>Flights</button>
      <button type='button' className={hotelsClassName} onClick={handleFlightButton}>Hotels</button>
    </div>
   {
   showHotels==false ? (<>
    <div className="row1">
    <div className="locations from-location1">
     <label className="from-location2" for="from">Tours:</label>
     <select id="flightSelect" className="from">
      <option value="" disabled selected>Select a flight</option>
                {flightsData.map((flight) => (
                <option key={flight.id} value={flight.id}>
                    {flight.from} to {flight.to} - ${flight.price}
                </option>
                ))}
            </select>
    </div>
    {/* <div className="locations to-location1">
      <label className="to-location2" for="to">To:</label>
      <select id="flightSelect" className="to">
                {flightsData.map((flight) => (
                <option key={flight.id} value={flight.id}>
                    {flight.from} to {flight.to} - ${flight.price}
                </option>
                ))}
            </select>
    </div> */}
  </div>
    <div className="row2">
      <div className="dates depart">
        <label className="depart-date" for="depart">Depart:</label>
        <input className="departure-date" type="date" id='fromDate' value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}></input>
      </div>
      <div className="dates return">
        <label className="returning-date" for="return">Return:</label>
        <input className="return-date" type="date" id='toDate' value={toDate}
          onChange={(e) => setToDate(e.target.value)}></input>     
      </div></div>
      <div className="numOfPerson">
        <label className="personLabel" for="return">People:</label>
        <button className='person-' onClick={handleMinus}>-</button>
        <input className="personField" type="text" value={people} readonly disabled></input>  
        <button className='person+' onClick={handlePlus}>+</button>   
      </div>
    
  </>
   ) : (
    <>
    <div className="row1">
    <div className="locations from-location1">
     <label className="from-location2" for="from">Hotel:</label>
      <select className="from">
        <option value="Wakanda">Wakanda</option>
      </select>
    </div>
    <div className="locations to-location1">
      <label className="to-location2" for="to">Rooms:</label>
      <select className="to">
      
        <option value="Wakanda">Wakanda</option>
      </select>
    </div>
  </div>
    <div className="row2">
      <div className="dates depart">
        <label className="depart-date" for="depart">From:</label>
        <input className="departure-date" type="date"></input>
      </div>
      <div className="dates return">
        <label className="returning-date" for="return">Till:</label>
        <input className="return-date" type="date"></input>     
      </div>
    </div>
    <div className="numOfPerson">
        <label className="personLabel" for="return">People:</label>
        <button className='person-' onClick={handleMinus}>-</button>
        <input className="personField" type="text" value={people} readonly disabled></input>  
        <button className='person+' onClick={handlePlus}>+</button>   
      </div>
  </>
   )

   }
    <div className="next-button">
    <button className="next" value="submit" onClick={handleFlyNowBtn}>Fly Now!</button>
      </div>
      <p className='errorMsg'>{errorMsg}</p>
    </div>
  </div>
</div>
<Footer/>
<CopyRight/>
        </div>
</div>)
    
}