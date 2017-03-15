export const resume_game = () => {
	return {
		type: 'RESUME_GAME'
	}
}

export const new_game = (difficulty) => {
	return {
		type: 'NEW_GAME',
		difficulty: difficulty
	}
}

export const change_value = (cell, newValue) => {
	return {
		type: 'CHANGE_VALUE',
		i: cell.i,
		j: cell.j,
		value: (newValue) ? parseInt(newValue) : null
	}
}

export const add_second = () => {
	return {
		type: 'ADD_SECOND'
	}
}