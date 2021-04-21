import React from 'react';
import './Error.css';


export default function Error() {
	return (
		<div className='text-center error-div'>
			<div className='error'>
				<h1>404</h1>
				<h2>Page not found</h2>
				<button className='btn error-button pt-3'>
				    <a href="/">
				      <span></span>
				      <span></span>
				      <span></span>
				      <span></span>
				      <p>return home</p>
				    </a>
				</button>
			</div>
		</div>
	)
}