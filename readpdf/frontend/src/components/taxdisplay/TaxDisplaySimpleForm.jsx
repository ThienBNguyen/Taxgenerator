import React, { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../services/LanguageContext';
import { useSelector } from 'react-redux';
import _ from 'lodash';
export default function TaxDisplaySimpleForm() {
    const { currentLanguage, translateText } = useContext(LanguageContext);
    const [visibility, setVisibility] = useState('visible');
    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };
    const RefundPayment = getTranslatedText('Refund/(Payment)', 'Refund/(Payment)');

    const accumulatedTaxFromRedux = useSelector((state) => state.taxCalculate);
    let accumulatedTax = accumulatedTaxFromRedux.accumulatedTax;
    let Refund = accumulatedTaxFromRedux.federalInputValue - accumulatedTax;

    const checkScrollPosition = _.throttle(() => {
        const scrollThreshold = 1520;
        if (window.scrollY > scrollThreshold) {
            setVisibility('hidden');  
        } else {
            setVisibility('visible'); 
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, [checkScrollPosition]);



    return (
        <div style={{ visibility: visibility }} className='TaxDisplaySimpleForm taxOuterPanel col-sm-12 col-lg-4 ms-lg-3 bg-clear border-2 rounded p-3 shadow-lg text-center mt-3'>
            <div className=' taxPanel d-flex align-items-center'>
                <span className='my-2 mx-2 '>
                    {RefundPayment}: {Refund < 0 ? (
                        <span className='text-danger font-weight-bold'>${Refund.toLocaleString("en-US", { minimumFractionDigits: 0 })}</span>
                    ) : (
                        <span className='text-success font-weight-bold'>${Refund.toLocaleString("en-US", { minimumFractionDigits: 0 })}</span>
                    )}
                </span>
            </div>
        </div>
    );
}