import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function ScheduleCFormSimple() {
    const [totalRevenue, setTotalRevenue] = useState("0")
    const [totalExpense, setTotalExpense] = useState("0")
    const [totalRevenueError, setTotalRevenueError] = useState("")
    const [totalExpenseError, setTotalExpenseError] = useState("")
    let netProfit = totalRevenue - totalExpense || 0
    // const exprenses = useSelector((state) => state.scheduleInput.totalExpense);
    // const revenue = useSelector((state) => state.scheduleInput.totalRevenue;
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
                Enter Your Business Income
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-4'>
                    <span>Total Revenue</span>
                    <br />
                    <input className={`w-100 rounder ${totalRevenueError ? 'is-invalid' : ''}`} type="text"
                        value={totalRevenue}
                        placeholder="0"
                        onChange={handleOptionTotalRevenue} onFocus={clearInput}/>
                    {totalRevenueError && <div className="invalid-feedback">Please enter a valid number.</div>}
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <span>Total Expenses</span>
                    <br />
                    <input className={`w-100 rounder ${totalExpenseError ? 'is-invalid' : ''}`} type="text"
                        value={totalExpense}
                        placeholder="0"
                        onChange={handleOptionTotalExpense} onFocus={clearInput}/>
                    {totalExpenseError && <div className="invalid-feedback">Please enter a valid number.</div>}

                </div>
                <div className='col-sm-12 col-lg-4 netProfitDisplay'>
                    <span>Net Profit/(Loss)</span>
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
