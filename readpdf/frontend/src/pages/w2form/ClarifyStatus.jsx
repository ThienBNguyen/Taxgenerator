import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./clarifyStatus.css"
import DependentQuestion from "./DependentQuestion";
import LanguageContext from "../../services/LanguageContext";
// import QuestionForms from "../components/questionforms/QuestionForms";
export default function ClarifyStatus(props) {
    const [showAreYouMarriedQuestions, setShowAreYouMarriedQuestions] = useState(false);
    const [showMarriedJointly, setShowMarriedJointly] = useState("");
    const [showDoYouHaveDependent, setShowDoYouHaveDependent] = useState("");
    const [showDependentForm, setShowDependentForm] = useState("");
    const { handleChildData } = props
    const { currentLanguage, translateText } = useContext(LanguageContext);

    const getTranslatedText = (key, fallback) => {
        return currentLanguage === 'vi' ? translateText(key) : fallback;
    };

    const claimyouasadependent = getTranslatedText('Can someone claim you as a dependent?', 'Can someone claim you as a dependent?');
    const Areyoumarried = getTranslatedText('Are you married?', 'Are you married?');
    const filedmarriedJointly = getTranslatedText('Will you filed married Jointly?', 'Will you filed married Jointly?')
    const haveanydependent = getTranslatedText('Do you have any dependent?', 'Do you have any dependent?');
useEffect(() => {
    if (props.selectedFillingStatusOption === 'Unknown' ) {
        setShowAreYouMarriedQuestions(false)
        setShowMarriedJointly(false)
        setShowDependentForm(false)
    }

}, [props.selectedFillingStatusOption]);
    const handleClaimAsDependent = (value) => {
        handleChildData(value);
        setShowAreYouMarriedQuestions(value !== "yesClaim");
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
       
        // setShowDoYouHaveDependent(true);
        if (value === "noMarried") {
            handleChildData(value);
            // setShowDoYouHaveDependent(true);
            setShowMarriedJointly(false);
        }
        if (value === "yesMarried") {
            handleChildData(value);
            setShowMarriedJointly(true);
            // setShowDoYouHaveDependent(true);
        }
    };
   
    return (
        <div>
            {props.selectedFillingStatusOption === 'Unknown' &&
                (
                <div><div className='mb-2'>{claimyouasadependent}</div>
                        <div className='mb-2'>
                            <div className=" ">
                            <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleClaimAsDependent("yesClaim")}>Yes</button>
                            <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleClaimAsDependent("noClaim")}>No</button>
                            </div>
                        </div></div>
                )
            }
            {showAreYouMarriedQuestions && (
                <div>
                    < div className='mb-2' > {Areyoumarried}</div >
                    <div className='mb-2'>
                        <div className="">

                            <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleAreYouMarried("yesMarried")}>Yes</button>
                            <button type="button" className="btn btn-primary me-3 px-3" onClick={() => handleAreYouMarried("noMarried")}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {
                showMarriedJointly && (
                    <div>
                        < div className='mb-2' > {filedmarriedJointly}</div >
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
                        < div className='mb-2' > {haveanydependent}</div >
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
