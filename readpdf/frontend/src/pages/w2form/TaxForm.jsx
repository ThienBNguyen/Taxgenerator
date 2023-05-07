import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './taxForm.css'
import FileStatus from './FileStatus';
import TaxDisplay from '../../components/taxdisplay/TaxDisplay';
import ScheduleCFormSimple from '../scheduleC/ScheduleCFormSimple';
import ScheduleDFormSimple from '../scheduleD/ScheduleDFormSimple';
import ScheduleEFormSimple from '../scheduleE/ScheduleEFormSimple';
export default function TaxForm() {
    const [inputValue, setInputValue] = useState('0');
    const [federalInputValue, setFederalInputValue] = useState("0");
    const [totalEstimateTaxableIncome, setTotalEstimateTaxableIncome] = useState(0);
    const [inputValueError, setInputValueError] = useState(false);
    const [federalInputValueError, setFederalInputValueError] = useState(false);
    const [dataFromChildFileStatus, setDataFromChildFileStatus] = useState("0");
    const dispatch = useDispatch();
    const expenses = parseInt(useSelector((state) => state.scheduleInput.totalExpense));
    const revenue = parseInt(useSelector((state) => state.scheduleInput.totalRevenue));
    
    function handleDataFromChildFileStatus(data) {
        setDataFromChildFileStatus(data);
    }
    const handleUserWage = (event) => {
        const value = (event.target.value);
            setTotalEstimateTaxableIncome((value) + revenue - expenses)
        dispatch({ type: 'UPDATE_GROSS_INCOME', payload: value || 0  });
        setInputValue(value);
        if (!isNaN(value)) {
            setInputValueError(false);
        } else {
            setInputValueError(true)
        }
    };
    function clearInput() {
        if (inputValue === "0") {
            setInputValue("");
        }
        if (federalInputValueError === "0") {
            setDataFromChildFileStatus("");
        }
    }
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
        const options = { status: dataFromChildFileStatus, userWage: totalEstimateTaxableIncome, federalInputValue: federalInputValue }
        dispatch({ type: 'CALCULATE_ACCUMULATED_TAX', payload: options });
    }, [dataFromChildFileStatus, dispatch, totalEstimateTaxableIncome, federalInputValue]);

    return (

        <div className="container py-4">
            <div className='row'>
                <div className='col-sm-12 col-lg-7 bg-clear border-5  rounded p-3 shadow-lg '>
                    <div className=''>
                        <div className='block'>Filing Status & Dependents</div>

                        <div >
                            <FileStatus onDataFromChildFileStatus={handleDataFromChildFileStatus} />
                        </div>
                        <div className='block'>Income</div>

                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <span>
                                    Enter your Gross Pay (YTD) or Form W-2 Box 1
                                </span>
                                <input type="text" value={inputValue} onChange={handleUserWage} placeholder="0" className={`w-100 rounder ${inputValueError ? 'is-invalid' : ''}`} onFocus={clearInput} />
                                {inputValueError && <div className='invalid-feedback'>Please Enter a valid number</div>}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <span>
                                    Enter your Federal Income Tax Withholding (YTD) or Form W-2 Box 5
                                </span>
                                <input type="text" value={federalInputValue} onChange={handleFederalInputChange} placeholder="0" className={`w-100 rounder ${federalInputValueError ? 'is-invalid' : ''}`} onFocus={clearInput} />
                                {federalInputValueError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                            </div>
                        </div>
                        <div className='block'>Business Income</div>

                        <ScheduleCFormSimple />
                        <div className='block'>Investment Income</div>

                        <ScheduleDFormSimple />
                        <div className='block'>Rental Income</div>

                        <ScheduleEFormSimple />

                    </div>

                </div>
                <div className="d-block d-md-none mt-3"></div>

                <TaxDisplay />
            </div>



        </div>
    )
}
