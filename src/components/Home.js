import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
	constructor() {
		super();
		
		this.divStyle = {
            'textAlign': 'center'
        }
	}

	render() {
		return (
			<div style={ this.divStyle }>
				<h1>Welcome to Sudoku game</h1>
				<h2><Link to="start">Start</Link></h2>
				{
					this.hasExistingGame() ?
					<h2>or <Link to="game">Resume</Link></h2> : null
				}
			</div>
		);
	}

	hasExistingGame() {
		return (typeof localStorage.currentGame !== 'undefined');
	}
}