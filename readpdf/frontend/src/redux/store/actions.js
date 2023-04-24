import { UPDATE_SUM, SET_TAX_BRACKET, SET_ACCUMULATED_TAX } from './actionTypes';
import { calculateTax } from '../../services/TaxBracketCal';
export const updateSum = (sum) => ({
	type: UPDATE_SUM,
	payload: sum
});
export const setTaxBracket = (taxBracket) => ({
	type: SET_TAX_BRACKET,
	payload: taxBracket
});

export const setAccumulatedTax = (accumulatedTax) => ({
	type: SET_ACCUMULATED_TAX,
	payload: accumulatedTax
});
export const calculateTaxThunk = () => {
	return async (dispatch, getState) => {
		try {
			const { dataFromChild, estimateTaxableIncome } = getState();
			const result = await calculateTax(dataFromChild, estimateTaxableIncome);
			dispatch(setTaxBracket(result.taxBracket));
			dispatch(setAccumulatedTax(result.accumulatedTax));
		} catch (error) {
			// Handle errors, if any
		}
	};
};
