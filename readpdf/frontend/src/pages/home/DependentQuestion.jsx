import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function DependentQuestion() {
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
        <div><div >
            <h5 className='mb-2'>
                Enter number of Dependents
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Under Age of 17</span>
                    <br />
                    <input className='w-100 rounder' type="text"
                        value={under16}
                        placeholder="0"
                        onChange={handleOptionUnder16Change} />
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>Full-time students age 17-23 or Other Dependent</span>
                    <br />
                    <input className='w-100 rounder' type="text"
                        value={over17}
                        placeholder="0"
                        onChange={handleOptionOver17Change} />
                </div>

            </div>

        </div></div>
    )
}
