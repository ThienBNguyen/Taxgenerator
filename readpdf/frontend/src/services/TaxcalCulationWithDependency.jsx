export function calculateMarriedFilingSeparatelyDependenceTax(income, numDependents) {
    let taxBracket, accumulatedTax, taxableIncome, personalExemption, dependentExemption;

    // Calculate personal exemption
    if (income <= 16500) {
        personalExemption = 4375 * 2;
    } else if (income <= 19200) {
        personalExemption = 4135 * 2;
    } else if (income <= 21900) {
        personalExemption = 3895 * 2;
    } else if (income <= 24600) {
        personalExemption = 3655 * 2;
    } else if (income <= 27300) {
        personalExemption = 3415 * 2;
    } else if (income <= 30000) {
        personalExemption = 3175 * 2;
    } else {
        personalExemption = 3175 + ((income - 30000) * 0.1);
    }

    // Calculate dependent exemption
    if (numDependents === 0) {
        dependentExemption = 0;
    } else if (numDependents === 1) {
        dependentExemption = 2000;
    } else {
        dependentExemption = 2000 + (numDependents - 1) * 500;
    }

    // Calculate taxable income
    taxableIncome = income - personalExemption - dependentExemption;

    // Calculate tax
    if (taxableIncome <= 10200) {
        taxBracket = "0%";
        accumulatedTax = 0;
    } else if (taxableIncome <= 41425) {
        taxBracket = "10%";
        accumulatedTax = (taxableIncome - 10200) * 0.1;
    } else if (taxableIncome <= 101725) {
        taxBracket = "12%";
        accumulatedTax = 3122.50 + (taxableIncome - 41425) * 0.12;
    } else if (taxableIncome <= 182750) {
        taxBracket = "22%";
        accumulatedTax = 14382.50 + (taxableIncome - 101725) * 0.22;
    } else if (taxableIncome <= 326600) {
        taxBracket = "24%";
        accumulatedTax = 32748.50 + (taxableIncome - 182750) * 0.24;
    } else if (taxableIncome <= 414700) {
        taxBracket = "32%";
        accumulatedTax = 63258.50 + (taxableIncome - 326600) * 0.32;
    } else if (taxableIncome <= 622050) {
        taxBracket = "35%";
        accumulatedTax = 93258.50 + (taxableIncome - 414700) * 0.35;
    } else {
        taxBracket = "37%";
        accumulatedTax = 167307.50 + (taxableIncome - 622050) * 0.37;
    }

    return { taxBracket, accumulatedTax };
}