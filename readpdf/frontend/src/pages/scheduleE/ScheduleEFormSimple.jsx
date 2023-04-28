import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function ScheduleEFormSimple() {
    const [rentalIncomeGain, setRentalIncomeGain] = useState("")
    const [rentalIncomeLost, setRentalIncomeLost] = useState("")
    const [rentalIncomeGainError, setRentalIncomeGainError] = useState(false)
    const [rentalIncomeLostError, setRentalIncomeLostError] = useState(false)
    const dispatch = useDispatch();
    const handleOptionRentalIncomeGain = (event) => {
        const value = event.target.value;
        setRentalIncomeGain(value);

        if (!isNaN(value)) {
            setRentalIncomeGainError(false);
            dispatch({ type: 'UPDATE_RENTAL_INCOME_GAIN', payload: value })
        } else {
            setRentalIncomeGainError(true)
        }
    };
    const handlerentalIncomeLost = (event) => {
        const value = event.target.value;
        setRentalIncomeLost(value);
        if (!isNaN(value)) {
            setRentalIncomeLostError(false);
            dispatch({ type: 'UPDATE_RENTAL_INCOME_LOST', payload: value })
        } else {
            setRentalIncomeLostError(true)
        }
    };
    return (
        <div>
            <h5 className='mb-2'>
                Enter Your Rental Income
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Rental Income Gain</span>
                    <br />
                    <input className={`w-100 rounder ${rentalIncomeGainError ? 'is-invalid' : ''}`} type="text"
                        value={rentalIncomeGain}
                        placeholder="0"
                        onChange={handleOptionRentalIncomeGain} />
                    {rentalIncomeGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>Rental Income Lost</span>
                    <br />
                    <input className={`w-100 rounder ${rentalIncomeLostError ? 'is-invalid' : ''}`} type="text"
                        value={rentalIncomeLost}
                        placeholder="0"
                        onChange={handlerentalIncomeLost} />
                    {rentalIncomeLostError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
            </div>
        </div>

    )
}
