import React, { Component } from 'react';
import Store from '../store/Store';
import { change_value } from '../store/Actions';

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	shouldComponentUpdate(newProps, newState) {
		let oldCell = this.props.cell;
		let newCell = newProps.cell;
		return (
			oldCell.value !== newCell.value ||
			oldCell.editable !== newCell.editable ||
			oldCell.hasConflict !== newCell.hasConflict
		);
	}

	render() {
		let cell = this.props.cell;

		let classes = [];
		classes.push('i'+cell.i);
		classes.push('j'+cell.j);
		classes.push(cell.editable ? 'editable' : 'not-editable');
		classes.push(cell.hasConflict ? 'has-conflict' : 'no-conflict');

		return (
			<td className={classes.join(' ')}>
				<input
					type="tel"
					value={cell.value}
					onClick={this.onClick}
					onChange={this.onChange} />
			</td>
		);
	}

	onClick(event) {
		event.preventDefault();
		if (this.props.cell.editable) {
			event.target.select();
		} else {
			event.target.blur();
		}
	}

	onChange(event) {
		event.preventDefault();
		let cell = this.props.cell;
		if (!cell.editable) {
			return;
		}
		let newValue = event.target.value;
		if (newValue !== '' && !/^[1-9]$/.test(newValue)) {
			event.target.value = cell.value;
			return;
		}

		Store.dispatch(change_value(cell, newValue))
	}
}