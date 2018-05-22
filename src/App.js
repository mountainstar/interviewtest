import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
	state = {
		toggleImage: false,
		image: ''
	};

	render() {
		const URL = 'http://fillmurray.com/g/300/400';
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Toggle My Image Test</h1>
				</header>
				<div className="container">
					<div className="image-container">
						<div>
							<img alt="Bill" src={URL} />
						</div>
					</div>
					<Button handleClick={() => console.log('give me a function')} />
				</div>
			</div>
		);
	}
}

export default App;
