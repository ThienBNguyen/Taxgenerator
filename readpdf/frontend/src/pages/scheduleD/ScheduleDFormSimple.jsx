import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function ScheduleDFormSimple() {
    const [longTermGain, setLongTermGain] = useState("0")
    const [shortTermGain, setShortTermGain] = useState("0")
    const [longTermGainError, setLongTermGainError] = useState(false)
    const [shortTermGainError, setShortTermGainError] = useState(false)
    const dispatch = useDispatch();
    const handleOptionLongTermGain = (event) => {
        const value = event.target.value;
        setLongTermGain(value);
        if (!isNaN(value)) {
            setLongTermGainError(false);
            dispatch({ type: 'UPDATE_LONG_TERM_GAIN_LOSS', payload: value || 0 })
        } else {
            setLongTermGainError(true)
        }
    };
 
    const handleOptionShortTermGain = (event) => {
        const value = event.target.value;
        setShortTermGain(value);

        if (!isNaN(value)) {
            setShortTermGainError(false);
            dispatch({ type: 'UPDATE_SHORT_TERM_GAIN_LOSS', payload: value || 0 })
        } else {
            setShortTermGainError(true)
        }
    }
    function clearInput() {
        if (longTermGain === "0" ) {
            setLongTermGain("");
        }
        if (shortTermGain === "0") {
            setShortTermGain("");
        }
    }
    return (

        <div>
            <h5 className='mb-2'>
                Short-term Capital Gains & Losses (Held less than 1 year)
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Net short-term capital gain or (lost)</span>
                    <br />
                    <input className={`w-100 rounder ${ shortTermGainError ? 'is-invalid' : ''}`} type="text"
                        value={shortTermGain}
                        placeholder="0"
                        onChange={handleOptionShortTermGain} onFocus={clearInput}/>
                    {shortTermGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
            </div>

            <h5 className='mb-2 mt-2'>
                Long-term Capital Gains & Losses (Held more than 1 year)
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>Total Net long-term capital gain or (lost)</span>
                    <br />
                    <input className={`w-100 rounder ${longTermGainError ? 'is-invalid' : ''}`} type="text"
                        value={longTermGain}
                        placeholder="0"
                        onChange={handleOptionLongTermGain} onFocus={clearInput}/>
                    { longTermGainError && <div className='invalid-feedback'>Please Enter a valid number</div>}
                </div>
             
            </div>

        </div>


    )
}
