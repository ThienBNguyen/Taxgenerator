import {
	calculateSingleTax,
	calculateHeadOfHouseholdTax,
	calculateMarriedFilingSeparatelyTax,
	calculateMarriedFilingJoinlyTax
} from '../../services/TaxBracketCal';
const initialState = {
	taxBracket: '',
	accumulatedTax: 0,
	taxableIncome: 0,
	federalInputValue: 0
};

const taxCalculateReducer = (state = initialState, action) => {
	let standardDeduction = {
		single: 12950,
		head_of_household: 19400,
		married_filing_jointly: 25900,
		married_filing_separately: 12950,
		Qualifying_widower: 25900
	};
	switch (action.type) {
		case 'CALCULATE_ACCUMULATED_TAX':
			const optionFromDispatch = action.payload;
			let estimateTaxableIncome = 0;
			let standardDeductionValue = 0;
			let statusData = optionFromDispatch.status;
			let userWage = optionFromDispatch.userWage;
			let holding = optionFromDispatch.federalInputValue;
			let updatedState = { ...state };

			if (statusData === 'Single') {
				standardDeductionValue = standardDeduction.single;
				estimateTaxableIncome = userWage - standardDeductionValue;
				// let federalInputValue = holding;
				const { accumulatedTax, taxableIncome, taxBracket, federalInputValue } = calculateSingleTax(
					estimateTaxableIncome,
					holding
				);
				updatedState = { ...updatedState, accumulatedTax, taxableIncome, taxBracket, federalInputValue };
			} else if (statusData === 'Head_of_Household') {
				standardDeductionValue = standardDeduction.head_of_household;
				estimateTaxableIncome = userWage - standardDeductionValue;
				const { accumulatedTax, taxableIncome } = calculateHeadOfHouseholdTax(estimateTaxableIncome);
				updatedState = { ...updatedState, accumulatedTax, taxableIncome };
			} else if (statusData === 'Married_Filing_Jointly') {
				standardDeductionValue = standardDeduction.married_filing_jointly;
				estimateTaxableIncome = userWage - standardDeductionValue;
				const { accumulatedTax, taxableIncome } = calculateMarriedFilingJoinlyTax(estimateTaxableIncome);
				updatedState = { ...updatedState, accumulatedTax, taxableIncome };
			} else if (statusData === 'Married_Filing_Separately') {
				standardDeductionValue = standardDeduction.married_filing_separately;
				estimateTaxableIncome = userWage - standardDeductionValue;
				const { accumulatedTax, taxableIncome } = calculateMarriedFilingSeparatelyTax(estimateTaxableIncome);
				updatedState = { ...updatedState, accumulatedTax, taxableIncome };
			}
			return updatedState;
		default:
			return state;
	}
};

export default taxCalculateReducer;
