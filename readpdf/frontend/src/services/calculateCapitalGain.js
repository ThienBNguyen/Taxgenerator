//year 2022 
export const calculateLongTermCapitalGainsTax = (gain, taxableIncome = 0, filingStatus) => {
    let tax = 0;

 if (filingStatus === 'Single') {
    const lowerBracketLimit = 41675;
    const middleBracketLimit = 459750;

    const lowerBracketGain = Math.min(gain, lowerBracketLimit - taxableIncome);
    if (lowerBracketGain > 0) {
      gain -= lowerBracketGain;
    }

    const middleBracketGain = Math.min(gain, middleBracketLimit - taxableIncome);
    if (middleBracketGain > 0) {
      tax += middleBracketGain * 0.15;
      gain -= middleBracketGain;
    }

    if (gain > 0) {
      tax += gain * 0.20;
    }
  }
if (filingStatus === 'Married_Filing_Jointly') {
    const lowerBracketLimit = 83350;
    const middleBracketLimit = 517200;

    const lowerBracketGain = Math.min(gain, lowerBracketLimit - taxableIncome);
    if (lowerBracketGain > 0) {
      gain -= lowerBracketGain;
    }

    const middleBracketGain = Math.min(gain, middleBracketLimit - taxableIncome);
    if (middleBracketGain > 0) {
      tax += middleBracketGain * 0.15;
      gain -= middleBracketGain;
    }

    if (gain > 0) {
      tax += gain * 0.20;
    }
  }
  if (filingStatus === 'Married_Filing_Separately') {
    const lowerBracketLimit = 41675;
    const middleBracketLimit = 258600;

    const lowerBracketGain = Math.min(gain, lowerBracketLimit - taxableIncome);
    if (lowerBracketGain > 0) {
      gain -= lowerBracketGain;
    }

    const middleBracketGain = Math.min(gain, middleBracketLimit - taxableIncome);
    if (middleBracketGain > 0) {
      tax += middleBracketGain * 0.15;
      gain -= middleBracketGain;
    }

    if (gain > 0) {
      tax += gain * 0.20;
    }
  }
    if (filingStatus === 'Head_of_Household') {
    const lowerBracketLimit = 55800;
    const middleBracketLimit = 488500;

    const lowerBracketGain = Math.min(gain, lowerBracketLimit - taxableIncome);
    if (lowerBracketGain > 0) {
      gain -= lowerBracketGain;
    }

    const middleBracketGain = Math.min(gain, middleBracketLimit - taxableIncome);
    if (middleBracketGain > 0) {
      tax += middleBracketGain * 0.15;
      gain -= middleBracketGain;
    }

    if (gain > 0) {
      tax += gain * 0.20;
    }
  }
  return tax;


};
 export function calculateShortTermCapitalGainsTax(gain, taxableIncome = 0, filingStatus) {
    
  const taxBrackets = {
    Single: [
      { threshold: 10275, rate: 0.10 },
      { threshold: 41775, rate: 0.12 },
      { threshold: 89075, rate: 0.22 },
      { threshold: 170050, rate: 0.24 },
      { threshold: 215950, rate: 0.32 },
      { threshold: 539900, rate: 0.35 },
      { rate: 0.37 },
    ],
     Married_Filing_Jointly: [
      { threshold: 20550, rate: 0.10 },
      { threshold: 83550, rate: 0.12 },
      { threshold: 178150, rate: 0.22 },
      { threshold: 340100, rate: 0.24 },
      { threshold: 431900, rate: 0.32 },
      { threshold: 647850, rate: 0.35 },
      { rate: 0.37 },
    ],
    Married_Filing_Separately: [
      { threshold: 14650, rate: 0.10 },
      { threshold: 55900, rate: 0.12 },
      { threshold: 89050, rate: 0.22 },
      { threshold: 170050, rate: 0.24 },
      { threshold: 215950, rate: 0.32 },
      { threshold: 539900, rate: 0.35 },
      { rate: 0.37 },
    ],
     Head_of_Household: [
      { threshold: 10275, rate: 0.10 },
      { threshold: 41775, rate: 0.12 },
      { threshold: 89075, rate: 0.22 },
      { threshold: 170070, rate: 0.24 },
      { threshold: 215950, rate: 0.32 },
      { threshold: 539900, rate: 0.35 },
      { rate: 0.37 },
    ],
  };
 if (!filingStatus || !taxBrackets[filingStatus]) {
    return 0; // return 0 or another default value, as appropriate for your use case
  }
  const brackets = taxBrackets[filingStatus];
  let remainingGain = gain;
  let tax = 0;

  for (const bracket of brackets) {
    if (remainingGain === 0) break;

    const taxableAmount = bracket.threshold
      ? Math.min(bracket.threshold - taxableIncome, remainingGain)
      : remainingGain;

    tax += taxableAmount * bracket.rate;
    remainingGain -= taxableAmount;
    taxableIncome += taxableAmount;
  }

  return tax;
}
