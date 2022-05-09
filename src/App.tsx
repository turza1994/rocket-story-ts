import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncRockets } from './redux/rockets/rocketSlice'
import Navbar from './components/Navbar/Navbar'
import FilterArea from './components/FilterArea/FilterArea'

function App() {
	const dispatch = useDispatch()
	const rockets = useSelector((state: any) => state.rockets.rockets)
	console.log(rockets)

	useEffect(() => {
		dispatch(fetchAsyncRockets())
	}, [dispatch])

	return (
		<div className='App bg-secondary bg-gradient vh-100'>
			<Navbar />
			<FilterArea />
			<h1>Hello</h1>
		</div>
	)
}

export default App
