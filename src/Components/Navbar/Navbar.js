import React, {Component} from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';


export default class Navbar extends Component {

	state={
		isOpen: false
	}


	handleToggle = () => {
		this.setState({isOpen: !this.state.isOpen})
	}

	render(){
		return (
			<>  
				<div className="d-xl-none navbar-pinky">
					<nav className= 'container-fluid nav-min fixed-top'>
						<div className='row'>								
								<button type='button' className='nav-btn ml-3' onClick={this.handleToggle}>
									<i className="fas fa-bars"></i>
								</button>
						</div>	
						<div className='row d-flex align-items-center justify-content-center pt-2'>
							<ul className={this.state.isOpen? 'nav-links show-nav':'nav-min nav-links1'}>
							    <li>
								    <NavLink to='/' exact={true} activeClassName='is-active' onClick={this.handleToggle}>
									    <button className='btn btn-nav'>
									    	Home
									    </button>
								    </NavLink>
							    </li>
							    <li>
								    <NavLink to='/about' activeClassName='is-active' onClick={this.handleToggle}>
									    <button className='btn btn-nav'>
									    	About me
									    </button>
								    </NavLink>
							    </li>
							    <li>
								    <NavLink to='/projects' activeClassName='is-active' onClick={this.handleToggle}>
									    <button className='btn btn-nav'>
									    	Projects
									    </button>
								    </NavLink>
							    </li>
							    <li>
								    <NavLink to='/contact' activeClassName='is-active' onClick={this.handleToggle}>
									    <button className='btn btn-nav'>
									    	Contact
									    </button>
								    </NavLink>
							    </li>
						  		<span className="navbar-text">
							  		<li>
								  		<a href='https://github.com/Domka-Mor'>
								  			<i className="fab fa-github icon1"></i>
								  		</a>
							  		</li>
							  		<li>
								  		<a href='https://www.linkedin.com/in/dominika-moravi%C4%8Dov%C3%A1-4b470a210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRUUGZFhRTZuTSKIsNgvmAQ%3D%3D'>
								    		<i className="fab fa-linkedin icon2"></i>
								    	</a>
							    	</li>
							    </span>
						    </ul>
					    </div>
				    </nav>
			  	</div>

			  	<div className="d-none d-xl-block navbar-pinky">
				    <li><NavLink to='/' exact={true} activeClassName='is-active'><button className='btn btn-nav'>Home</button></NavLink></li>
				    <li><NavLink to='/about' activeClassName='is-active'><button className='btn btn-nav'>About me</button></NavLink></li>
				    <li><NavLink to='/projects' activeClassName='is-active'><button className='btn btn-nav'>Projects</button></NavLink></li>
				    <li><NavLink to='/contact' activeClassName='is-active'><button className='btn btn-nav'>Contact</button></NavLink></li>
			  		<li>
				  		<a href='https://github.com/Domka-Mor'>
				  			<i className="fab fa-github icon1 pt-5 mt-5"></i>
				  		</a>
			  		</li>
			  		<li>
				  		<a href='https://www.linkedin.com/in/dominika-moravi%C4%8Dov%C3%A1-4b470a210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRUUGZFhRTZuTSKIsNgvmAQ%3D%3D'>
					    	<i className="fab fa-linkedin icon2"></i>
					    </a>
				    </li>
			  	</div>
		    </>
		)
	}
}