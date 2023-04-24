import React, { useState } from 'react'
import ClarifyStatus from './ClarifyStatus';

export default function FileStatus(props) {
    // const [data, setData] = useState("");
    const [selectedFillingStatusOption, setSelectedFillingStatusOption] = useState("");
    // const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
    const [DependentData, setDependentData] = useState("");
    const [dependentOver17Data, setDependentOver17Data] = useState("");
    // console.log(showAdditionalQuestions.valueOf.name);
    // console.log(selectedFillingStatusOption);
    // const [claimedAsDependent, setClaimedAsDependent] = useState(false);
    // const [isMarried, setIsMarried] = useState(false);
    // const [filedMarriedJointly, setFiledMarriedJointly] = useState(false);
    // const [hasDependent, setHasDependent] = useState(false);

    // const handleClaimAsDependentInParent = (value) => {
    //     setClaimedAsDependent(value);
    // };

    // const handleIsMarriedInParent = (value) => {
    //     setIsMarried(value);
    // };

    // const handleFiledMarriedJointlyInParent = (value) => {
    //     setFiledMarriedJointly(value);
    // };

    // const handleHasDependentInParent = (value) => {
    //     setHasDependent(value);
    // };

    ///test
    const handleDependentData = (data) => {
        setDependentData(data);
    };
    const handleDependentOver17DataFromFileStatus = (data) => {

        setDependentOver17Data(data);
    };
    props.handleDependentOver17FromTaxForm(dependentOver17Data)
    props.dependentDataFromChild(DependentData)
    // props.dependentDataFromChild()
    //not use variable 
    // console.log(showAdditionalQuestions);
    const handleOptionFillingStatusChange = (event) => {
        setSelectedFillingStatusOption(event.target.value);
        props.onDataFromChild(event.target.value)

        // if (event.target.value === "Unknown") {
        //     setShowAdditionalQuestions(true);
        // } else {
        //     setShowAdditionalQuestions(false);
        // }

    };

    const handleChildData = (childData) => {
        const childDataToFilingStatus = {
            yes: 'Single',
            no: 'Unknown',
            yesMarriedJointly: 'Married_Filing_Jointly',
            noMarriedJointly: 'Married_Filing_Separately',
            yesDoYouHaveAnyDependent: 'Married_Filing_Jointly',
        };

        const filingStatus = childDataToFilingStatus[childData];

        if (filingStatus) {
            props.onDataFromChild(filingStatus);
            setSelectedFillingStatusOption(filingStatus);
        } else if (childData === 'noDoYouHaveAnyDependent') {
            const selectedStatus =
                selectedFillingStatusOption === 'Married_Filing_Separately'
                    ? 'Married_Filing_Separately'
                    : 'Married_Filing_Jointly';

            props.onDataFromChild(selectedStatus);
            setSelectedFillingStatusOption(selectedStatus);
        }
        // if (childData === 'yes') {
        //     props.onDataFromChild('Single')
        //     setSelectedFillingStatusOption('Single')
        // }
        // if (childData === 'no') {
        //     props.onDataFromChild('Unknown')
        //     setSelectedFillingStatusOption('Unknown')
        // }
        // if (childData === 'yesMarriedJointly') {
        //     props.onDataFromChild('Married_Filing_Jointly')
        //     setSelectedFillingStatusOption('Married_Filing_Jointly')
        // }
        // if (childData === 'noMarriedJointly') {
        //     props.onDataFromChild('Married_Filing_Separately')
        //     setSelectedFillingStatusOption('Married_Filing_Separately')
        // }
        // if (childData === 'yesDoYouHaveAnyDependent') {
        //     props.onDataFromChild('Married_Filing_Jointly')
        //     setSelectedFillingStatusOption('Married_Filing_Jointly')
        // }
        // if (childData === 'noDoYouHaveAnyDependent') {
        //     if (selectedFillingStatusOption === 'Married_Filing_Separately') {
        //         setSelectedFillingStatusOption('Married_Filing_Separately')
        //         props.onDataFromChild('Married_Filing_Separately')
        //     } else {
        //         props.onDataFromChild('Married_Filing_Jointly')
        //         setSelectedFillingStatusOption('Married_Filing_Jointly')
        //     }

        // }

    };
    // console.log(selectedFillingStatusOption);
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
            <ClarifyStatus handleChildData={handleChildData} handleDependentDataFromFile={handleDependentData} handleDependentOver17DataFromFileStatus={handleDependentOver17DataFromFileStatus} selectedFillingStatusOption={selectedFillingStatusOption} />
            {/* <ClarifyStatus
                claimedAsDependent={claimedAsDependent}
                isMarried={isMarried}
                filedMarriedJointly={filedMarriedJointly}
                hasDependent={hasDependent}
                handleClaimAsDependentInParent={handleClaimAsDependentInParent}
                handleIsMarriedInParent={handleIsMarriedInParent}
                handleFiledMarriedJointlyInParent={handleFiledMarriedJointlyInParent}
                handleHasDependentInParent={handleHasDependentInParent}
                handleDependentDataFromFile={handleDependentData}
                handleDependentOver17DataFromFileStatus={handleDependentOver17DataFromFileStatus}
                selectedFillingStatusOption={selectedFillingStatusOption}
            /> */}
            {/* )} */}


        </div>
    )
}
