import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function ScheduleDFormSimple() {
    const [longTermGain, setLongTermGain] = useState("")
    const [shortTermGain, setShortTermGain] = useState("")
    const [longTermLost, setLongTermLost] = useState("")
    const [shortTermLost, setShortTermLost] = useState("")
    const [longTermGainError, setLongTermGainError] = useState(false)
    const [shortTermGainError, setShortTermGainError] = useState(false)
    const [longTermLostError, setLongTermLostError] = useState(false)
    const [shortTermLostError, setShortTermLostError] = useState(false)
    const dispatch = useDispatch();
    const handleOptionLongTermGain = (event) => {
        const value = event.target.value;
        setLongTermGain(value);
        if (!isNaN(value)) {
            setLongTermGainError(false);
            dispatch({ type: 'UPDATE_LONG_TERM_GAIN', payload: value })
        } else {
            setLongTermGainError(true)
        }
    };
    const handleOptionLongTermLost = (event) => {
        const value = event.target.value;
        setLongTermLost(value);

        if (!isNaN(value)) {
            setLongTermLostError(false);
            dispatch({ type: 'UPDATE_LONG_TERM_LOST', payload: value })
        } else {
            setLongTermLostError(true)
        }
    };
    const handleOptionShortTermGain = (event) => {
        const value = event.target.value;
        setShortTermGain(value);

        if (!isNaN(value)) {
            setShortTermGainError(false);
            dispatch({ type: 'UPDATE_SHORT_TERM_GAIN', payload: value })
        } else {
            setShortTermGainError(true)
        }
    }
    const handleOptionShortTermLost = (event) => {
        const value = event.target.value;
        setShortTermLost(value);
        if (!isNaN(value)) {
            dispatch({ type: 'UPDATE_SHORT_TERM_LOST', payload: value })

            setShortTermLostError(false);
        } else {
            setShortTermLostError(true)
        }
    }
    return (

        <div>
            <h5 className='mb-2'>
                Enter Long Term and Short Term Gain or Lost
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Long Term Gain</span>
                    <br />
                    <input className={`w-100 rounder ${longTermGainError ? 'is-invalid' : ''}`} type="text"
                        value={longTermGain}
                        placeholder="0"
                        onChange={handleOptionLongTermGain} />
                    {longTermGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Long Term Lost</span>
                    <br />
                    <input className={`w-100 rounder ${longTermLostError ? 'is-invalid' : ''}`} type="text"
                        value={longTermLost}
                        placeholder="0"
                        onChange={handleOptionLongTermLost} />
                    {longTermLostError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
            </div>

            <h5 className='mb-2 mt-2'>
                Enter Term Gain or Lost
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Short Term Gain</span>
                    <br />
                    <input className={`w-100 rounder ${shortTermGainError ? 'is-invalid' : ''}`} type="text"
                        value={shortTermGain}
                        placeholder="0"
                        onChange={handleOptionShortTermGain} />
                    {shortTermGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Short Term Lost</span>
                    <br />
                    <input className={`w-100 rounder ${shortTermLostError ? 'is-invalid' : ''}`} type="text"
                        value={shortTermLost}
                        placeholder="0"
                        onChange={handleOptionShortTermLost} />
                    {shortTermGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
            </div>

        </div>


    )
}
