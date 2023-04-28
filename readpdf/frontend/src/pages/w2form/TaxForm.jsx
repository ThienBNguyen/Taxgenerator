import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import './taxForm.css'
import FileStatus from './FileStatus';
import TaxDisplay from '../../components/taxdisplay/TaxDisplay';
import ScheduleCFormSimple from '../scheduleC/ScheduleCFormSimple';
import ScheduleDFormSimple from '../scheduleD/ScheduleDFormSimple';
import ScheduleEFormSimple from '../scheduleE/ScheduleEFormSimple';
export default function TaxForm() {
    const [inputValue, setInputValue] = useState("");
    const [federalInputValue, setFederalInputValue] = useState("");
    const [inputValueError, setInputValueError] = useState(false);
    const [federalInputValueError, setFederalInputValueError] = useState(false);
    const [dataFromChildFileStatus, setDataFromChildFileStatus] = useState("");
    const dispatch = useDispatch();
    function handleDataFromChildFileStatus(data) {
        setDataFromChildFileStatus(data);
    }
    const handleUserWage = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (!isNaN(value)) {
            setInputValueError(false);
        } else {
            setInputValueError(true)
        }
    };
    const handleFederalInputChange = (event) => {
        const value = event.target.value;
        setFederalInputValue(value);
        if (!isNaN(value)) {
            setFederalInputValueError(false);
        } else {
            setFederalInputValueError(true)
        }
    };
    useEffect(() => {
        const options = { status: dataFromChildFileStatus, userWage: inputValue, federalInputValue: federalInputValue }
        dispatch({ type: 'CALCULATE_ACCUMULATED_TAX', payload: options });
    }, [dataFromChildFileStatus, dispatch, inputValue, federalInputValue]);

    return (

        <div className="container py-4">
            <div className='row'>
                <div className='col-sm-12 col-lg-7 bg-clear border-5  rounded p-3 shadow-lg '>
                    <div className=''>
                        <div >
                            <FileStatus onDataFromChildFileStatus={handleDataFromChildFileStatus} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <span>
                                    Enter your Gross Paid amount (YTD) or Form W-2 Box 1
                                </span>
                                <input type="text" value={inputValue} onChange={handleUserWage} placeholder="0" className={`w-100 rounder ${inputValueError ? 'is-invalid' : ''}`} />
                                {inputValueError && <div className='invalid-feedback'>Please Enter a valid number</div>}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <span>
                                    Enter your Federal Income Tax Withholding (YTD) or Form W-2 Box 5
                                </span>
                                <input type="text" value={federalInputValue} onChange={handleFederalInputChange} placeholder="0" className={`w-100 rounder ${federalInputValueError ? 'is-invalid' : ''}`} />
                                {federalInputValueError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                            </div>
                        </div>
                        <ScheduleCFormSimple />
                        <ScheduleDFormSimple />
                        <ScheduleEFormSimple />

                    </div>

                </div>
                <div className="d-block d-md-none mt-3"></div>

                <TaxDisplay />
            </div>



        </div>
    )
}
