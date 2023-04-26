import React, { useState } from 'react'
import ClarifyStatus from './ClarifyStatus';

export default function FileStatus(props) {
    // const [data, setData] = useState("");
    const [selectedFillingStatusOption, setSelectedFillingStatusOption] = useState("");

    const handleOptionFillingStatusChange = (event) => {
        setSelectedFillingStatusOption(event.target.value);
        props.onDataFromChild(event.target.value)
    };

    // const handleChildData = (childData) => {

    //     if (childData === 'yes') {
    //         props.onDataFromChild('Single')
    //         setSelectedFillingStatusOption('Single')
    //     }
    //     if (childData === 'no') {
    //         props.onDataFromChild('Unknown')
    //         setSelectedFillingStatusOption('Unknown')
    //     }
    //     if (childData === 'yesMarriedJointly') {
    //         props.onDataFromChild('Married_Filing_Jointly')
    //         setSelectedFillingStatusOption('Married_Filing_Jointly')
    //     }
    //     if (childData === 'noMarriedJointly') {
    //         props.onDataFromChild('Married_Filing_Separately')
    //         setSelectedFillingStatusOption('Married_Filing_Separately')
    //         if (childData === 'yesDoYouHaveAnyDependent') {
    //             props.onDataFromChild('Married_Filing_Separately')
    //             setSelectedFillingStatusOption('Married_Filing_Separately')
    //             // if (selectedFillingStatusOption === 'Married_Filing_Separately') {
    //             //     setSelectedFillingStatusOption('Married_Filing_Separately')
    //             //     props.onDataFromChild('Married_Filing_Separately')
    //             // } else {
    //             //     props.onDataFromChild('Married_Filing_Jointly')
    //             //     setSelectedFillingStatusOption('Married_Filing_Jointly')
    //             // }
    //         }
    //     }
    //     // if (childData === 'yesDoYouHaveAnyDependent') {
    //     //     if (selectedFillingStatusOption === 'Married_Filing_Separately') {
    //     //         setSelectedFillingStatusOption('Married_Filing_Separately')
    //     //         props.onDataFromChild('Married_Filing_Separately')
    //     //     } else {
    //     //         props.onDataFromChild('Married_Filing_Jointly')
    //     //         setSelectedFillingStatusOption('Married_Filing_Jointly')
    //     //     }
    //     //     // props.onDataFromChild('Married_Filing_Jointly')
    //     //     // setSelectedFillingStatusOption('Married_Filing_Jointly')

    //     // }
    //     if (childData === 'noDoYouHaveAnyDependent') {
    //         if (selectedFillingStatusOption === 'Married_Filing_Separately') {
    //             setSelectedFillingStatusOption('Married_Filing_Separately')
    //             props.onDataFromChild('Married_Filing_Separately')
    //         } else {
    //             props.onDataFromChild('Married_Filing_Jointly')
    //             setSelectedFillingStatusOption('Married_Filing_Jointly')
    //         }

    //     }

    // };
    const handleChildData = (childData) => {
        const childDataMapping = {
            yes: 'Single',
            no: 'Unknown',
            yesMarriedJointly: 'Married_Filing_Jointly',
            noMarriedJointly: 'Married_Filing_Separately',
            yesDoYouHaveAnyDependent: selectedFillingStatusOption === 'Married_Filing_Separately' ? 'Married_Filing_Separately' : 'Married_Filing_Jointly',
            noDoYouHaveAnyDependent: selectedFillingStatusOption === 'Married_Filing_Separately' ? 'Married_Filing_Separately' : 'Married_Filing_Jointly',
        };

        if (childData in childDataMapping) {
            props.onDataFromChild(childDataMapping[childData]);
            setSelectedFillingStatusOption(childDataMapping[childData]);
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
            {/* {showAdditionalQuestions && ( */}
            <ClarifyStatus handleChildData={handleChildData} selectedFillingStatusOption={selectedFillingStatusOption} />
        </div>
    )
}
