import React from 'react'

function RocketCard({ data }: any) {
	const {
		mission_name,
		flight_number,
		launch_year,
		upcoming,
		rocket: { rocket_name, rocket_type },
		launch_success,
		links: { mission_patch_small },
		details,
	} = data

	return (
		<div className='col-md-4 d-flex justify-content-center'>
			<div
				className='w-100 p-1 rounded-3 d-flex justify-content-center align-items-center'
				style={{ backgroundColor: 'black' }}
			>
				<div
					className='w-100 bg-dark bg-gradient rounded-3 text-white d-flex flex-column align-items-center'
					style={{ height: '490px', width: '18rem' }}
				>
					{mission_patch_small ? (
						<img
							className='mx-auto rounded pt-2 pb-2 border-bottom border-3 border-light overflow-hidden'
							src={mission_patch_small}
							alt='robo friend'
							style={{ width: '40%' }}
						/>
					) : (
						<p className='fs-2 mt-5 pb-5 border-bottom border-3'>No Image</p>
					)}

					<div className='p-3 fs-5 w-100'>
						<p className='text-center mb-3 fs-4'>
							{flight_number}. {mission_name}{' '}
						</p>
						<p className='d-flex justify-content-between'>
							<span>Rocket Name:</span> <span>{rocket_name}</span>
						</p>
						<p className='d-flex justify-content-between'>
							<span>Rocket Type:</span> <span>{rocket_type}</span>
						</p>
						<p className='d-flex justify-content-between'>
							<span>Launch Year:</span> <span>{launch_year}</span>
						</p>
						<p className='d-flex justify-content-between'>
							<span>Launch Success:</span>{' '}
							<span>{launch_success ? 'Successful' : 'Failed'}</span>
						</p>
						<p className='d-flex justify-content-between'>
							<span>Upcoming:</span> <span>{upcoming ? 'Yes' : 'No'}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RocketCard
