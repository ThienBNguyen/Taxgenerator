import React, { useContext } from 'react'
// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { calculateDependentCredit } from '../../services/calculateDependency';
import LanguageContext from '../../services/LanguageContext';
export default function TaxDisplay(props) {
    const selfEmploymentTaxPercent = .1412955 
    let totalTaxDue = 0
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const TotalIncome = getTranslatedText('Total Income', 'Total Income');
    const AdjustmentToIncome = getTranslatedText('Adjustment To Income', 'Adjustment To Income');
    const EstimatedTaxableIncome = getTranslatedText('Estimated Taxable Income', 'Estimated Taxable Income')
    const OtherTaxes = getTranslatedText('Other Taxes', 'Other Taxes');
    const TotalTaxDue = getTranslatedText('Total Tax Due', 'Total Tax Due');

    const Credits = getTranslatedText('Credits', 'Credits');
    const RefundPayment = getTranslatedText('Refund/(Payment)', 'Refund/(Payment)');
    const TaxDue = getTranslatedText('Tax Due', 'Tax Due');
    const MarginalTaxRate = getTranslatedText('Marginal Tax Rate', 'Marginal Tax Rate');
    const dependentCount = useSelector((state) => state.dependentCount);
    const accumulatedTaxFromRedux = useSelector((state) => state.taxCalculate);
    const dependentCredit = calculateDependentCredit(dependentCount.under16, dependentCount.over17);
    let accumulatedTax = accumulatedTaxFromRedux.accumulatedTax;
    let Refund = accumulatedTaxFromRedux.federalInputValue - accumulatedTax
    let taxBracket = accumulatedTaxFromRedux.taxBracket || '0%';
    //calculate other tax with schedule C
    const totalExpenseFromReducer = useSelector((state) => state.scheduleInput.totalExpense);
    const totalExpense = totalExpenseFromReducer === "" ? 0 : parseInt(totalExpenseFromReducer);
    const totalRevenueFromReducer = useSelector((state) => state.scheduleInput.totalRevenue);
    const totalRevenue = totalRevenueFromReducer === "" ? 0 : parseInt(totalRevenueFromReducer);
    const longTermGainOrLossFromReducer = useSelector((state) => state.scheduleInput.longTermGainOrLoss)
    const longTermGainOrLoss = longTermGainOrLossFromReducer === "" ? 0 : parseInt(longTermGainOrLossFromReducer);
    const shortTermGainOrLossFromReducer = useSelector((state) => state.scheduleInput.shortTermGainOrLoss);
    const shortTermGainOrLoss = shortTermGainOrLossFromReducer === "" ? 0 : parseInt(shortTermGainOrLossFromReducer);
    const rentalIncomeFromReducer = useSelector((state) => state.scheduleInput.rentalIncome)
    const rentalIncome = rentalIncomeFromReducer === "" ? 0 : parseInt(rentalIncomeFromReducer);
    const rentalExpensesFromReducer = useSelector((state) => state.scheduleInput.rentalExpenses)
    const rentalExpenses = rentalExpensesFromReducer === "" ? 0 : parseInt(rentalExpensesFromReducer);
    const grossIncomeFromReducer = useSelector((state) => state.scheduleInput.grossIncome)  
    const grossIncome = grossIncomeFromReducer === "" ? 0 : parseInt(grossIncomeFromReducer);
    let otherTax = Math.round((totalRevenue - totalExpense) * selfEmploymentTaxPercent)
    let totalIncome = (totalRevenue) - (totalExpense) + (longTermGainOrLoss) + (shortTermGainOrLoss) + (rentalIncome) - (rentalExpenses) + (grossIncome) 
    let scheduleCNetProfit = parseInt(totalRevenue) - parseInt(totalExpense)
    let adjustToIncome = 0
  
  
    
    let estimateTaxableIncome = totalIncome-adjustToIncome
    let calculateQBIDeduction  = 0
    let calculateQBIDeductionWithScheduleCNetProfit = (scheduleCNetProfit - adjustToIncome) * .2 
    let calculateQBIDeductionWithEstimateTaxableIncome = (estimateTaxableIncome) * .2

    if (calculateQBIDeductionWithScheduleCNetProfit < calculateQBIDeductionWithEstimateTaxableIncome){
        calculateQBIDeduction = calculateQBIDeductionWithScheduleCNetProfit
    }
    if (calculateQBIDeductionWithScheduleCNetProfit > calculateQBIDeductionWithEstimateTaxableIncome){
        calculateQBIDeduction = calculateQBIDeductionWithEstimateTaxableIncome
    }
   let estimateTaxableIncomeFinal = totalIncome - adjustToIncome -calculateQBIDeduction
    if (scheduleCNetProfit <= 0) {
        otherTax = 0;
        adjustToIncome = 0;
    } else {
        adjustToIncome = otherTax / 2;
    }
    return (
        <div className=' taxOuterPanel col-sm-12 col-lg-4 ms-lg-3 bg-clear border-2 rounded  p-3  shadow-lg text-center'>
            <div className=' taxPanel ml-4 p-4' >
                <h6>
                   {TotalIncome}:
                </h6>
                <h1 className=''>${(totalIncome.toLocaleString("en-US", { minimumFractionDigits: 0 }))}</h1>
                <hr></hr>
                <h6>
                    {AdjustmentToIncome}
                </h6>
                <h1 className=''>${(adjustToIncome.toLocaleString("en-US", { minimumFractionDigits: 0 })) }</h1>
                <hr></hr>
                <h6>
                    {EstimatedTaxableIncome}
                </h6>
                <h1 className=''>${(estimateTaxableIncomeFinal.toLocaleString("en-US", { minimumFractionDigits: 0 })) }</h1>
                <hr></hr>
                <h6>{TaxDue}</h6>
                <h1> {accumulatedTax.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>{OtherTaxes}</h6>
                <h1> {otherTax.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>{TotalTaxDue}</h6>
                <h1> {totalTaxDue.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>{Credits}</h6>
                <h1> {dependentCredit.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>
                    {RefundPayment}
                </h6>

                {Refund < 0 ? (
                    <h1 className='text-danger'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                ) : (
                    <h1 className='text-success'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                )}
                <hr />
                <h6>{MarginalTaxRate}</h6>
                <h1>{taxBracket}</h1>
            </div>
        </div>
    )
}
