import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./clarifyStatus.css"
import DependentQuestion from "./DependentQuestion";
// import QuestionForms from "../components/questionforms/QuestionForms";
export default function ClarifyStatus(props) {


    const [showAreYouMarriedQuestions, setShowAreYouMarriedQuestions] = useState(false);
    const [showMarriedJointly, setShowMarriedJointly] = useState("");
    const [showDoYouHaveDependent, setShowDoYouHaveDependent] = useState("");
    const [showDependentForm, setShowDependentForm] = useState("");

    const { handleChildData } = props


    const handleClaimAsDependent = (value) => {
        handleChildData(value);
        setShowAreYouMarriedQuestions(value !== "yes");
    };

    const handleFiledMarriedJointly = (value) => {
        handleChildData(value);
        setShowDoYouHaveDependent(true);
    };

    const handleShowDoYouHaveDependent = (value) => {
        handleChildData(value);
        setShowDependentForm(value === "yesDoYouHaveAnyDependent");
    };

    const handleAreYouMarried = (value) => {
        setShowDoYouHaveDependent(true);
        if (value === "no") {
            setShowDoYouHaveDependent(true);
        }
        if (value === "yes") {
            setShowMarriedJointly(true);
            setShowDoYouHaveDependent(true);
        }
    };
    return (
        <div>
            {props.selectedFillingStatusOption === 'Unknown' &&
                (
                    <div><div className='mb-2'>Can someone claim you as a dependent?</div>
                        <div className='mb-2'>
                            <div className=" ">
                                <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleClaimAsDependent("yes")}>Yes</button>
                                <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleClaimAsDependent("no")}>No</button>
                            </div>
                        </div></div>
                )
            }
            {showAreYouMarriedQuestions && (
                <div>
                    < div className='mb-2' > Are you married?</div >
                    <div className='mb-2'>
                        <div className="">

                            <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleAreYouMarried("yes")}>Yes</button>
                            <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleAreYouMarried("no")}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {
                showMarriedJointly && (
                    <div>
                        < div className='mb-2' > Will you filed married Jointly?</div >
                        <div className='mb-2'>
                            <div className="">
                                <button className="btn btn-primary me-3 px-3" onClick={() => handleFiledMarriedJointly("yesMarriedJointly")}>Yes</button>
                                <button className="btn btn-primary me-3 px-3" onClick={() => handleFiledMarriedJointly("noMarriedJointly")}>No</button>
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
                            <div className="">
                                <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleShowDoYouHaveDependent("yesDoYouHaveAnyDependent")}>Yes</button>
                                <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleShowDoYouHaveDependent("noDoYouHaveAnyDependent")}>No</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            {showDependentForm || props.selectedFillingStatusOption === "Head_of_Household" ? (
                <DependentQuestion />
            ) : null}

        </div>

    )
}
