import { calculateShortTermCapitalGainsTax} from "../../services/calculateCapitalGain";
const initalState = {
    shortTaxGain: 0
}
const shortCapitalGainLossCalculateReducer = (state = initalState, action) => {
const optionFromDispatch = action.payload;
	switch (action.type) {
	
        case 'CALCULATE_SHORT_CAPITAL_GAIN_TAX':
              const tax = calculateShortTermCapitalGainsTax(optionFromDispatch.taxGain, 0, optionFromDispatch.status);
            return { ...state, shortTaxGain: state.shortTaxGain + tax };
		default:
			return state;
	}
};
export default shortCapitalGainLossCalculateReducer;