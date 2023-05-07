import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function ScheduleEFormSimple() {
    const [rentalIncomeGain, setRentalIncomeGain] = useState("0")
    const [rentalIncomeLost, setRentalIncomeLost] = useState("0")
    const [rentalIncomeGainError, setRentalIncomeGainError] = useState(false)
    const [rentalIncomeLostError, setRentalIncomeLostError] = useState(false)
    const netProfit = rentalIncomeGain - rentalIncomeLost
    const dispatch = useDispatch();
    const handleOptionRentalIncomeGain = (event) => {
        const value = event.target.value;
        setRentalIncomeGain(value);
        if (!isNaN(value)) {
            setRentalIncomeGainError(false);
            dispatch({ type: 'UPDATE_RENTAL_INCOME_GAIN', payload: value || 0 })
        } else {
            setRentalIncomeGainError(true)
        }
    };
    const handlerentalIncomeLost = (event) => {
        const value = event.target.value;
        setRentalIncomeLost(value);
        if (!isNaN(value)) {
            setRentalIncomeLostError(false);
            dispatch({ type: 'UPDATE_RENTAL_INCOME_LOST', payload: value || 0 })
        } else {
            setRentalIncomeLostError(true)
        }
    };
    function clearInput() {
        if (rentalIncomeGain === "0") {
            setRentalIncomeGain("");
        }
        if (rentalIncomeLost === "0") {
            setRentalIncomeLost("");
        }
    }
    return (
        <div>
            <h5 className='mb-2'>
                Enter Your Rental Income
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-4'>
                    <span>Rental Income</span>
                    <br />
                    <input className={`w-100 rounder ${rentalIncomeGainError ? 'is-invalid' : ''}`} type="text"
                        value={rentalIncomeGain}
                        placeholder="0"
                        onChange={handleOptionRentalIncomeGain} onFocus={clearInput}/>
                    {rentalIncomeGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <span>Rental Expenses</span>
                    <br />
                    <input className={`w-100 rounder ${rentalIncomeLostError ? 'is-invalid' : ''}`} type="text"
                        value={rentalIncomeLost}
                        placeholder="0"
                        onChange={handlerentalIncomeLost} onFocus={clearInput}/>
                    {rentalIncomeLostError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
                <div className='col-sm-12 col-lg-4 netProfitDisplay'>
                    <span>Net Profit/(Loss)</span>
                    <br />
                    {netProfit < 0 ? (
                        <h4 className='text-danger'>$ {netProfit.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h4>
                    ) : (
                        <h4 className='text-success'>$ {netProfit.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h4>
                    )}
                </div>
            </div>
        </div>

    )
}
