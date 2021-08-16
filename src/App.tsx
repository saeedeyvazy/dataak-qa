import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import { Home, DetailAnswer } from './pages'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/detail-answer' component={DetailAnswer} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
