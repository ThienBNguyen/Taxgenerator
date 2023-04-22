import React, { useState, } from 'react'
export default function ScheduleCForm() {
    const [advertising, setAdvertising] = useState(0);
    const [carAndTruckExpenses, setCarAndTruckExpenses] = useState(0);
    const [commissionsAndFees, setCommissionsAndFees] = useState(0);
    const [contractLabor, setContractLabor] = useState(0);
    const [depletion, setDepletion] = useState(0);
    const [depreciation, setDepreciation] = useState(0);
    const [employeeBenefitPrograms, setEmployeeBenefitPrograms] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const [interest, setInterest] = useState(0);
    const [legalAndProfessionalServices, setLegalAndProfessionalServices] = useState(0);
    const [officeExpense, setOfficeExpense] = useState(0);
    const [pensionAndProfitSharingPlans, setPensionAndProfitSharingPlans] = useState(0);
    const [rentOrLease, setRentOrLease] = useState(0);
    const [repairsAndMaintenance, setRepairsAndMaintenance] = useState(0);
    const [supplies, setSupplies] = useState(0);
    const [taxesAndLicenses, setTaxesAndLicenses] = useState(0);
    const [travelAndMeals, setTravelAndMeals] = useState(0);
    const [utilities, setUtilities] = useState(0);
    const [wages, setWages] = useState(0);
    const [otherExpenses, setOtherExpenses] = useState(0);

    const handleInputChange = (event, setFunction) => {
        console.log(advertising);
        setFunction(Number(event.target.value));
    };
    return (
        <div className="container py-4">
            <div className='col-sm-12 col-lg-7 bg-clear border-5  rounded p-3 shadow-lg '>
                <div className=''>

                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Advertising
                            </span>
                            <div>
                                <input type="text" value={advertising} onChange={(event) => handleInputChange(event, setAdvertising)} placeholder="0" className="w-100 rounder" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Car and truck expenses
                            </span>
                            <div>
                                <input type="text" value={carAndTruckExpenses} onChange={(event) => handleInputChange(event, setCarAndTruckExpenses)} placeholder="0" className="w-100 rounder " />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                commissions and fees
                            </span>
                            <div>
                                <input type="text" value={commissionsAndFees} onChange={(event) => handleInputChange(event, setCommissionsAndFees)} placeholder="0" className="w-100 rounder " />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Contract labor
                            </span>
                            <div>
                                <input type="text" value={contractLabor} onChange={(event) => handleInputChange(event, setContractLabor)} placeholder="0" className='w-100 rounder ' />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Depletion
                            </span>
                            <div>
                                <input type="text" value={depletion} onChange={(event) => handleInputChange(event, setDepletion)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Depreciation and section
                            </span>
                            <div>
                                <input type="text" value={depreciation} onChange={(event) => handleInputChange(event, setDepreciation)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                employee benefit programs
                            </span>
                            <div>
                                <input type="text" value={employeeBenefitPrograms} onChange={(event) => handleInputChange(event, setEmployeeBenefitPrograms)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Insurance
                            </span>
                            <div>
                                <input type="text" value={insurance} onChange={(event) => handleInputChange(event, setInsurance)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Interest
                            </span>
                            <div>
                                <input type="text" value={interest} onChange={(event) => handleInputChange(event, setInterest)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                legal and professional services
                            </span>
                            <div>
                                <input type="text" value={legalAndProfessionalServices} onChange={(event) => handleInputChange(event, setLegalAndProfessionalServices)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                office expense
                            </span>
                            <div>
                                <input type="text" value={officeExpense} onChange={(event) => handleInputChange(event, setOfficeExpense)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Pension and profit sharing plans
                            </span>
                            <div>
                                <input type="text" value={pensionAndProfitSharingPlans} onChange={(event) => handleInputChange(event, setPensionAndProfitSharingPlans)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Rent or lease
                            </span>
                            <div>
                                <input type="text" value={rentOrLease} onChange={(event) => handleInputChange(event, setRentOrLease)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Repairs and maintenance
                            </span>
                            <div>
                                <input type="text" value={repairsAndMaintenance} onChange={(event) => handleInputChange(event, setRepairsAndMaintenance)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Supplies
                            </span>
                            <div>
                                <input type="text" value={supplies} onChange={(event) => handleInputChange(event, setSupplies)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Taxes and licenses
                            </span>
                            <div>
                                <input type="text" value={taxesAndLicenses} onChange={(event) => handleInputChange(event, setTaxesAndLicenses)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Travel and meals
                            </span>
                            <div>
                                <input type="text" value={travelAndMeals} onChange={(event) => handleInputChange(event, setTravelAndMeals)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Utilities
                            </span>
                            <div>
                                <input type="text" value={utilities} onChange={(event) => handleInputChange(event, setUtilities)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Wages
                            </span>
                            <div>
                                <input type="text" value={wages} onChange={(event) => handleInputChange(event, setWages)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <span>
                                Other expenses
                            </span>
                            <div>
                                <input type="text" value={otherExpenses} onChange={(event) => handleInputChange(event, setOtherExpenses)} placeholder="0" className='w-100 rounder ' />
                            </div>

                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}
