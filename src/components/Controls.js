import React, { Component } from 'react'
import Store from '../store/Store';
import { Link } from 'react-router';
import Sudoku from '../utils/sudoku';

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = Store.getState();

		this.style = {
			divStyle: {
                'marginTop': '15px',
                'marginLeft': 'auto',
                'marginRight': 'auto',
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center'
            },
            congratulationsStyle: {
                'color': 'red'
            }

        };
	}

	componentDidMount() {
		let self = this;
		self.unsubscribe = Store.subscribe(function() {
			self.setState(Store.getState());
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	numFormat(num) {
        return (num < 10) ? '0'+num : ''+num;
	}

	render() {
		let time = this.state.game.time;

		return (
			<div style={ this.style.divStyle }>
				<h2>Go to <Link to="/">Main menu</Link></h2>
				{
					Sudoku.isComplete(this.state.game.cells)
					? <h2 style={ this.style.congratulationsStyle }>Congratulations!</h2>
					: <h2>Play time: {
						this.numFormat(time.getHours()) + ':' +
                        this.numFormat(time.getMinutes()) + ':' +
                        this.numFormat(time.getSeconds())
					} </h2>
				}
			</div>
		)
	}
}