import React from 'react'
import Navbar from './components/Navbar/Navbar'
import FilterArea from './components/FilterArea/FilterArea'
import RocketCollection from './components/RocketCollection/RocketCollection'

function App() {
	return (
		<div className='App bg-dark min-vh-100'>
			<Navbar />
			<FilterArea />
			<RocketCollection />
		</div>
	)
}

export default App
