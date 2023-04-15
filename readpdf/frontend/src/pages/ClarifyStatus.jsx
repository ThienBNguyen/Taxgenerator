import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./clarifyStatus.css"
import DependentQuestion from "./DependentQuestion";
// import QuestionForms from "../components/questionforms/QuestionForms";
export default function ClarifyStatus({ handleChildData }) {
    const [isCheckedClaimAsDependent, setIsCheckedClaimAsDependent] = useState(false);
    const [areYouMarried, setAreYouMarried] = useState(false);
    const [doYouHaveAnyDependent, setDoYouHaveAnyDependent] = useState(false);
    // const [willYouFiledMarriedJointly, setWillYouFiledMarriedJointly] = useState(false);
    // const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
    const [showAreYouMarriedQuestions, setShowAreYouMarriedQuestions] = useState(false);
    const [showMarriedJointly, setShowMarriedJointly] = useState("");
    const [showDoYouHaveDependent, setShowDoYouHaveDependent] = useState("");
    const [showDependentForm, setShowDependentForm] = useState("");
    // const handleOptionMarialStatusChange = (event) => {
    //     setSelectedOption(event.target.value);
    //     setShowAdditionalQuestions(true);
    // };
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

        if (value === "no") {
            setAreYouMarried(value === "no");
            setShowMarriedJointly(false);
        }
        if (value === "yes") {
            setAreYouMarried(value === "yes");
            setShowMarriedJointly(true);
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

            <div className='mb-2'>Can someone claim you as a dependent?</div>
            <div className='mb-2'>
                <div class="form-check form-switch">
                    <button onClick={() => handleClaimAsDependent("yes")}>Yes</button>
                    <button onClick={() => handleClaimAsDependent("no")}>No</button>
                </div>
            </div>


            {showAreYouMarriedQuestions && (

                <div>
                    < div className='mb-2' > Are you married?</div >
                    <div className='mb-2'>
                        <div class="form-check form-switch">

                            <button onClick={() => handleAreYouMarried("yes")}>Yes</button>
                            <button onClick={() => handleAreYouMarried("no")}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {
                showMarriedJointly && (
                    <div>
                        < div className='mb-2' > Will you filed married Jointly?</div >
                        <div className='mb-2'>
                            <div class="form-check form-switch">
                                <button onClick={() => handleFiledMarriedJointly("yesMarriedJointly")}>Yes</button>
                                <button onClick={() => handleFiledMarriedJointly("noMarriedJointly")}>No</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                showDoYouHaveDependent && (
                    <div>
                        < div className='mb-2' > Do you have any dependent?</div >
                        <div className='mb-2'>
                            <div class="form-check form-switch">
                                <button onClick={() => handleShowDoYouHaveDependent("yesDoYouHaveAnyDependent")}>Yes</button>
                                <button onClick={() => handleShowDoYouHaveDependent("noDoYouHaveAnyDependent")}>No</button>
                            </div>
                        </div>
                    </div>
                )

            }
            {showDependentForm && (
                <DependentQuestion />
            )}
            {/* <div>
                {showAdditionalQuestions ? (
                    <DependentQuestion />
                ) : (
                    null
                )}
            </div> */}
            {/* <SwitchButton /> */}
        </div>

    )
}
