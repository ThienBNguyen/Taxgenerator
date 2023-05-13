import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LanguageContext from '../../services/LanguageContext'
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
    const longTermGainTax = Math.round(useSelector((state) => (state.longCapitalGain.longTaxGain)))
    const shortTermGainTax = Math.round(useSelector((state) => (state.shortCapitalGain.shortTaxGain)))
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
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const Shortterm = getTranslatedText('Short-term Capital Gains & Losses (Held less than 1 year)', 'Short-term Capital Gains & Losses (Held less than 1 year)');
    const TotalNetshortterm = getTranslatedText('Total Net short-term capital gain or (lost)', 'Total Net short-term capital gain or (lost)');
    const LongtermCapital = getTranslatedText('Long-term Capital Gains & Losses (Held more than 1 year)', 'Long-term Capital Gains & Losses (Held more than 1 year)')
    const shorttermcapitaltax = getTranslatedText('short-term capital tax', 'short-term capital tax');
    const TotalNetlongterm = getTranslatedText('Total Net long-term capital gain or (lost)', 'Total Net long-term capital gain or (lost)');
    const longtermcapitaltax = getTranslatedText('long-term capital tax', 'long-term capital tax');
    const Enteravalidnumber = getTranslatedText('Please Enter a valid number', 'Please Enter a valid number');
    return (

        <div>
            <h5 className='mb-2'>
                {Shortterm}
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>{TotalNetshortterm}</span>
                    <br />
                    <input className={`w-100 rounder ${ shortTermGainError ? 'is-invalid' : ''}`} type="text"
                        value={shortTermGain}
                        placeholder="0"
                        onChange={handleOptionShortTermGain} onFocus={clearInput}/>
                    {shortTermGainError && <div className='invalid-feedback'>{Enteravalidnumber}</div>}
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>{shorttermcapitaltax}</span>
                    <br />
                    {
                        <h4 className='text-danger'>$ {shortTermGainTax.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h4>}
                </div>
            </div>

            <h5 className='mb-2 mt-2'>
                {LongtermCapital}
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>{TotalNetlongterm}</span>
                    <br />
                    <input className={`w-100 rounder ${longTermGainError ? 'is-invalid' : ''}`} type="text"
                        value={longTermGain}
                        placeholder="0"
                        onChange={handleOptionLongTermGain} onFocus={clearInput}/>
                    { longTermGainError && <div className='invalid-feedback'>{Enteravalidnumber}</div>}
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>{longtermcapitaltax}</span>
                    <br />
                    {
                        <h4 className='text-danger'>$ {longTermGainTax.toLocaleString("en-US", { minimumFractionDigits: 0 })}</h4>}
                </div>
            </div>

        </div>


    )
}
