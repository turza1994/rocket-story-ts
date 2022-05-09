import React from 'react'

function FilterArea() {
	return (
		<div
			className='text-light py-2 fixed-bottom'
			style={{ backgroundColor: 'black' }}
		>
			<div className='container d-flex justify-content-around align-items-center'>
				<h5 className='pt-2'>Filter:</h5>

				<select
					className='form-select w-25 bg-dark text-light fw-bold fs-5 border-dark'
					aria-label='Default select example'
				>
					<option>By Launch Date</option>
					<option value='1'>Last Week</option>
					<option value='2'>Last Month</option>
					<option value='3'>Last Year</option>
				</select>

				<select
					className='form-select w-25 bg-dark text-light fw-bold fs-5 border-dark'
					aria-label='Default select example'
				>
					<option>By Launch Status</option>
					<option value='1'>Failure</option>
					<option value='2'>Success</option>
				</select>

				<div className='form-check d-flex justify-content-center align-items-center'>
					<input
						className='form-check-input fs-4 me-2'
						type='checkbox'
						value=''
						id='flexCheckDefault'
					/>
					<label
						className='form-check-label fw-bold fs-5'
						htmlFor='flexCheckDefault'
					>
						Upcoming
					</label>
				</div>
			</div>
		</div>
	)
}

export default FilterArea
