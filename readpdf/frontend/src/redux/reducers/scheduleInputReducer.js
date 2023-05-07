const initialState = {
	totalRevenue: 0,
	totalExpense: 0,
	longTermGainOrLoss: 0,
	shortTermGainOrLoss: 0,
	rentalIncome: 0,
	rentalExpenses: 0,
	grossIncome: 0
};
const sheduleInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_TOTAL_REVENUE':
			return { ...state, totalRevenue: action.payload };
		case 'UPDATE_TOTAL_EXPENSE':
			return { ...state, totalExpense: action.payload };
		case 'UPDATE_LONG_TERM_GAIN_LOSS':
			return { ...state, longTermGainOrLoss: action.payload };
		case 'UPDATE_SHORT_TERM_GAIN_LOSS':
			return { ...state, shortTermGainOrLoss: action.payload };
		case 'UPDATE_RENTAL_INCOME_GAIN':
			return { ...state, rentalIncome: action.payload };
		case 'UPDATE_RENTAL_INCOME_LOST':
			return { ...state, rentalExpenses: action.payload };
		case 'UPDATE_GROSS_INCOME':
			return { ...state, grossIncome: action.payload };
		default:
			return state;
	}
};
export default sheduleInputReducer;
