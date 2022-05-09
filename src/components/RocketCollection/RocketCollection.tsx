import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncRockets } from '../../redux/rockets/rocketSlice'
import RocketCard from '../RocketCard/RocketCard'

function RocketCollection() {
	const dispatch = useDispatch()
	const rockets = useSelector((state: any) => state.rockets.rockets)
	console.log(rockets)

	useEffect(() => {
		dispatch(fetchAsyncRockets())
	}, [dispatch])

	return (
		<div className='container mt-5 pt-5 mb-5'>
			<div className='row g-4 justify-content-center align-items-center'>
				{rockets.map((rocket: any) => (
					<RocketCard key={rocket?.mission_name} data={rocket} />
				))}
			</div>
		</div>
	)
}

export default RocketCollection
