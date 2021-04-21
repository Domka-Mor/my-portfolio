import React from 'react'
import './Projects.css';
import {Link} from 'react-router-dom';
import BResort from '../../Images/BResort.png';
import MobileStore from '../../Images/MobileStore.png';
import Portfolio from '../../Images/portfolio.png';
import { TweenMax, TimelineMax, Power4, Expo } from "gsap";
import { useRef, useEffect } from "react";


export default function Projects() {

	let header1 = useRef(null);
	let header2 = useRef(null);
	let header3 = useRef(null);
	let screen1 = useRef(null);
	let screen2 = useRef(null);
  	let body = useRef(null);

  	useEffect(() => {
	    var tl = new TimelineMax();
	    tl.to(screen1,1, {
	      left: "-100%",
	      ease: Expo.easeInOut
	    });
	    tl.to(screen2,1, {
	      left: "-100%",
	      ease: Expo.easeInOut,
	      delay: -0.8,
	    });	
	    tl.to(header1, 0.5, {css: {
	        opacity: "1",
	        pointerEvents: "auto",
	        ease: Expo.easeInOut
	      }}).delay(.3)
      	tl.to(header2, 0.5, {css: {
        	opacity: "1",
        	pointerEvents: "auto",
        	ease: Expo.easeInOut
      	}}).delay(.1)
      	tl.to(header3, 0.5, {css: {
        	opacity: "1",
        	pointerEvents: "auto",
        	ease: Expo.easeInOut
      	}}).delay(0)
	    TweenMax.to(body, .3, {css: {
	      opacity: "1",
	      pointerEvents: "auto",
	      ease: Power4.easeInOut
	    }}).delay(0.9);	    
	    return () => {
	      TweenMax.to(body, 1, {css: {
	        opacity: "0",
	        pointerEvents: 'none'
	      }});	
	      TweenMax.to(header1, 0.3, {css: {
	        opacity: "0",
	        pointerEvents: 'none'
	      }}); 
          TweenMax.to(header2, 0.3, {css: {
            opacity: "0",
            pointerEvents: 'none'
          }}); 
          TweenMax.to(header3, 0.3, {css: {
            opacity: "0",
            pointerEvents: 'none'
          }});      
	  	}
  	});

	return (
		<>
			<div className="load-container">
	        	<div className='overlay-first' ref={(el) => (screen1 = el)}></div>
        		<div className='overlay-second' ref={(el) => (screen2 = el)}></div>
	      	</div>
	      	<div data-barba="container" className="Home">
			    <div ref={(el) => (body = el)} className="Headd">
					<div className='projects'>
						<div className="container3">
				        	<h1 className="projects-main">Projects<span>.</span></h1>
						    <div className="row3">
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						    </div>
						    <div className="row3">
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						    </div>
						    <div className="row3">
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						        <div className="hexagon"></div>
						    </div>
					    </div>				    

						<div className='d2-body'>
							<div className='direction2'>
								<div className='d2-box Headd' ref={div => (header1 = div)}>
									<div className='d2-imgBox'>
										<img src={MobileStore} alt='cover' className='d2-img'/>
									</div>
									<div className='d2-content'>
										<div>
											<h2 className='d2-h2'>Mobile Store</h2>
											<button className='btn project-btn'>
											    <Link to="/mobilestore">
											      <span></span>
											      <span></span>
											      <span></span>
											      <span></span>
											      <p>Learn more</p>
											    </Link>
											</button>
										</div>
									</div>
								</div>	
								<div className='d2-box Headd' ref={div => (header2 = div)}>
									<div className='d2-imgBox'>
										<img src={BResort} alt='cover' className='d2-img2'/>
									</div>
									<div className='d2-content'>
										<div>
											<h2 className='d2-h2'>Beach resort</h2>
											<button className='btn project-btn'>
											    <Link to="/beachresort">
											      <span></span>
											      <span></span>
											      <span></span>
											      <span></span>
											      <p>Learn more</p>
											    </Link>
											</button>
										</div>
									</div>
								</div>	
								<div className='d2-box Headd' ref={div => (header3 = div)}>
									<div className='d2-imgBox'>
										<img src={Portfolio} alt='cover' className='d2-img3'/>
									</div>
									<div className='d2-content'>
										<div>
											<h2 className='d2-h2'>My Portfolio</h2>
											<button className='btn project-btn'>
											    <Link to="/myportfolio">
											      <span></span>
											      <span></span>
											      <span></span>
											      <span></span>
											      <p>Learn more</p>
											    </Link>
											</button>
										</div>
									</div>
								</div>						
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}