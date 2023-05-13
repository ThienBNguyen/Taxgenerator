import React, { useContext } from 'react'
import './about.css'
import LanguageContext from '../../services/LanguageContext';
export default function About() {
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const CALCULATORTEXT = getTranslatedText('TAX REFUND CALCULATOR', 'TAX REFUND CALCULATOR');
    const ESTIMATETEXT = getTranslatedText('Estimate your refund', 'Estimate your refund');
    const ABOUTSTATEMENTTEXT = getTranslatedText('Use our free tax calculator to get an estimate of what you’ll get back or owe this year.', 'Use our free tax calculator to get an estimate of what you’ll get back or owe this year.')
    const ABOUTTEXT = getTranslatedText('Enter your info to get started.', 'Enter your info to get started.');
    return (
        <div style={{ background: "linear-gradient(135deg,#0097e6,#0077c5)" }} className='about pt-5 pb-5 text-white text-center bg-dark '>

            <h5>{CALCULATORTEXT}</h5>
            <h2>
                {ESTIMATETEXT}
            </h2>
            <p>{ABOUTSTATEMENTTEXT} {ABOUTTEXT}</p>

        </div>
    )
}
