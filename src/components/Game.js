import React, { Component } from 'react'
import Store from '../store/Store';
import Cell from './Cell';
import Controls from './Controls';
import { add_second } from '../store/Actions';

export default class Game extends Component {
	constructor(props) {
		super(props);
		this.state = Store.getState();

	}

	componentDidMount() {
		let self = this;
		this.unsubscribe = Store.subscribe(function() {
			self.setState(Store.getState());
		});

		this.addSecond = setInterval(function() {
			Store.dispatch(add_second());
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.addSecond);
		this.unsubscribe();
	}

	render() {
		if (typeof localStorage.currentGame === 'undefined') {
			location.hash = '/';
			return <div></div>;
		}

		return (
			<div>
				<Controls />
				
				<table className="sudoku-table">
					<tbody>
						{this.state.game.cells.map(function(line, i) {
							return (
								<tr key={i}>
									{line.map(function(cell) {
										return <Cell cell={cell} key={cell.j} />;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}