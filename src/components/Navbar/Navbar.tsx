import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top fw-bolder mb-5 py-3'>
			<div className='container'>
				<Link className='navbar-brand fw-bolder fst-italic' to='/'>
					Rocket Story
				</Link>

				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='navbar-toggler-icon fas fa-align-justify'></i>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<form className='d-flex mx-auto w-50'>
						<input
							className='form-control me-2 fs-5'
							type='search'
							placeholder='Search rockets by name'
							aria-label='Search'
						/>
					</form>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
