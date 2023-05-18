import React, { useContext, useState,  } from 'react'
import ClarifyStatus from './ClarifyStatus';
import LanguageContext from '../../services/LanguageContext';

export default function FileStatus(props) {
    const [selectedFillingStatusOption, setSelectedFillingStatusOption] = useState("");
    const [marriedStatus, setMarriedStatus] = useState('');
    const [fileWithPartner, setFileWithPartner] = useState('');
    const [hasDependents, setHasDependents] = useState('');
    const handleOptionFillingStatusChange = (event) => {
        setSelectedFillingStatusOption(event.target.value);
        props.onDataFromChildFileStatus(event.target.value)
    }; 
 
    const handleChildData = (childData) => {
        const updatedMarriedStatus = childData.startsWith('yesMarried') || childData.startsWith('noMarried') ? childData : marriedStatus;
        const updatedFileWithPartner = childData.startsWith('yesMarriedJointly') || childData.startsWith('noMarriedJointly') ? childData : fileWithPartner;
        const updatedHasDependents = childData.startsWith('yesDoYouHaveAnyDependent') || childData.startsWith('noDoYouHaveAnyDependent') ? childData : hasDependents;

     const childDataMapping = {
              yesClaim: 'Single',
            noClaim: 'Unknown',
            yesMarriedJointly: 'Married_Filing_Jointly',
            noMarriedJointly: 'Married_Filing_Separately',
            yesDoYouHaveAnyDependent: selectedFillingStatusOption === 'Married_Filing_Separately' ? 'Head_of_Household' : (marriedStatus === 'noMarried' ? 'Head_of_Household' : 'Married_Filing_Jointly'),
            noDoYouHaveAnyDependent: selectedFillingStatusOption === 'Married_Filing_Separately' ? 'Married_Filing_Separately' : (marriedStatus === 'noMarried' ? 'Single' : 'Married_Filing_Jointly'),
            yesMarried: hasDependents === 'yesDoYouHaveAnyDependent' ? 'Married_Filing_Jointly' : 'Married_Filing_Separately',
            noMarried: 'Single',
        };

        setMarriedStatus(updatedMarriedStatus);
        setFileWithPartner(updatedFileWithPartner);
        setHasDependents(updatedHasDependents);
    
        if (updatedMarriedStatus === 'yesMarried' && updatedFileWithPartner === 'noMarriedJointly' && updatedHasDependents === 'noDoYouHaveAnyDependent') {
            props.onDataFromChildFileStatus('Married_Filing_Separately');
            setSelectedFillingStatusOption('Married_Filing_Separately');
        } else {
            let fileStatus = childDataMapping[childData];
            props.onDataFromChildFileStatus(fileStatus);
            setSelectedFillingStatusOption(fileStatus);
        }
    };
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const filingstatusfor2022 = getTranslatedText('Select your filing status for 2022 below', 'Select your filing status for 2022 below');
    const Single = getTranslatedText('Single', 'Single');
    const HeadofHousehold = getTranslatedText('Head of Household', 'Head of Household')
    const MarriedFilingJointly = getTranslatedText('Married Filing Jointly', 'Married Filing Jointly');
    const MarriedFilingSeparately = getTranslatedText('Married Filing Separately', 'Married Filing Separately');
    const Unknown = getTranslatedText('Unknown', 'Unknown');
    return (
        <div className='mb-3'><div className='mb-2'>{filingstatusfor2022} *</div>
            {(selectedFillingStatusOption === "" && parseInt(props.userInput) !== 0) && (
                <div className="text-danger">Please select a value </div>

            )}
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Single"
                    checked={selectedFillingStatusOption === "Single"}
                    onChange={handleOptionFillingStatusChange} /> {Single}
            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Head_of_Household"
                    checked={selectedFillingStatusOption === "Head_of_Household"}
                    onChange={handleOptionFillingStatusChange} /> {HeadofHousehold}

            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Married_Filing_Jointly"
                    checked={selectedFillingStatusOption === "Married_Filing_Jointly"}
                    onChange={handleOptionFillingStatusChange} /> {MarriedFilingJointly}

            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Married_Filing_Separately"
                    checked={selectedFillingStatusOption === "Married_Filing_Separately"}
                    onChange={handleOptionFillingStatusChange} /> {MarriedFilingSeparately}

            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Unknown"
                    checked={selectedFillingStatusOption === "Unknown"}
                    onChange={handleOptionFillingStatusChange} /> {Unknown}
            </div>
            {/* {showAdditionalQuestions && ( */}
            <ClarifyStatus handleChildData={handleChildData} selectedFillingStatusOption={selectedFillingStatusOption} />
        </div>
    )
}
