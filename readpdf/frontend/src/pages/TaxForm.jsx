import React, { useState, useEffect } from 'react'
import './taxForm.css'
import FileStatus from './FileStatus';
import { calculateSingleTax, calculateHeadOfHouseholdTax, calculateMarriedFilingSeparatelyTax, calculateMarriedFilingJoinlyTax } from "../services/TaxBracketCal";
export default function TaxForm() {
    const [inputValue, setInputValue] = useState("");
    // const [selectedHeadOption, setSelectedHeadOption] = useState("");
    // const [selectedOption, setSelectedOption] = useState("");
    // const [selectedMarialStatusOption, setSelectedMarialStatusOption] = useState("");
    const [federalInputValue, setFederalInputValue] = useState("");
    const [taxBracket, setTaxBracket] = useState("");
    const [accumulatedTax, setAccumulatedTax] = useState(0);
    const [dataFromChild, setDataFromChild] = useState("");
    function handleDataFromChild(data) {
        setDataFromChild(data);
    }
    // let standardDeductionValue = 0
    // let taxRate=0;
    let estimateTaxableIncome = 0;
    let Refund = 0;
    let standardDeductionValue = 0;
    let taxRate = 0
    // let standardDeduction = { "single": 13850, "head_of_household": 20800, "married_filing_jointly": 27700, "married_filing_separately": 13850, "Qualifying_widower": 27700 }
    // let taxBracket = { "single": 2932, "head_of_household": 2011, "married_filing_jointly": 1230, "married_filing_separately": 2932, "Qualifying_widower": 1230 }
    let standardDeduction = { "single": 12950, "head_of_household": 19400, "married_filing_jointly": 25900, "married_filing_separately": 12950, "Qualifying_widower": 25900 }


    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    // const handleHeadOptionChange = (event) => {
    //     setSelectedHeadOption(event.target.value);
    // };

    // const handleOptionMarialStatusChange = (event) => {
    //     setSelectedMarialStatusOption(event.target.value);
    // };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFederalInputChange = (event) => {
        setFederalInputValue(event.target.value);
    };
    // if (selectedMarialStatusOption === "Single") {
    //     standardDeductionValue = standardDeduction.single
    //     // taxRefund = taxBracket.single
    // } else if (selectedMarialStatusOption === "Married") {
    //     if (selectedHeadOption === "YesHead") {
    //         standardDeductionValue = standardDeduction.head_of_household
    //         // taxRefund = taxBracket.head_of_household
    //     }
    //     if (selectedOption === "YesJoint") {
    //         standardDeductionValue = standardDeduction.married_filing_jointly
    //         // taxRefund = taxBracket.married_filing_jointly
    //     }
    //     if (selectedOption === "NoJoint") {
    //         standardDeductionValue = standardDeduction.married_filing_separately
    //         // taxRefund = taxBracket.married_filing_separately
    //     }
    // }
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
            } else if (dataFromChild === "Married_Filing_Separately") {
                result = calculateMarriedFilingSeparatelyTax(estimateTaxableIncome);
            }
            setTaxBracket(result.taxBracket);
            setAccumulatedTax(result.accumulatedTax);
        }
        calculateTax();

    }, [estimateTaxableIncome, dataFromChild]);

    return (

        <div className="container w-75 mb-5">
            <div className='row'>
                <div className='col-8 bg-clear border-5 rounded p-3 m-3 shadow-lg'>
                    <div >
                        <FileStatus onDataFromChild={handleDataFromChild} />
                        {/* <span>
                            Will you file as single or married?
                        </span>
                        <div>
                            <input type="checkbox"
                                name="options"
                                value="Single"
                                checked={selectedMarialStatusOption === "Single"}
                                onChange={handleOptionMarialStatusChange} /> Single
                        </div>
                        <div>
                            <input type="checkbox"
                                name="options"
                                value="Married"
                                checked={selectedMarialStatusOption === "Married"}
                                onChange={handleOptionMarialStatusChange} /> Married

                        </div> */}
                    </div>
                    {/* {selectedMarialStatusOption === "Married" && (
                        <React.Fragment>
                            <div>
                                <span>
                                    If married, will you file the return jointly with your spouse?
                                </span>
                                <div>
                                    <input type="checkbox"
                                        name="options"
                                        value="YesJoint"
                                        checked={selectedOption === "YesJoint"}
                                        onChange={handleOptionChange} /> Yes
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name="options"
                                        value="NoJoint"
                                        checked={selectedOption === "NoJoint"}
                                        onChange={handleOptionChange} /> No

                                </div>
                            </div>
                            <div>
                                <span>
                                    Are you the head of household?
                                </span>
                                <div>
                                    <input type="checkbox"
                                        name="options"
                                        value="YesHead"
                                        checked={selectedHeadOption === "YesHead"}
                                        onChange={handleHeadOptionChange} /> Yes
                                </div>
                                <div>
                                    <input type="checkbox"
                                        name="options"
                                        value="NoHead"
                                        checked={selectedHeadOption === "NoHead"}
                                        onChange={handleHeadOptionChange} /> No

                                </div>
                            </div>
                        </React.Fragment>

                    )} */}
                    {/* for dependent */}
                    {/* <div >
                        <span>
                            Dependents
                        </span>
                        <div className='row' >
                            <div className='col-6'>
                                <span>Number of dependents</span>
                                <br />
                                <input className='w-100 rounder'
                                    type="text"
                                    name="options"
                                    value="0"
                                    checked={selectedMarialStatusOption === "Single"}
                                    onChange={handleOptionMarialStatusChange} />
                            </div>
                            <div className='col-6'>
                                <span>Under age 17</span>
                                <br />
                                <input className='w-100 rounder' type="text"
                                    name="options"
                                    value="0"
                                    checked={selectedMarialStatusOption === "Single"}
                                    onChange={handleOptionMarialStatusChange} />
                            </div>
                            <div className='col-6'>
                                <span>Full-time students age 17-23</span>
                                <br />
                                <input className='w-100 rounder' type="text"
                                    name="options"
                                    value="0"
                                    checked={selectedMarialStatusOption === "Single"}
                                    onChange={handleOptionMarialStatusChange} />
                            </div>
                        </div>

                    </div> */}
                    {/* tax and wage value */}
                    <div>
                        <div>
                            <span>
                                Enter your Gross Paid amount (YTD)
                            </span>
                            <div>
                                <input type="text" value={inputValue} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div>
                            <span>
                                Enter your Federal Income Tax Withholding (YTD)
                            </span>
                            <div>
                                <input type="text" value={federalInputValue} onChange={handleFederalInputChange} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' taxOuterPanel col bg-clear border-2 rounded  p-3 m-3 shadow-lg text-center'>
                    <div className=' taxPanel ml-4 p-4' >
                        <h6>
                            Estimated Taxable Income:
                        </h6>
                        <h1 className=''>${taxRate.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                        <hr></hr>

                        <h6>Total Tax Due</h6>
                        <h1> {accumulatedTax.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                        <hr />
                        <h6>
                            Refund/(Payment):
                        </h6>

                        {Refund < 0 ? (
                            <h1 className='text-danger'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                        ) : (
                            <h1 className='text-success'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1>
                        )}
                        {/* <h1 className='text-success'>$ {Refund.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h1> */}
                        <hr />
                        <h6>Marginal Tax Rate</h6>
                        <h1>{taxBracket}</h1>
                    </div>


                </div>
            </div>



            {/* {selectedMarialStatusOption}<br></br>

            {selectedOption}<br></br>
            {selectedHeadOption}<br></br>
            {standardDeductionValue} */}



        </div>
    )
}
