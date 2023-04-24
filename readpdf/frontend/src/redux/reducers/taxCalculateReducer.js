import { SET_TAX_BRACKET, SET_ACCUMULATED_TAX } from '../store/actionTypes';

const initialState = {
	taxBracket: '',
	accumulatedTax: 0
};

export default function taxCalculateReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TAX_BRACKET:
			return { ...state, taxBracket: action.payload };
		case SET_ACCUMULATED_TAX:
			return { ...state, accumulatedTax: action.payload };
		default:
			return state;
	}
}
