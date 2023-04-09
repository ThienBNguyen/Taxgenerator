import React, { useState } from 'react'

export default function TaxForm() {
    const [inputValue, setInputValue] = useState("");
    const [selectedHeadOption, setSelectedHeadOption] = useState("");
    let standardDeductionValue = 0
    let taxRefund = 0
    let standardDeduction = { "single": 13850, "head_of_household": 20800, "married_filing_jointly": 27700, "married_filing_separately": 13850, "Qualifying_widower": 27700 }
    let taxBracket = { "single": 2932, "head_of_household": 2011, "married_filing_jointly": 1230, "married_filing_separately": 2932, "Qualifying_widower": 1230 }
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleHeadOptionChange = (event) => {
        setSelectedHeadOption(event.target.value);
    };
    const [selectedMarialStatusOption, setSelectedMarialStatusOption] = useState("");

    const handleOptionMarialStatusChange = (event) => {
        setSelectedMarialStatusOption(event.target.value);
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const [federalInputValue, setFederalInputValue] = useState("");

    const handleFederalInputChange = (event) => {
        setFederalInputValue(event.target.value);
    };
    if (selectedMarialStatusOption === "Single") {
        standardDeductionValue = standardDeduction.single
        taxRefund = taxBracket.single
    } else if (selectedMarialStatusOption === "Married") {
        if (selectedHeadOption === "YesHead") {
            standardDeductionValue = standardDeduction.head_of_household
            taxRefund = taxBracket.head_of_household
        }
        if (selectedOption === "YesJoint") {
            standardDeductionValue = standardDeduction.married_filing_jointly
            taxRefund = taxBracket.married_filing_jointly
        }
        if (selectedOption === "NoJoint") {
            standardDeductionValue = standardDeduction.married_filing_separately
            taxRefund = taxBracket.married_filing_separately
        }
    }
    // if (selectedHeadOption === "YesHead") {
    //     standardDeductionValue = standardDeduction.head_of_household
    // }
    // if (selectedHeadOption === "NoHead") {
    //     if (selectedMarialStatusOption === "Single") {
    //         standardDeductionValue = standardDeduction.single
    //     }
    //     if (selectedMarialStatusOption === "Married") {

    //     }
    // }
    let estimateTaxableIncome = inputValue - standardDeductionValue
    let taxRate = estimateTaxableIncome
    let Refund = federalInputValue - taxRefund
    return (

        <div>
            <div>
                <span>
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

                </div>
            </div>

            {selectedMarialStatusOption === "Married" && (
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

            )}

            <div>
                <div>
                    <span>
                        Enter your annual earned income (An estimate is ok)
                    </span>
                    <div>
                        <input type="text" value={inputValue} onChange={handleInputChange} />
                    </div>
                </div>
                <div>
                    <span>
                        Federal Income Tax Withhold (YTD)
                    </span>
                    <div>
                        <input type="text" value={federalInputValue} onChange={handleFederalInputChange} />
                    </div>

                </div>
            </div>
            {/* {selectedMarialStatusOption}<br></br>

            {selectedOption}<br></br>
            {selectedHeadOption}<br></br>
            {standardDeductionValue} */}
            <h3>
                Estimated Taxable Income: {taxRate}
            </h3>
            <h3>
                Refund: {Refund}
            </h3>

        </div>
    )
}
