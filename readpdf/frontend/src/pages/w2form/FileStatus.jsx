import React, { useState,  } from 'react'
import ClarifyStatus from './ClarifyStatus';

export default function FileStatus(props) {
    const [selectedFillingStatusOption, setSelectedFillingStatusOption] = useState("");
    const [marriedStatus, setMarriedStatus] = useState('');
    const [hasDependents, setHasDependents] = useState('');
    // const [fileWithPartner, setFileWithPartner] = useState('');
    // const [claimStatus, setClaimStatus] = useState('');
    const handleOptionFillingStatusChange = (event) => {
        setSelectedFillingStatusOption(event.target.value);
        props.onDataFromChildFileStatus(event.target.value)
    };
    const handleChildData = (childData) => {
        const childDataMapping = {
            yesClaim: 'Single',
            noClaim: 'Unknown',
            yesMarriedJointly: 'Married_Filing_Jointly',
            noMarriedJointly: 'Married_Filing_Separately',
            yesDoYouHaveAnyDependent: marriedStatus === 'noMarried' ? 'Head_of_Household' : (marriedStatus === 'yesMarriedJointly' ? 'Married_Filing_Jointly' : 'Head_of_Household'),
            noDoYouHaveAnyDependent: marriedStatus === 'noMarried' ? 'Single' : (marriedStatus === 'noMarriedJointly' ? 'Married_Filing_Separately' : 'Married_Filing_Jointly'),
            yesMarried: hasDependents === 'yesDoYouHaveAnyDependent' ? 'Married_Filing_Jointly' : 'Married_Filing_Separately',
            noMarried: 'Single',
        };

        if (childData in childDataMapping) {
            if (childData === 'noMarried') {
                setMarriedStatus('noMarried');
            } else if (childData === 'yesMarried') {
                setMarriedStatus('yesMarried');
            } else if (childData === 'yesMarriedJointly') {
                setMarriedStatus('yesMarriedJointly');
            } else if (childData === 'noMarriedJointly') {
                setMarriedStatus('noMarriedJointly');
            }
            if (childData === 'yesDoYouHaveAnyDependent') {
                setHasDependents('yesDoYouHaveAnyDependent');
            } else if (childData === 'noDoYouHaveAnyDependent') {
                setHasDependents('noDoYouHaveAnyDependent');
            }
        }

        let fileStatus;

        // if (selectedFillingStatusOption === 'Married_Filing_Jointly') {
        //     fileStatus = 'Married_Filing_Jointly';
        // } else if (selectedFillingStatusOption === 'Married_Filing_Separately') {
        //     fileStatus = hasDependents === 'yesDoYouHaveAnyDependent' ? 'Married_Filing_Separately': 'Head_of_Household'  ;
        // } else if (selectedFillingStatusOption === 'Unknown') {
        //     fileStatus = childDataMapping[childData];
        // }
        // if (selectedFillingStatusOption === 'Unknown') {
            fileStatus = childDataMapping[childData];
        // }
console.log(fileStatus);
        props.onDataFromChildFileStatus(fileStatus);
        setSelectedFillingStatusOption(fileStatus);
    };
//     const handleChildData = (childData) => {
//         let fileStatus
//    if (selectedFillingStatusOption === 'Married_Filing_Jointly') {
//             if (hasDependents === 'yesDoYouHaveAnyDependent') {
//                 fileStatus = 'Married_Filing_Jointly';
//                 props.onDataFromChildFileStatus(fileStatus);
//                 setSelectedFillingStatusOption(fileStatus);
//             } else {
//                 fileStatus = 'Married_Filing_Jointly';}}
//         props.onDataFromChildFileStatus(fileStatus);
//         setSelectedFillingStatusOption(fileStatus);
            
//         if (selectedFillingStatusOption === 'Married_Filing_Separately') {
//             if (hasDependents === 'yesDoYouHaveAnyDependent') {
//                 fileStatus = 'Head_of_Household';
//                 props.onDataFromChildFileStatus(fileStatus);
//                 setSelectedFillingStatusOption(fileStatus);
//             } else {
//                 fileStatus = 'Married_Filing_Separately';
//                 props.onDataFromChildFileStatus(fileStatus);
//                 setSelectedFillingStatusOption(fileStatus);
//             }}
//         if (selectedFillingStatusOption === 'Unknown')  {
            // const childDataMapping = {
            //     yesClaim: 'Single',
            //     noClaim: 'Unknown',
            //     yesMarriedJointly: 'Married_Filing_Jointly',
            //     noMarriedJointly: 'Married_Filing_Separately',
            //     yesDoYouHaveAnyDependent: marriedStatus === 'noMarried' ? 'Head_of_Household' : (marriedStatus === 'yesMarriedJointly' ? 'Married_Filing_Jointly' : 'Head_of_Household'),
            //     noDoYouHaveAnyDependent: marriedStatus === 'noMarried' ? 'Single' : (marriedStatus === 'noMarriedJointly' ? 'Married_Filing_Separately' : 'Married_Filing_Jointly'),
            //     yesMarried: hasDependents === 'yesDoYouHaveAnyDependent' ? 'Married_Filing_Jointly' : 'Married_Filing_Separately',
            //     noMarried: 'Single',
            // };


//             if (childData in childDataMapping) {
                // if (childData === 'noMarried') {
                //     setMarriedStatus('noMarried');
                // } else if (childData === 'yesMarried') {
                //     setMarriedStatus('yesMarried');
                // } else if (childData === 'yesMarriedJointly') {
                //     setMarriedStatus('yesMarriedJointly');
                // } else if (childData === 'noMarriedJointly') {
                //     setMarriedStatus('noMarriedJointly');
                // }

                // if (childData === 'yesDoYouHaveAnyDependent') {
                //     setHasDependents('yesDoYouHaveAnyDependent');
                // } else if (childData === 'noDoYouHaveAnyDependent') {
                //     setHasDependents('noDoYouHaveAnyDependent');
                // }
//                 props.onDataFromChildFileStatus(childDataMapping[childData]);
//                 setSelectedFillingStatusOption(childDataMapping[childData]);
//             }
//         }
     
//     };
    // const handleChildData = (childData) => {
    //     if (childData === 'yesClaim'){
    //         setClaimStatus('yesClaim')
    //     }
    //     if (childData === 'noClaim') {
    //         setClaimStatus('noClaim')
    //     }
    //     if (childData === 'yesMarried') {
    //         setMarriedStatus('yesMarried')
    //     }
    //     if (childData === 'noMarried') {
    //         setMarriedStatus('noMarried')
    //     }
    //     if (childData === 'yesMarriedJointly') {
    //         setFileWithPartner('yesMarriedJointly')
    //     }
    //     if (childData === 'noMarriedJointly') {
    //         setFileWithPartner('noMarriedJointly')
    //     }
    //     if (childData === 'yesDoYouHaveAnyDependent') {
    //         setHasDependents('yesDoYouHaveAnyDependent')
    //     }
    //     if (childData === 'noDoYouHaveAnyDependent') {
    //         setHasDependents('noDoYouHaveAnyDependent')
    //     }
        
    // };
    // useEffect(() => {
    //     let fileStatus;
    //     console.log(selectedFillingStatusOption, 'selectedFillingStatusOption');
    //     if (selectedFillingStatusOption === 'Unknown') {
    //         if (claimStatus === 'yesClaim') {
    //             fileStatus = 'Single';
    //         } else if (claimStatus === 'noClaim') {
    //             if (marriedStatus === 'yesMarried') {
    //                 if (fileWithPartner === 'yesMarriedJointly') {
    //                     fileStatus = 'Married_Filing_Jointly';
    //                     if (hasDependents === 'yesDoYouHaveAnyDependent') {
    //                         fileStatus = 'Married_Filing_Jointly';
    //                     } else {
    //                         fileStatus = 'Married_Filing_Jointly';
    //                     }
    //                 } else if (fileWithPartner === 'noMarriedJointly') {
    //                     fileStatus = 'Married_Filing_Separately';
    //                     if (hasDependents === 'yesDoYouHaveAnyDependent') {
    //                         fileStatus = 'Head_of_Household';
    //                     } else {
    //                         fileStatus = 'Married_Filing_Separately';
    //                     }
    //                 }
    //             }
    //         }
    //     } else if (selectedFillingStatusOption === 'Married_Filing_Jointly') {
    //         if (hasDependents === 'yesDoYouHaveAnyDependent') {
    //             fileStatus = 'Married_Filing_Jointly';
    //         } else {
    //             fileStatus = 'Married_Filing_Jointly';
    //         }
    //     } else if (selectedFillingStatusOption === 'Married_Filing_Separately') {
    //         if (hasDependents === 'yesDoYouHaveAnyDependent') {
    //             fileStatus = 'Head_of_Household';
    //         } else {
    //             fileStatus = 'Married_Filing_Separately';
    //         }
    //     }
    //     if (fileStatus) {
    //         props.onDataFromChildFileStatus(fileStatus);
    //         setSelectedFillingStatusOption(fileStatus);
    //     }
    // }, [marriedStatus, hasDependents, fileWithPartner, claimStatus, selectedFillingStatusOption, props]); 
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
