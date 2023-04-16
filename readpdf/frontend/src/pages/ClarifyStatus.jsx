import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./clarifyStatus.css"
import DependentQuestion from "./DependentQuestion";
// import QuestionForms from "../components/questionforms/QuestionForms";
export default function ClarifyStatus(props) {
    const [dependentData, setDependentData] = useState("");
    const [dependentOver17Data, setDependentOver17Data] = useState("");
    const [isCheckedClaimAsDependent, setIsCheckedClaimAsDependent] = useState(false);
    const [areYouMarried, setAreYouMarried] = useState(false);
    const [doYouHaveAnyDependent, setDoYouHaveAnyDependent] = useState(false);
    const [showAreYouMarriedQuestions, setShowAreYouMarriedQuestions] = useState(false);
    const [showMarriedJointly, setShowMarriedJointly] = useState("");
    const [showDoYouHaveDependent, setShowDoYouHaveDependent] = useState("");
    const [showDependentForm, setShowDependentForm] = useState("");
    const { handleChildData } = props
    const handleDependentData = (data) => {
        setDependentData(data);
    };
    const handleDependentOver17Data = (data) => {
        setDependentOver17Data(data);
    };
    // console.log(dependentOver17Data);
    props.handleDependentDataFromFile(dependentData)
    props.handleDependentOver17DataFromFileStatus(dependentOver17Data)
    // const handleOptionMarialStatusChange = (event) => {
    //     setSelectedOption(event.target.value);
    //     setShowAdditionalQuestions(true);
    // };
    // console.log(props.selectedFillingStatusOption);
    const sendDataToParent = (filingstatus) => {
        handleChildData(filingstatus);
    };
    const handleClaimAsDependent = (value) => {
        sendDataToParent(value)
        if (value === "no") {
            setIsCheckedClaimAsDependent(value === "no");
            setShowAreYouMarriedQuestions(true);
        }
        if (value === "yes") {
            setShowAreYouMarriedQuestions(false);
        }
        console.log(isCheckedClaimAsDependent, areYouMarried, doYouHaveAnyDependent);
    };
    const handleAreYouMarried = (value) => {
        setShowDoYouHaveDependent(true);
        if (value === "no") {
            setAreYouMarried(value === "no");
            setShowDoYouHaveDependent(true);
        }
        if (value === "yes") {
            setAreYouMarried(value === "yes");
            setShowMarriedJointly(true)
            setShowDoYouHaveDependent(true);
        }
    };

    const handleFiledMarriedJointly = (value) => {
        sendDataToParent(value)
        if (value === "noMarriedJointly") {
            setAreYouMarried(value === "no");
            setShowDoYouHaveDependent(true);
        }
        if (value === "yesMarriedJointly") {
            setAreYouMarried(value === "yes");
            setShowDoYouHaveDependent(true);
        }
    };
    const handleShowDoYouHaveDependent = (value) => {
        sendDataToParent(value)
        if (value === "noDoYouHaveAnyDependent") {
            setDoYouHaveAnyDependent(value === "no");
            setShowDependentForm(false);
        }
        if (value === "yesDoYouHaveAnyDependent") {
            setDoYouHaveAnyDependent(value === "yes");
            setShowDependentForm(true);
        }
    };

    return (
        <div>
            {props.selectedFillingStatusOption === 'Unknown' &&
                (
                    <div><div className='mb-2'>Can someone claim you as a dependent?</div>
                        <div className='mb-2'>
                            <div class=" ">
                                <button type="button" class="btn btn-primary me-3 px-3" onClick={() => handleClaimAsDependent("yes")}>Yes</button>
                                <button type="button" class="btn btn-primary me-3 px-3" onClick={() => handleClaimAsDependent("no")}>No</button>
                            </div>
                        </div></div>
                )
            }
            {showAreYouMarriedQuestions && (
                <div>
                    < div className='mb-2' > Are you married?</div >
                    <div className='mb-2'>
                        <div class="">

                            <button type="button" class="btn btn-primary me-3 px-3" onClick={() => handleAreYouMarried("yes")}>Yes</button>
                            <button type="button" class="btn btn-primary me-3 px-3" onClick={() => handleAreYouMarried("no")}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {
                showMarriedJointly && (
                    <div>
                        < div className='mb-2' > Will you filed married Jointly?</div >
                        <div className='mb-2'>
                            <div class="">
                                <button class="btn btn-primary me-3 px-3" onClick={() => handleFiledMarriedJointly("yesMarriedJointly")}>Yes</button>
                                <button class="btn btn-primary me-3 px-3" onClick={() => handleFiledMarriedJointly("noMarriedJointly")}>No</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                showDoYouHaveDependent || props.selectedFillingStatusOption === "Married_Filing_Jointly" || props.selectedFillingStatusOption === "Married_Filing_Separately" ? (
                    <div>
                        < div className='mb-2' > Do you have any dependent?</div >
                        <div className='mb-2'>
                            <div class="">
                                <button type="button" class="btn btn-primary me-3 px-3" onClick={() => handleShowDoYouHaveDependent("yesDoYouHaveAnyDependent")}>Yes</button>
                                <button type="button" class="btn btn-primary me-3 px-3" onClick={() => handleShowDoYouHaveDependent("noDoYouHaveAnyDependent")}>No</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            {showDependentForm || props.selectedFillingStatusOption === "Head_of_Household" ? (
                <DependentQuestion handleDependentOver17Data={handleDependentOver17Data} handleChildData={handleDependentData} />
            ) : null}

        </div>

    )
}
