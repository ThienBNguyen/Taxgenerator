import {calculateLongTermCapitalGainsTax} from "../../services/calculateCapitalGain";

const initalState = {
    longTaxGain: 0,
}
const longCapitalGainLossCalculateReducer = (state = initalState, action) => {
const optionFromDispatch = action.payload;
	switch (action.type) {
		case 'CALCULATE_LONG_CAPITAL_GAIN_TAX':
			let tax = calculateLongTermCapitalGainsTax(optionFromDispatch.taxGain, 0, optionFromDispatch.status)
			return {...state, longTaxGain:state.longTaxGain + tax };
        		default:
			return state;
	}
};
export default longCapitalGainLossCalculateReducer;