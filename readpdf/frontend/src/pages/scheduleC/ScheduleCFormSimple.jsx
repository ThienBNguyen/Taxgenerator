import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function ScheduleCFormSimple() {
    const [totalRevenue, setTotalRevenue] = useState("")
    const [totalExpense, setTotalExpense] = useState("")
    const [totalRevenueError, setTotalRevenueError] = useState("")
    const [totalExpenseError, setTotalExpenseError] = useState("")
    const dispatch = useDispatch();
    const handleOptionTotalRevenue = (event) => {
        const value = event.target.value;
        setTotalRevenue(value);
        if (!isNaN(value)) {
            setTotalRevenueError(false);
            dispatch({ type: 'UPDATE_TOTAL_REVENUE', payload: value })
        } else {
            setTotalRevenueError(true)
        }
    };
    const handleOptionTotalExpense = (event) => {
        const value = event.target.value;
        setTotalExpense(value);
        if (!isNaN(value)) {
            setTotalExpenseError(false);
            dispatch({ type: 'UPDATE_TOTAL_EXPENSE', payload: value })
        } else {
            setTotalExpenseError(true)
        }
    };
    return (
        <div>
            <h5 className='mb-2'>
                Enter Your Revenue
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Revenue</span>
                    <br />
                    <input className={`w-100 rounder ${totalRevenueError ? 'is-invalid' : ''}`} type="text"
                        value={totalRevenue}
                        placeholder="0"
                        onChange={handleOptionTotalRevenue} />
                    {totalRevenueError && <div className="invalid-feedback">Please enter a valid number.</div>}
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Expenses</span>
                    <br />
                    <input className={`w-100 rounder ${totalExpenseError ? 'is-invalid' : ''}`} type="text"
                        value={totalExpense}
                        placeholder="0"
                        onChange={handleOptionTotalExpense} />
                    {totalExpenseError && <div className="invalid-feedback">Please enter a valid number.</div>}
                </div>
            </div>
        </div >



    )
}
