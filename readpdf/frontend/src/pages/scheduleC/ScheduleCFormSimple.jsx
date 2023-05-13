import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import LanguageContext from '../../services/LanguageContext'
export default function ScheduleCFormSimple() {
    const [totalRevenue, setTotalRevenue] = useState("0")
    const [totalExpense, setTotalExpense] = useState("0")
    const [totalRevenueError, setTotalRevenueError] = useState("")
    const [totalExpenseError, setTotalExpenseError] = useState("")
    let netProfit = totalRevenue - totalExpense || 0
    // const exprenses = useSelector((state) => state.scheduleInput.totalExpense);
    // const revenue = useSelector((state) => state.scheduleInput.totalRevenue;
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const EnterYourBusinessIncome = getTranslatedText('Enter Your Business Income', 'Enter Your Business Income');
    const TotalRevenue = getTranslatedText('Total Revenue', 'Total Revenue');
    const TotalExpenses = getTranslatedText('Total Expenses', 'Total Expenses')
    const NetProfit = getTranslatedText('Net Profit/(Loss)', 'Net Profit/(Loss)');
    const Enteravalidnumber = getTranslatedText('Please Enter a valid number', 'Please Enter a valid number');
    const dispatch = useDispatch();
    const handleOptionTotalRevenue = (event) => {
        const value = event.target.value;
        setTotalRevenue(value);
        if (!isNaN(value)) {
            setTotalRevenueError(false);
            dispatch({ type: 'UPDATE_TOTAL_REVENUE', payload: value || 0 })
        } else {
            setTotalRevenueError(true)
        }
    };
    const handleOptionTotalExpense = (event) => {
        const value = event.target.value;
        setTotalExpense(value);
        if (!isNaN(value)) {
            setTotalExpenseError(false);
            dispatch({ type: 'UPDATE_TOTAL_EXPENSE', payload: value || 0 })
        } else {
            setTotalExpenseError(true)
        }
    };
    function clearInput() {
        if (totalRevenue === "0") {
            setTotalRevenue("");
        }
        if (totalExpense === "0") {
            setTotalExpense("");
        }
    }
    return (
        <div>
            <h5 className='mb-2'>
                {EnterYourBusinessIncome}
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-4'>
                    <span>{TotalRevenue}</span>
                    <br />
                    <input className={`w-100 rounder ${totalRevenueError ? 'is-invalid' : ''}`} type="text"
                        value={totalRevenue}
                        placeholder="0"
                        onChange={handleOptionTotalRevenue} onFocus={clearInput}/>
                    {totalRevenueError && <div className="invalid-feedback">{Enteravalidnumber}</div>}
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <span>{TotalExpenses}</span>
                    <br />
                    <input className={`w-100 rounder ${totalExpenseError ? 'is-invalid' : ''}`} type="text"
                        value={totalExpense}
                        placeholder="0"
                        onChange={handleOptionTotalExpense} onFocus={clearInput}/>
                    {totalExpenseError && <div className="invalid-feedback">{Enteravalidnumber}</div>}

                </div>
                <div className='col-sm-12 col-lg-4 netProfitDisplay'>
                    <span>{NetProfit}</span>
                    <br />
                   {netProfit < 0 ? (
                        <h4 className='text-danger'>$ {netProfit.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h4>
                    ) : (
                        <h4 className='text-success'>$ {netProfit.toLocaleString("en-US", { minimumFractionDigits: 2 })}</h4>
                    )}
                </div>
                
            </div>
        </div >



    )
}
