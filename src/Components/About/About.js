import React from 'react';
import './About.css';
import { TweenMax, TimelineMax, Power4, Expo } from "gsap";
import { useRef, useEffect } from "react";


export default function About() {

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
	      ease: Expo.easeInOut,
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
					<div className='about'>	        
				        <div className="container2">
				        	<h1 className="about-main">About me<span>.</span></h1>
						    <div className="row2">
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
						    <div className="row2">
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
						    <div className="row2">
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
					    <div className='container-fluid'>
					        <div className='row justify-content-center'>
					        	<div className='col-md-5 offset-md-1'>	
					        		<div className='text-about Headd' ref={div => (header1 = div)}>
							        	<h4>Who am I ?</h4>
								        <h2>I am Dominika Moravičová, a web developer based in Košice, Slovakia.</h2>
								        <p className='text-muted'>From the moment I created "Hello World" in my first application,
								         I knew, I was drawn into a new and amazing world. That day, web development became my biggest passion ...</p>
							        </div>
							        <div className='d-flex info Headd' ref={div => (header3 = div)}>
								        <ul className='pr-4'>      
								            <li><p><span>Name :</span> Dominika Moravičová</p></li>  
								            <li><p><span>Age :</span> 29</p></li>				                     
								        </ul>
								        <ul>           
								            <li><p><span>Location :</span> Košice</p></li>   
								            <li><p><span>Email :</span> dominika.moravicova@gmail.com</p></li>	
								        </ul>
							        </div>
								</div>        
								<div className='col-md-4 offset-md-1 Headd' ref={div => (header2 = div)}>
									<div>
						        		<h4>Here are a few technologies I've been working with recently :</h4>
						        	</div>
						        	<div className='d-flex tech'>
								        <ul className='pr-4'>           
								            <li>React</li>
								            <li>JavaScript (ES6+)</li>
								            <li>HTML & CSS</li>	         
								        </ul>
								        <ul>           
								            <li>Node.js</li>
								            <li>Express.js</li>
								            <li>REST & GraphQL</li>
								        </ul>
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