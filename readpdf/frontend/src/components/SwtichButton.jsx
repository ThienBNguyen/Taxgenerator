import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SwitchButton.css"; // Import custom CSS

const SwitchButton = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        // <label className="switch">
        //     <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        //     <span className="slider round"></span>
        // </label>
        <label className="switch">
            {isChecked ? (
                <>
                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                    <span className="slider round"></span>
                </>
            ) : (
                <>
                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                    <span className="slider round x-style">&#x2717;</span>
                </>
            )}
        </label>
    );
};

export default SwitchButton;