import { UPDATE_SUM } from '../store/actionTypes';

const initialState = {
	sum: 0
};

export default function sumScheduleCReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_SUM:
			return { ...state, sum: action.payload };
		default:
			return state;
	}
}
