import React from 'react';
import './Contact.css';
import { TweenMax, TimelineMax, Power4, Expo } from "gsap";


export default class Contact extends React.Component {

	constructor(props) {
	    super(props);
	    this.timeline = new TimelineMax();
	    this.state = {      
	      name: '',
	      email: '',
	      message: ''
	    }
	}


	componentDidMount() {
	    this.timeline
	      .to(this.screen1,1, {
	        left: "-100%",
	        ease: Expo.easeInOut,
	      })
	      .to(this.screen2,1, {
	        left: "-100%",
	        ease: Expo.easeInOut,
	        delay: -0.8,
	      })    
	      .to(this.header1, 0.5, {css: {
	        opacity: "1",
	        pointerEvents: "auto",
	        ease: Expo.easeInOut
	      }}).delay(.5) 
	      .to(this.header2, 0.5, {css: {
	        opacity: "1",
	        pointerEvents: "auto",
	        ease: Expo.easeInOut
	      }}).delay(.3) 
	      .to(this.header3, 0.5, {css: {
	        opacity: "1",
	        pointerEvents: "auto",
	        ease: Expo.easeInOut
	      }}).delay(0)   
	      TweenMax.to(this.body, .3, {css: {
	        opacity: "1",
	        pointerEvents: "auto",
	        ease: Power4.easeInOut
	      }}).delay(0.9);

	      return () => {
	        TweenMax.to(this.body, 1, {css: {
	          opacity: "0",
	          pointerEvents: 'none'
	        }}); 
	        TweenMax.to(this.header1, 0.3, {css: {
	          opacity: "0",
	          pointerEvents: 'none'
	        }});
	        TweenMax.to(this.header2, 0.3, {css: {
	          opacity: "0",
	          pointerEvents: 'none'
	        }});  
	        TweenMax.to(this.header3, 0.3, {css: {
	          opacity: "0",
	          pointerEvents: 'none'
	        }});      
	      }
 	}

	onNameChange = (event) => {
	    this.setState({name: event.target.value})
	}

  	onEmailChange = (event) => {
	    this.setState({email: event.target.value})
	}


  	onMessageChange = (event) => {
		this.setState({message: event.target.value})
	}

	resetForm = () => {
	    this.setState({name: '', email: '', message: ''})
	}

	onSubmit = (event) => {
		event.preventDefault();

	  	fetch('https://portfolio-emailsender.herokuapp.com/send', {
	      method: "POST",
	      body: JSON.stringify(this.state),
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	    })
	    .then(res => {
	        if (res.status !== 200 && res.status !== 201) {
	          throw new Error('Failed!');
	        }
	        return res.json();
	    })
	    .then(resData => {
	    	if (resData) {
	      	alert("Thank you for your message! :)"); 
	      	console.log('Hi there! :P');
	      	this.resetForm();
    		} else{
      		alert("I'm sad. Message failed to send. Please try again. :( ")
    		}
	    })
	  	.catch(err => {
	        console.log(err);
	    });  
	}


	render() {
		return (
			<>
				<div className="load-container">
        			<div className='overlay-first' ref={(el) => (this.screen1 = el)}></div>
        			<div className='overlay-second' ref={(el) => (this.screen2 = el)}></div>
	      		</div>
	      		<div data-barba="container" className="Home">
	      			<div ref={(div) => (this.body = div)} className="Headd">
						<div className='wawe-body'>
							<div className='wawe-section Headd' ref={div => (this.header1 = div)}>
								<div className='wawe'>
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className='wawe-content Headd' ref={div => (this.header2 = div)}>
									<div className='form-auth'>
						              	<h2 className='Headd' ref={div => (this.header3 = div)}>Contact me<span>.</span></h2>
						              	<form>
							              	<div className='inputBox'>
							                  <input type='text' placeholder='Name' onChange={this.onNameChange}/>
							                </div>
							                <div className='inputBox'>
							                  <input type='email' placeholder='Email' onChange={this.onEmailChange}/>
							                </div>
							                <textarea className='inputBox' placeholder='Message' rows="5" cols="33" onChange={this.onMessageChange}></textarea>						
							                <div className='inputBox text-center'>
							                  	<button className='btn contact-button' onClick = {this.onSubmit}>
												    <a href="/">
												      <span></span>
												      <span></span>
												      <span></span>
												      <span></span>
												      <p>Submit</p>
												    </a>
											  	</button>
							                </div>               
						              	</form>
						            </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}