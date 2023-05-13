import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import LanguageContext from '../../services/LanguageContext';
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
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const EnternumberofDependents = getTranslatedText('Enter number of Dependents', ' Enter number of Dependents');
    const UnderAgeof17 = getTranslatedText('Under Age of 17', 'Under Age of 17');
    const Fulltimestudents = getTranslatedText('Full-time students age 17-23 or Other Dependent', 'Full-time students age 17-23 or Other Dependent')

    return (
        <div>
            <h5 className='mb-2'>
                {EnternumberofDependents}
            </h5>
            <div className='row' >
                <div className='col-sm-12 col-lg-6'>
                    <span>{UnderAgeof17}</span>
                    <br />
                    <input className='w-100 rounder' type="text"
                        value={under16}
                        placeholder="0"
                        onChange={handleOptionUnder16Change} />
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <span>{Fulltimestudents}</span>
                    <br />
                    <input className='w-100 rounder' type="text"
                        value={over17}
                        placeholder="0"
                        onChange={handleOptionOver17Change} />
                </div>

            </div>

        </div>
    )
}
