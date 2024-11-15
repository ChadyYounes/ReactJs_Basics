import React from 'react';
import ReactDOM from 'react-dom';

import './footer.css';
import {Nav} from './navbar'
import Country from './countryCard';
import { Link } from 'react-router-dom';



export const Footer =()=>{
    return(
<div className="footerContainer">
	<div className="footer">
		<div className="footerContainerRow ">
			<div class="footer-col">
				<h4 className='footerH4'>company</h4>
				<ul className='footerList'>
					<li className='footerListChild'><Link className='footerLinks' to="/about" >about us</Link></li>
					<li className='footerListChild'><Link className='footerLinks'>our services</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">privacy policy</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">visit website</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4 className='footerH4'>get help</h4>
				<ul className='footerList'>
					<li className='footerListChild'><Link className='footerLinks' href="#">FAQ</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">shipping</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">returns</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">order status</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">payment options</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4 className='footerH4'>online shop</h4>
				<ul className='footerList'>
					<li className='footerListChild'><Link className='footerLinks' href="#">download</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">changelog</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">github</Link></li>
					<li className='footerListChild'><Link className='footerLinks' href="#">all version</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4 className='footerH4'>Download</h4>
				<div class="social-links">
					<img className='footerDownload' src='./images/appstore.png'></img>
                    <img className='footerDownload' src='./images/playstore.png'></img>
				</div>
			</div>
		</div>
	</div>
    
</div>
)}