import React from 'react'
// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { calculateDependentCredit } from '../../services/calculateDependency';
export default function TaxDisplay() {
    const dependentCount = useSelector((state) => state.dependentCount);
    const accumulatedTaxFromRedux = useSelector((state) => state.taxCalculate);
    const dependentCredit = calculateDependentCredit(dependentCount.under16, dependentCount.over17);
    let taxableIncome = 0
    let accumulatedTax = accumulatedTaxFromRedux.accumulatedTax;
    taxableIncome = accumulatedTaxFromRedux.taxableIncome
    let Refund = accumulatedTaxFromRedux.federalInputValue - accumulatedTax
    let taxBracket = accumulatedTaxFromRedux.taxBracket;
    let totalTaxDue = 0
    let otherTax = 0
    return (
        <div className=' taxOuterPanel col-sm-12 col-lg-4 ms-lg-3 bg-clear border-2 rounded  p-3  shadow-lg text-center'>
            <div className=' taxPanel ml-4 p-4' >
                <h6>
                    Estimated Taxable Income:
                </h6>
                <h1 className=''>${taxableIncome.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                <hr></hr>
                <h6>Tax Due</h6>
                <h1> {accumulatedTax.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                <hr />
                <h6>Other Taxes</h6>
                <h1> {otherTax.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                <hr />
                <h6>Total Tax Due</h6>
                <h1> {totalTaxDue.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                <hr />
                <h6>Credits</h6>
                <h1> {dependentCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                <hr />
                <h6>
                    Refund/(Payment):
                </h6>

                {Refund < 0 ? (
                    <h1 className='text-danger'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                ) : (
                    <h1 className='text-success'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                )}
                <hr />
                <h6>Marginal Tax Rate</h6>
                <h1>{taxBracket}</h1>
            </div>
        </div>
    )
}
