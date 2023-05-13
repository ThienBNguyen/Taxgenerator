import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import LanguageContext from '../../services/LanguageContext'
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
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const RentalIncome = getTranslatedText('Enter Your Rental Income', 'Enter Your Rental Income');
    const Rental  = getTranslatedText('Rental Income', 'Rental Income');
    const RentalExpenses = getTranslatedText('Rental Expenses', 'Rental Expenses')
    const NetProfit = getTranslatedText('Net Profit/(Loss)', 'Net Profit/(Loss)');
    const Enteravalidnumber = getTranslatedText('Please Enter a valid number', 'Please Enter a valid number');
    return (
        <div>
            <h5 className='mb-2'>
                {RentalIncome}
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-4'>
                    <span>{Rental} </span>
                    <br />
                    <input className={`w-100 rounder ${rentalIncomeGainError ? 'is-invalid' : ''}`} type="text"
                        value={rentalIncomeGain}
                        placeholder="0"
                        onChange={handleOptionRentalIncomeGain} onFocus={clearInput}/>
                    {rentalIncomeGainError && <div className='invalid-feedback'>{Enteravalidnumber}</div>}
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <span>{RentalExpenses}</span>
                    <br />
                    <input className={`w-100 rounder ${rentalIncomeLostError ? 'is-invalid' : ''}`} type="text"
                        value={rentalIncomeLost}
                        placeholder="0"
                        onChange={handlerentalIncomeLost} onFocus={clearInput}/>
                    {rentalIncomeLostError && <div className='invalid-feedback'>{Enteravalidnumber}</div>}
                </div>
                <div className='col-sm-12 col-lg-4 netProfitDisplay'>
                    <span>{NetProfit}</span>
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
