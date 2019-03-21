const initState = {
	login: false,
	username: '',
	showCodebin: true
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
		case 'CODEBIN':
			return {
				...state,
				showCodebin: action.showCodebin
			}
		default:
			return state;
	}
}

export default Reducer;