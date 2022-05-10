import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchByName } from '../../redux/rockets/rocketSlice'

function Navbar() {
	const dispatch = useDispatch()
	const [searchString, setSearchString] = useState('')

	const onFormSubmit = (e: any) => {
		e.preventDefault()
		dispatch(searchByName(searchString))
	}

	return (
		<nav
			className='navbar navbar-expand-lg navbar-dark fixed-top fw-bolder mb-5 py-2'
			style={{ backgroundColor: 'black' }}
		>
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
					<form className='d-flex mx-auto w-50' onSubmit={onFormSubmit}>
						<input
							className='form-control me-2 fs-5'
							type='search'
							placeholder='Search rockets by name'
							aria-label='Search'
							onChange={e => setSearchString(e.target.value)}
						/>
						<button className='btn btn-outline-light' type='submit'>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
