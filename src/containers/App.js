import React, { Component } from 'react';

export default class App extends Component {	
	render() {
		return (
			<div>
				Source code on <a href="https://github.com/Kirillpryanikov/sudoku" target="_blank">Github</a>
				{this.props.children}
			</div>
		)
	}
}