import React from 'react'
// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { calculateDependentCredit } from '../../services/calculateDependency';
export default function TaxDisplay(props) {
    const selfEmploymentTaxPercent = .1412955 

    const dependentCount = useSelector((state) => state.dependentCount);
    const accumulatedTaxFromRedux = useSelector((state) => state.taxCalculate);
    const dependentCredit = calculateDependentCredit(dependentCount.under16, dependentCount.over17);
    // let taxableIncome = 0
    let accumulatedTax = accumulatedTaxFromRedux.accumulatedTax;
    // taxableIncome = accumulatedTaxFromRedux.taxableIncome
    // console.log(taxableIncome);
    let Refund = accumulatedTaxFromRedux.federalInputValue - accumulatedTax
    let taxBracket = accumulatedTaxFromRedux.taxBracket || '0%';
    //calculate other tax with schedule C
    let totalTaxDue = 0
    const totalExpense = useSelector((state) => state.scheduleInput.totalExpense);
    const totalRevenue = useSelector((state) => state.scheduleInput.totalRevenue);
    const longTermGainOrLoss = useSelector((state) => state.scheduleInput.longTermGainOrLoss);
    const shortTermGainOrLoss = useSelector((state) => state.scheduleInput.shortTermGainOrLoss);
    const rentalIncome = useSelector((state) => state.scheduleInput.rentalIncome);
    const rentalExpenses = useSelector((state) => state.scheduleInput.rentalExpenses);
    const grossIncome = useSelector((state) => state.scheduleInput.grossIncome);
    let otherTax = Math.round((totalRevenue - totalExpense) * selfEmploymentTaxPercent)
    let totalIncome = parseInt(totalRevenue) - parseInt(totalExpense) + parseInt(longTermGainOrLoss) + parseInt(shortTermGainOrLoss) + parseInt(rentalIncome) - parseInt(rentalExpenses) + parseInt(grossIncome) 
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
                    Total Income:
                </h6>
                <h1 className=''>${Math.round(totalIncome.toLocaleString("en-US", { minimumFractionDigits: 0 })) || 0}</h1>
                <hr></hr>
                <h6>
                    Adjustment To Income:
                </h6>
                <h1 className=''>${Math.round(adjustToIncome.toLocaleString("en-US", { minimumFractionDigits: 0 })) || 0}</h1>
                <hr></hr>
                <h6>
                    Estimated Taxable Income:
                </h6>
                <h1 className=''>${Math.round(estimateTaxableIncomeFinal.toLocaleString("en-US", { minimumFractionDigits: 0 })) || 0}</h1>
                <hr></hr>
                <h6>Tax Due</h6>
                <h1> {accumulatedTax.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>Other Taxes</h6>
                <h1> {otherTax.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>Total Tax Due</h6>
                <h1> {totalTaxDue.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>Credits</h6>
                <h1> {dependentCredit.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                <hr />
                <h6>
                    Refund/(Payment):
                </h6>

                {Refund < 0 ? (
                    <h1 className='text-danger'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                ) : (
                    <h1 className='text-success'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h1>
                )}
                <hr />
                <h6>Marginal Tax Rate</h6>
                <h1>{taxBracket}</h1>
            </div>
        </div>
    )
}
