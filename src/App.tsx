import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { fetchAsyncRockets } from './redux/rockets/rocketSlice'

function App() {
	const dispatch = useDispatch()
	const rockets = useSelector((state: any) => state.rockets.rockets)
	console.log(rockets)

	useEffect(() => {
		dispatch(fetchAsyncRockets())
	}, [dispatch])

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
