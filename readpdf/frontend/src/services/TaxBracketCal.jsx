export function calculateSingleTax(income, federalHolding) {
    let taxBracket, accumulatedTax;
    let taxableIncome = income
    let federalInputValue = federalHolding
    if (income <= 10276) {
        taxBracket = "10%";
        accumulatedTax = income * 0.1;
    } else if (income <= 41776) {
        taxBracket = "12%";
        accumulatedTax = 1027.60 + (income - 10276) * 0.12;
    } else if (income <= 89076) {
        taxBracket = "22%";
        accumulatedTax = 4807.60 + (income - 41776) * 0.22;
    } else if (income <= 170051) {
        taxBracket = "24%";
        accumulatedTax = 15213.60 + (income - 89076) * 0.24;
    } else if (income <= 215951) {
        taxBracket = "32%";
        accumulatedTax = 34647.60 + (income - 170051) * 0.32;
    } else if (income <= 539901) {
        taxBracket = "35%";
        accumulatedTax = 49335.60 + (income - 215951) * 0.35;
    } else {
        taxBracket = "37%";
        accumulatedTax = 162718.10 + (income - 539901) * 0.37;
    }
    return { taxBracket, accumulatedTax, taxableIncome, federalInputValue };
}
export function calculateHeadOfHouseholdTax(income, federalHolding) {
    let taxBracket, accumulatedTax;
    let taxableIncome = income
    let federalInputValue = federalHolding
    if (income <= 14651) {
        taxBracket = "10%";
        accumulatedTax = income * 0.1;
    } else if (income <= 55901) {
        taxBracket = "12%";
        accumulatedTax = 1465.10 + (income - 14651) * 0.12;
    } else if (income <= 89051) {
        taxBracket = "22%";
        accumulatedTax = 6415.10 + (income - 55901) * 0.22;
    } else if (income <= 170051) {
        taxBracket = "24%";
        accumulatedTax = 13708.10 + (income - 89051) * 0.24;
    } else if (income <= 215951) {
        taxBracket = "32%";
        accumulatedTax = 33148.10 + (income - 170051) * 0.32;
    } else if (income <= 539901) {
        taxBracket = "35%";
        accumulatedTax = 47836.10 + (income - 215951) * 0.35;
    } else {
        taxBracket = "37%";
        accumulatedTax = 161218.60 + (income - 539901) * 0.37;
    }
    return { taxBracket, accumulatedTax, taxableIncome, federalInputValue };
}
export function calculateMarriedFilingSeparatelyTax(income, federalHolding) {
    let taxBracket, accumulatedTax;
    let taxableIncome = income
    let federalInputValue = federalHolding
    if (income <= 10276) {
        taxBracket = "10%";
        accumulatedTax = income * 0.1;
    } else if (income <= 41776) {
        taxBracket = "12%";
        accumulatedTax = 1027.60 + (income - 10276) * 0.12;
    } else if (income <= 89076) {
        taxBracket = "22%";
        accumulatedTax = 4807.60 + (income - 41776) * 0.22;
    } else if (income <= 170051) {
        taxBracket = "24%";
        accumulatedTax = 15213.60 + (income - 89076) * 0.24;
    } else if (income <= 215951) {
        taxBracket = "32%";
        accumulatedTax = 34647.60 + (income - 170051) * 0.32;
    } else if (income <= 539901) {
        taxBracket = "35%";
        accumulatedTax = 49335.60 + (income - 215951) * 0.35;
    } else {
        taxBracket = "37%";
        accumulatedTax = 162718.10 + (income - 539901) * 0.37;
    }
    return { taxBracket, accumulatedTax, taxableIncome, federalInputValue };

}
export function calculateMarriedFilingJoinlyTax(income, federalHolding) {
    let taxBracket, accumulatedTax;
    let taxableIncome = income
    let federalInputValue = federalHolding
    if (income <= 20551) {
        taxBracket = "10%";
        accumulatedTax = income * 0.1;
    } else if (income <= 83551) {
        taxBracket = "12%";
        accumulatedTax = 2055.10 + (income - 20551) * 0.12;
    } else if (income <= 178151) {
        taxBracket = "22%";
        accumulatedTax = 9615.10 + (income - 83551) * 0.22;
    } else if (income <= 340101) {
        taxBracket = "24%";
        accumulatedTax = 30427.10 + (income - 178151) * 0.24;
    } else if (income <= 431901) {
        taxBracket = "32%";
        accumulatedTax = 69295.10 + (income - 340101) * 0.32;
    } else if (income <= 647851) {
        taxBracket = "35%";
        accumulatedTax = 98671.10 + (income - 431901) * 0.35;
    } else {
        taxBracket = "37%";
        accumulatedTax = 174253.60 + (income - 647851) * 0.37;
    }
    return { taxBracket, accumulatedTax, taxableIncome, federalInputValue };
}
// export function calculateMarriedFilingSeparatelyTax(income) {
//     const brackets = [10276, 41776, 89076, 170051, 215951, 539901];
//     const rates = [10, 12, 22, 24, 32, 35, 37];
//     return calculateTax(income, brackets, rates);
// }
export function calculateTax(income, brackets, rates) {
    let taxBracket, accumulatedTax;
    let bracketIndex = 0;
    for (let i = 0; i < brackets.length; i++) {
        if (income <= brackets[i]) {
            bracketIndex = i;
            break;
        }
    }
    taxBracket = `${rates[bracketIndex]}%`;
    accumulatedTax = 0;
    for (let i = 0; i < bracketIndex; i++) {
        accumulatedTax += (brackets[i + 1] - brackets[i]) * rates[i] * 0.01;
    }
    accumulatedTax += (income - brackets[bracketIndex]) * rates[bracketIndex] * 0.01;
    return { taxBracket, accumulatedTax };
}

//Schedule C total Revenue - total Expenses = net Profit 
//schedule E rental income
//schedule D long term gain or lost short term gain or lost 
//











