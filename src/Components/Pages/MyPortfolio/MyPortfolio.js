import React from 'react';
import './MyPortfolio.css';
import {Link} from 'react-router-dom';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";


export default function MyPortfolio() {

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
          <div className='parallax3-body'>
            <Link to='/projects' className='parallax-btn3'>  
              X
            </Link>
            <div className='links3'>
                <i className="fab fa-github"></i>
                <p></p>
            </div>      
            <div className='parallax3-container'>       
              <div className='parallax3-section'>
                <div className='parallax3-content'>
                  <h2 className='parallax3-h2'>And last but not least, my portfolio... :)</h2>
                  <p className='parallax3-p'> Build with :<br/> <span/>React <span/>Bootstrap <span/>gsap<br/>
                  <span/>Node.js <span/>Express</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}