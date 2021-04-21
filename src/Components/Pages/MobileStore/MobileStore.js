import React from 'react';
import './MobileStore.css';
import {Link} from 'react-router-dom';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";


export default function MobileStore() {

	let screen = useRef(null);
  	let body = useRef(null);

  	useEffect(() => {
	    var tl = new TimelineMax();
	    tl.to(screen, {
	      duration: 1,
	      height: "100%",
	      ease: Power3.easeInOut,
	    });
	    tl.to(screen, {
	      duration: .8,
	      top: "100%",
	      ease: Power3.easeInOut,
	      delay: 0.3,
	    });
	    tl.set(screen, { left: "-100%" });
	    TweenMax.to(body, .3, {css: {
	      opacity: "1",
	      pointerEvents: "auto",
	      ease: Power4.easeInOut
	    }}).delay(2);
	    return () => {
		  	TweenMax.to(body, 1, {css: {
		      opacity: "0",
		      pointerEvents: 'none'
		  	}});
		}
    });

	return (
		<>
			<div className="load-container">
	        	<div className="load-screen1" ref={(el) => (screen = el)}></div>
	      	</div>
	      	<div data-barba="container" className="Contact">
		        <div ref={(el) => (body = el)} className="Headd">
		          	<div className='parallax1-body'>
						<Link to='/projects' className='parallax-btn1'>	
							X
						</Link>
						<div className='links1'>
							<a href='https://github.com/Domka-Mor/Shop-mobile-Frontend'>
						    	<i className="fab fa-github"></i>
						    </a>
						    <a href='https://mobile-store-fullstack.netlify.app/'>
						    	<i className="fas fa-external-link-alt"></i>
						    </a>
						    <p></p>
				  		</div>		
						<div className='parallax1-container'>				
							<div className='parallax1-section'>
								<div className='parallax1-content'>
									<h2 className='parallax1-h2'>Main information</h2>
									<p className='parallax1-p'>Demonstration of the mobile store e-commerce with admin and user section.</p>
									<p className='parallax1-p'> Type : Full-stack</p>
									<p className='parallax1-p'> Build with :<br/> <span/>React <span/>Bootstrap <span/>styled-components<br/> 
									<span/>Node.js <span/>Express <span/>Rest API <span/>MongoDB</p>
								</div>
							</div>
							<div className='parallax1-section'>
								<div className='parallax1-content'>
									<h2 className='parallax1-h2'>Better UI/UX experience</h2>
									<p className='parallax1-p'>Modern product design with 360° view, hover effects and more.</p>
								</div>
							</div>
							<div className='parallax1-section'>
								<div className='parallax1-content'>
									<h2 className='parallax1-h2'>User profile</h2>
									<p className='parallax1-p'>Section with information about the user, 
									his paid orders with details, processing status and delivery address.</p>
								</div>
							</div>
							<div className='parallax1-section'>
								<div className='parallax1-content'>
									<h2 className='parallax1-h2'>Admin section - Users and Orders</h2>
									<p className='parallax1-p'>Section with information about all users, orders and products.</p>
									<p className='parallax1-p'>Admin can view all user information, delete their profile, 
									delete and manage each of user's orders depending on processing status.</p>
								</div>
							</div>
							<div className='parallax1-section'>
								<div className='parallax1-content'>
									<h2 className='parallax1-h2'>Admin section - Products</h2>
									<p className='parallax1-p'>Admin can view all information of product and delete or edit them.</p>
								</div>
							</div>
							<div className='parallax1-section'>
								<div className='parallax1-content'>
									<h2 className='parallax1-h2'>Admin section - New Product</h2>
									<p className='parallax1-p'>Admin can add a new product according to selected parameters.</p>
								</div>
							</div>
						</div>
					</div>
		        </div>
		    </div>			
		</>
	)
}