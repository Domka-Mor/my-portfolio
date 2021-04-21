import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Draggable from 'react-draggable';
import { TweenMax, TimelineMax, Power4, Expo } from "gsap";



export default function Home() {

    const [animated1, setAnimated1] = useState(false);
    const [animated2, setAnimated2] = useState(false);
    const [animated3, setAnimated3] = useState(false);
    const [animated4, setAnimated4] = useState(false);
    const [animated5, setAnimated5] = useState(false);
    const [animated6, setAnimated6] = useState(false);
    const [animated7, setAnimated7] = useState(false);
    const [animated8, setAnimated8] = useState(false);
    const [animated9, setAnimated9] = useState(false);

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
				    <div className='blob'>
				        <div className='div-hero'>
				          	<div className='hero-text1 Headd' ref={div => (header1 = div)}>
				            	<h1>Hi, my name is</h1>
				          	</div>
				          	<div className='bounce Headd' ref={div => (header3 = div)}>
				              	<h1 className={animated1 ? 'bounce-6' : 'blast'}
				                	onMouseOver={() => setAnimated1(() => true)}
				                	onAnimationEnd={() => setAnimated1(() => false)}
				              	>D</h1>
				              	<h1 className={animated2 ? 'bounce-6' : 'blast'}  
				               		onMouseOver={() => setAnimated2(() => true)}
				                	onAnimationEnd={() => setAnimated2(() => false)}
				              	>o</h1>
				              	<h1 className={animated3 ? 'bounce-6' : 'blast'}
				                	onMouseOver={() => setAnimated3(() => true)}
				                	onAnimationEnd={() => setAnimated3(() => false)}
				              	>m</h1>
				              	<h1 className={animated4 ? 'bounce-6' : 'blast'}
				                	onMouseOver={() => setAnimated4(() => true)}
				                	onAnimationEnd={() => setAnimated4(() => false)}
				              	>i</h1>
				              	<h1 className={animated5 ? 'bounce-6' : 'blast'}
				                	onMouseOver={() => setAnimated5(() => true)}
				                	onAnimationEnd={() => setAnimated5(() => false)}
				              	>n</h1>
				              	<h1 className={animated6 ? 'bounce-6' : 'blast'}
				                	onMouseOver={() => setAnimated6(() => true)}
				                	onAnimationEnd={() => setAnimated6(() => false)}
				              	>i</h1>
				              	<h1 className={animated7 ? 'bounce-6' : 'blast'}
				                	onMouseOver={() => setAnimated7(() => true)}
				                	onAnimationEnd={() => setAnimated7(() => false)}
				              	>k</h1>
				              	<h1 className={animated8 ? 'bounce-6' : 'blast'}
				               		onMouseOver={() => setAnimated8(() => true)}
				                	onAnimationEnd={() => setAnimated8(() => false)}
				              	>a</h1>
				              	<h1 className={animated9 ? 'dot-6' : 'dot'}
				                	onMouseOver={() => setAnimated9(() => true)}
				                	onAnimationEnd={() => setAnimated9(() => false)}
				              	>.</h1>
				          	</div>
				          	<div className='hero-text2'>
				            	<h1 className="text-muted Headd" ref={div => (header2 = div)}>I'm a web developer.</h1>
				          	</div>
				        </div>

				      	<div className='containerBlob'>
				      		<Draggable>
					      		<div>
					      			<div className='circle circle1'></div>		
					      		</div>
				      		</Draggable>
				      		<Draggable>
					      		<div>
					      			<div className='circle circle2'></div>		
					      		</div>
				      		</Draggable>
				      		<Draggable>
					      		<div>
					      			<div className='circle circle1'></div>		
					      		</div>
				      		</Draggable>
				      		<Draggable>
					      		<div>
					      			<div className='circle circle2'></div>		
					      		</div>
				      		</Draggable>
				      	</div>
				      	<svg>
				      		<filter id='gooey'>
				      			<feGaussianBlur in='SourceGraphic' stdDeviation='10' />
				      			<feColorMatrix values="
				      			1 0 0 0 0
				      			0 1 0 0 0
				      			0 0 1 0 0
				      			0 0 0 20 -10
				      			"/>
				      		</filter>
				      	</svg>
				    </div>    
		    	</div> 
		    </div>   
    	</>
	)
}