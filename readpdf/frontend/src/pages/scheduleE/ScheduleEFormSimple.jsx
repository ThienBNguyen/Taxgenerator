import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TaxDisplay from '../../components/taxdisplay/TaxDisplay';
export default function ScheduleEFormSimple() {
    const [under16, setUnder16] = useState("")
    const [over17, setOver17] = useState("")
    const dispatch = useDispatch();
    const handleOptionUnder16Change = (event) => {
        setUnder16(event.target.value);
        dispatch({ type: 'UPDATE_UNDER_16', payload: event.target.value })
    };
    const handleOptionOver17Change = (event) => {
        setOver17(event.target.value);
        dispatch({ type: 'UPDATE_OVER_17', payload: event.target.value })
    };
    return (
        <div className="container py-4">
            <div className='row'>
                <div className='col-sm-12 col-lg-7 bg-clear border-5  rounded p-3 shadow-lg '>
                    <h5 className='mb-2'>
                        Enter Your Rental Income
                    </h5>
                    <div className='row' >
                        <div className='col-sm-12 col-lg-6'>
                            <span>Rental Income Gain</span>
                            <br />
                            <input className='w-100 rounder' type="text"
                                value={under16}
                                placeholder="0"
                                onChange={handleOptionUnder16Change} />
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                            <span>Rental Income Lost</span>
                            <br />
                            <input className='w-100 rounder' type="text"
                                value={over17}
                                placeholder="0"
                                onChange={handleOptionOver17Change} />
                        </div>
                    </div>




                </div>
                <div className="d-block d-md-none mt-3"></div>
                <TaxDisplay />
            </div>
        </div >
    )
}
