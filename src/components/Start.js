import React, { Component } from 'react';
import Store from '../store/Store';
import { Link } from 'react-router';
import { new_game } from '../store/Actions';

export default class Start extends Component {
	shouldComponentUpdate(newProps, newState) {
		return false;
	}

	constructor(props) {
		super(props);
		this.state = Store.getState();

		this.difficultyClick = this.difficultyClick.bind(this);

		this.style = {
            divStyle: {
                'width': '400px',
                'height': '400px',
                'marginLeft': 'auto',
                'marginRight': 'auto'
            },
            buttonDivStyle: {
                'display': 'flex',
                'flexDirection': 'column'
            },
            buttonStyle: {
                'marginTop': '10px'
            }
        };
	}

	componentDidMount() {
		let self = this;
		self.unsubscribe =  Store.subscribe(function() {
			self.setState(Store.getState());
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div style={ this.style.divStyle }>

				<h1>Choose difficulty:</h1>
				<div style={ this.style.buttonDivStyle }>
					<button style={ this.style.buttonStyle } data-difficulty="easy" onClick={this.difficultyClick}>Easy</button>
					<button style={ this.style.buttonStyle } data-difficulty="medium" onClick={this.difficultyClick}>Medium</button>
					<button style={ this.style.buttonStyle } data-difficulty="hard" onClick={this.difficultyClick}>Hard</button>
				</div>
				<h2>Go to <Link to="/">Main menu</Link></h2>
			</div>
		);
	}

	difficultyClick(event) {
		event.preventDefault();
		let difficulty = event.target.getAttribute('data-difficulty');
		Store.dispatch(new_game(difficulty));
		location.hash = '/game';
	}
}		