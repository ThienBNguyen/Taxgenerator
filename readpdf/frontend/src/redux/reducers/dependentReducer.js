const initialState = {
	under16: 0,
	over17: 0
};
const dependentReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_UNDER_16':
			return { ...state, under16: action.payload };
		case 'UPDATE_OVER_17':
			return { ...state, over17: action.payload };

		default:
			return state;
	}
};
export default dependentReducer;
