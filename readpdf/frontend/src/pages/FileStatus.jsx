import React, { useState } from 'react'
import ClarifyStatus from './ClarifyStatus';

export default function FileStatus(props) {
    // const [data, setData] = useState("");
    const [selectedFillingStatusOption, setSelectedFillingStatusOption] = useState("");
    const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
    const handleOptionFillingStatusChange = (event) => {
        setSelectedFillingStatusOption(event.target.value);
        props.onDataFromChild(event.target.value)

        if (event.target.value === "Unknown") {
            setShowAdditionalQuestions(true);
        } else {
            setShowAdditionalQuestions(false);
        }

    };
    const handleChildData = (childData) => {
        console.log(childData);
        if (childData === 'yes') {
            props.onDataFromChild('Single')
            setSelectedFillingStatusOption('Single')
        }
        if (childData === 'no') {
            props.onDataFromChild('Unknown')
            setSelectedFillingStatusOption('Unknown')
        }
        if (childData === 'yesMarriedJointly') {
            props.onDataFromChild('Married_Filing_Jointly')
            setSelectedFillingStatusOption('Married_Filing_Jointly')
        }
        if (childData === 'noMarriedJointly') {
            props.onDataFromChild('Married_Filing_Separately')
            setSelectedFillingStatusOption('Married_Filing_Separately')
        }
        if (childData === 'yesDoYouHaveAnyDependent') {
            props.onDataFromChild('Head_of_Household')
            setSelectedFillingStatusOption('Head_of_Household')
        }
        if (childData === 'noDoYouHaveAnyDependent') {
            props.onDataFromChild('Single')
            setSelectedFillingStatusOption('Single')
        }

    };

    return (
        <div className='mb-3'><div className='mb-2'>Select your filing status for 2022 below</div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Single"
                    checked={selectedFillingStatusOption === "Single"}
                    onChange={handleOptionFillingStatusChange} /> Single
            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Head_of_Household"
                    checked={selectedFillingStatusOption === "Head_of_Household"}
                    onChange={handleOptionFillingStatusChange} /> Head of Household

            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Married_Filing_Jointly"
                    checked={selectedFillingStatusOption === "Married_Filing_Jointly"}
                    onChange={handleOptionFillingStatusChange} /> Married Filing Jointly

            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Married_Filing_Separately"
                    checked={selectedFillingStatusOption === "Married_Filing_Separately"}
                    onChange={handleOptionFillingStatusChange} /> Married Filing Separately

            </div>
            <div className='mb-2'>
                <input type="checkbox"
                    name="options"
                    value="Unknown"
                    checked={selectedFillingStatusOption === "Unknown"}
                    onChange={handleOptionFillingStatusChange} /> Unknown
            </div>
            {showAdditionalQuestions && (
                <ClarifyStatus handleChildData={handleChildData} />
            )}

        </div>
    )
}
