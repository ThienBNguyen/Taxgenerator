import React, { useState } from 'react'

export default function DependentQuestion() {
    const [under16, setUnder16] = useState(0)
    const [over17, setOver17] = useState(0)

    const handleOptionUnder16Change = (event) => {
        setUnder16(event.target.value);
    };

    const handleOptionOver17Change = (event) => {
        setOver17(event.target.value);
    };
    return (
        <div><div >
            <span>
                Dependents
            </span>
            <div className='row' >
                <div className='col-6'>
                    <span>Under age 17</span>
                    <br />
                    <input className='w-100 rounder' type="text"
                        name="options"
                        value={under16}
                        onChange={handleOptionUnder16Change} />
                </div>
                <div className='col-6'>
                    <span>Full-time students age 17-23 or other dependent</span>
                    <br />
                    <input className='w-100 rounder' type="text"
                        name="options"
                        value={over17}
                        onChange={handleOptionOver17Change} />
                </div>

            </div>

        </div></div>
    )
}
