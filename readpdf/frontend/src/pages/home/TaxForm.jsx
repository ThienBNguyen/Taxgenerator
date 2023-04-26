import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { setTaxBracket, setAccumulatedTax, calculateTaxThunk } from "../../redux/store/actions";
import './taxForm.css'
import FileStatus from './FileStatus';
import { calculateSingleTax, calculateHeadOfHouseholdTax, calculateMarriedFilingSeparatelyTax, calculateMarriedFilingJoinlyTax } from "../../services/TaxBracketCal";
// import TaxDisplay from '../../components/taxdisplay/TaxDisplay';
// import { calculateMarriedFilingSeparatelyDependenceTax } from "../services/TaxcalCulationWithDependency";
export default function TaxForm() {
    const [inputValue, setInputValue] = useState("");
    const [federalInputValue, setFederalInputValue] = useState("");
    const [taxBracket, setTaxBracket] = useState("");
    const [accumulatedTax, setAccumulatedTax] = useState(0);
    // const [otherTax, setOtherTax] = useState(0);
    const [totalTaxDue, setTotalTaxDue] = useState(0);
    const dependentCount = useSelector((state) => state.dependentCount);
    console.log(dependentCount.over17);
    // console.log(setOtherTax);
    // console.log(calculateMarriedFilingJoinlyTax);
    const [dataFromChild, setDataFromChild] = useState("");

    const dispatch = useDispatch();
    // const taxBracket = useSelector((state) => state.taxBracket);
    // const accumulatedTax = useSelector((state) => state.accumulatedTax);
    // const scheduleCTotal = useSelector((state) => state.sum.sum);
    // console.log(scheduleCTotal);
    function handleDataFromChild(data) {
        setDataFromChild(data);
    }

    let otherTax = 0
    let estimateTaxableIncome = 0;
    let Refund = 0;
    let standardDeductionValue = 0;
    let taxRate = 0
    let allDependentExemption = 0
    let standardDeduction = { "single": 12950, "head_of_household": 19400, "married_filing_jointly": 25900, "married_filing_separately": 12950, "Qualifying_widower": 25900 }
    const calculateDependentCredit = (numDependents, numDependentsOver17) => {
        let dependentExemptionOver17 = 0;
        let dependentExemption = 0
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
        allDependentExemption = dependentExemption + dependentExemptionOver17
        return allDependentExemption
    }


    calculateDependentCredit(dependentCount.under16, dependentCount.over17)
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFederalInputChange = (event) => {
        setFederalInputValue(event.target.value);
    };

    if (dataFromChild === "Single") {
        standardDeductionValue = standardDeduction.single
    }
    if (dataFromChild === "Head_of_Household") {
        standardDeductionValue = standardDeduction.head_of_household
    }
    if (dataFromChild === "Married_Filing_Jointly") {
        standardDeductionValue = standardDeduction.married_filing_jointly
    }
    if (dataFromChild === "Married_Filing_Separately") {
        standardDeductionValue = standardDeduction.married_filing_separately
        // standardDeductionValue = standardDeduction
    }
    estimateTaxableIncome = inputValue - standardDeductionValue
    taxRate = estimateTaxableIncome
    Refund = federalInputValue - accumulatedTax
    useEffect(() => {
        function calculateTax() {
            let result = { taxBracket: "", accumulatedTax: 0 };
            if (dataFromChild === "Single") {
                result = calculateSingleTax(estimateTaxableIncome);
            } else if (dataFromChild === "Head_of_Household") {
                result = calculateHeadOfHouseholdTax(estimateTaxableIncome);
            } else if (dataFromChild === "Married_Filing_Jointly") {
                result = calculateMarriedFilingJoinlyTax(estimateTaxableIncome);
                // result = calculateMarriedFilingSeparatelyDependenceTax(estimateTaxableIncome, dependentChildData)
            } else if (dataFromChild === "Married_Filing_Separately") {
                result = calculateMarriedFilingSeparatelyTax(estimateTaxableIncome);
            }
            setTaxBracket(result.taxBracket);
            setAccumulatedTax(result.accumulatedTax);
            // dispatch(calculateTaxThunk());
            // dispatch(setAccumulatedTax(result.accumulatedTax));
            let test = accumulatedTax + otherTax
            setTotalTaxDue(test)
        }
        calculateTax();

    }, [estimateTaxableIncome, dataFromChild, accumulatedTax, otherTax, dispatch]);

    return (

        <div className="container py-4">
            <div className='row'>
                <div className='col-sm-12 col-lg-7 bg-clear border-5  rounded p-3 shadow-lg '>
                    <div className=''>
                        <div >
                            <FileStatus onDataFromChild={handleDataFromChild} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <span>
                                    Enter your Gross Paid amount (YTD) or Form W-2 Box 1
                                </span>
                                <div>
                                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder="0" className='w-100 rounder' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <span>
                                    Enter your Federal Income Tax Withholding (YTD) or Form W-2 Box 5
                                </span>
                                <div>
                                    <input type="text" value={federalInputValue} onChange={handleFederalInputChange} placeholder="0" className='w-100 rounder ' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-block d-md-none mt-3"></div>
                <div className=' taxOuterPanel col-sm-12 col-lg-4 ms-lg-3 bg-clear border-2 rounded  p-3  shadow-lg text-center'>
                    <div className=' taxPanel ml-4 p-4' >
                        <h6>
                            Estimated Taxable Income:
                        </h6>
                        <h1 className=''>${taxRate.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
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
                        <h1> {allDependentExemption.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
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
                {/* <TaxDisplay /> */}
            </div>



        </div>
    )
}
