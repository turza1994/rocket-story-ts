import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	filterByLaunchDate,
	filterByLaunchStatus,
	filterByUpcomingStatus,
	resetFilter,
} from '../../redux/rockets/rocketSlice'

function FilterArea() {
	const dispatch = useDispatch()

	const onLaunchDateChange = (e: any) => {
		dispatch(filterByLaunchDate(e.target.value))
	}

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
					onChange={onLaunchDateChange}
				>
					<option>By Launch Date</option>
					<option value='7'>Last Week</option>
					<option value='30'>Last Month</option>
					<option value='365'>Last Year</option>
					<option value='730'>Last Two Years</option>
				</select>

				<select
					className='form-select w-25 bg-dark text-light fw-bold fs-5 border-dark'
					aria-label='Default select example'
					onChange={e => dispatch(filterByLaunchStatus(e.target.value))}
				>
					<option>By Launch Status</option>
					<option value='0'>Failure</option>
					<option value='1'>Success</option>
				</select>

				<select
					className='form-select w-25 bg-dark text-light fw-bold fs-5 border-dark'
					aria-label='Default select example'
					onChange={e => dispatch(filterByUpcomingStatus(true))}
				>
					<option>By Upcoming Status</option>
					<option value='0'>Upcoming Rockets</option>
				</select>

				<button
					type='button'
					className='btn btn-outline-light'
					onClick={() => dispatch(resetFilter())}
				>
					Clear Filter
				</button>
			</div>
		</div>
	)
}

export default FilterArea
