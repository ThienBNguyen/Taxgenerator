const initialState = {
	totalRevenue: 0,
	totalExpense: 0,
	longTermGain: 0,
	shortTermGain: 0,
	longTermLost: 0,
	shortTermLost: 0,
	rentalIncomeGain: 0,
	rentalIncomeLost: 0
};
const sheduleInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_TOTAL_REVENUE':
			return { ...state, totalRevenue: action.payload };
		case 'UPDATE_TOTAL_EXPENSE':
			return { ...state, totalExpense: action.payload };
		case 'UPDATE_LONG_TERM_GAIN':
			return { ...state, longTermGain: action.payload };
		case 'UPDATE_LONG_TERM_LOST':
			return { ...state, longTermLost: action.payload };
		case 'UPDATE_SHORT_TERM_GAIN':
			return { ...state, shortTermGain: action.payload };
		case 'UPDATE_SHORT_TERM_LOST':
			return { ...state, shortTermLost: action.payload };
		case 'UPDATE_RENTAL_INCOME_GAIN':
			return { ...state, rentalIncomeGain: action.payload };
		case 'UPDATE_RENTAL_INCOME_LOST':
			return { ...state, rentalIncomeLost: action.payload };
		default:
			return state;
	}
};
export default sheduleInputReducer;
