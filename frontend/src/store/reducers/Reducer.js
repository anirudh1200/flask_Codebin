const initState = {
	login: false,
	username: ''
}

const Reducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				login: true,
				username: action.username
			}
		case 'LOGOUT':
			return {
				...state,
				login: false,
				username: ''
			}
		default:
			return state;
	}
}

export default Reducer;