import React from 'react';
import ReactDOM from 'react-dom';  // Correct import statement
// import './index.css';
// Import Bootstrap CSS in your index.js or App.js file
// import 'bootstrap/dist/css/bootstrap.min.css';

import{
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
import { Nav } from './navbar';
import {Home} from './home';
import{About} from'./about';
import{Contact}from'./contact';
import{Tours} from './tours';
import Login from'./Login';
import {Sign} from './Signup';
import { BordingPass } from './bordingPass';
// import { userInfo } from './loggedInState';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Main=(props)=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tours' element={<Tours />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Sign />}/>
        <Route path='/ticket' element={<BordingPass />} />
      </Routes>
  </Router>
  )
  
}
root.render(
  <Main />
);

