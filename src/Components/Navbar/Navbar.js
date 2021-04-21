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
							  		<li><i className="fab fa-github icon1"></i></li>
								    <li><i className="fab fa-linkedin icon2"></i></li>
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
			  		<li><i className="fab fa-github icon1 pt-5 mt-5"></i></li>
				    <li><i className="fab fa-linkedin icon2"></i></li>
			  	</div>
		    </>
		)
	}
}