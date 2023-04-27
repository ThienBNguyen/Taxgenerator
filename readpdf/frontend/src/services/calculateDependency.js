export function calculateDependentCredit(numDependents, numDependentsOver17) {
	let allDependentExemption = 0;
	let dependentExemptionOver17 = 0;
	let dependentExemption = 0;
	if (numDependents === 0) {
		dependentExemption = 0;
	} else if (numDependents === 1) {
		dependentExemption = 2000;
	} else {
		dependentExemption = 2000 + (numDependents - 1) * 2000;
	}
	if (numDependentsOver17 === 0) {
		dependentExemptionOver17 = 0;
	} else if (numDependentsOver17 === 1) {
		dependentExemptionOver17 = 500;
	} else {
		dependentExemptionOver17 = 500 + (numDependentsOver17 - 1) * 500;
	}
	allDependentExemption = dependentExemption + dependentExemptionOver17;
	return allDependentExemption;
}
