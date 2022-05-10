import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncRockets } from '../../redux/rockets/rocketSlice'
import RocketCard from '../RocketCard/RocketCard'

function RocketCollection() {
	const dispatch = useDispatch()
	const rockets = useSelector((state: any) => state.rockets)
	console.log(rockets)

	useEffect(() => {
		dispatch(fetchAsyncRockets())
	}, [dispatch])

	return (
		<div className='container mt-5 pt-5 mb-5'>
			<div className='row g-4 justify-content-center align-items-center'>
				{rockets?.loading ? (
					<div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
						<div className='spinner-border text-danger' role='status'>
							<span className='visually-hidden'>Loading...</span>
						</div>
					</div>
				) : rockets?.filteredRockets.length === 0 ? (
					<h1 className='vh-100 text-light d-flex justify-content-center align-items-center'>
						No Result Found
					</h1>
				) : (
					rockets?.filteredRockets.map((rocket: any) => (
						<RocketCard key={rocket?.mission_name} data={rocket} />
					))
				)}
			</div>
		</div>
	)
}

export default RocketCollection
