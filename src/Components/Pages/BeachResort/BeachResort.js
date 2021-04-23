import React from 'react';
import './BeachResort.css';
import {Link} from 'react-router-dom';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";


export default function BeachResort() {

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
		          	<div className='parallax2-body'>
						<Link to='/projects' className='parallax-btn2'>	
							X
						</Link>
						<div className='links2'>
							<a href='https://github.com/Domka-Mor/hotel-reserve-frontend'>
							    <i className="fab fa-github"></i>
							</a>
							<a href='https://hotel-booking-fullstack.netlify.app/'>
							    <i className="fas fa-external-link-alt"></i>
							</a>
						    <p></p>
				  		</div>			
						<div className='parallax2-container'>				
							<div className='parallax2-section'>
								<div className='parallax2-content'>
									<h2 className='parallax2-h2'>Main information</h2>
									<p className='parallax2-p'>Demonstration of the hotel website with the room reservation feature.</p>
									<p className='parallax2-p'> Type : Full-stack</p>
									<p className='parallax2-p'> Build with :<br/> <span/>React <span/>Bootstrap <span/>styled-components<br/>
									<span/>Node.js <span/>Express <span/>GraphQL <span/>MongoDB</p>
								</div>
							</div>
							<div className='parallax2-section'>
								<div className='parallax2-content'>
									<h2 className='parallax2-h2'>Modern Design</h2>
									<p className='parallax2-p'>Smooth scrolling, component's reveal on scroll and custom carousels for better UI/UX experience.</p>
								</div>
							</div>
							<div className='parallax2-section'>
								<div className='parallax2-content'>
									<h2 className='parallax2-h2'>Possibility to book a room</h2>
									<p className='parallax2-p'>Opportunity of booking a room for a selected number of days 
									with information about the price and parameters of the room.</p>
								</div>
							</div>
							<div className='parallax2-section'>
								<div className='parallax2-content'>
									<h2 className='parallax2-h2'>Reservation section</h2>
									<p className='parallax2-p'>User profile showing all bookings with the possibility of cancellation.</p>
								</div>
							</div>
						</div>
					</div>
		        </div>
	      	</div>
		</>
	)
}