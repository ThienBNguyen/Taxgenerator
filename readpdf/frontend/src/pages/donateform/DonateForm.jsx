import React from 'react'
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

export default function DonateForm() {
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: '{{sk_test_51MxysPHpaHWmcWfmByLIKiJypo0fCzs58mCqwH24SbT8bk2C50ESFJn3OiS1OyP2zEc1aDoKN860Gm9LXJpkoCZN00oRZk1v5v}}',
    // };
    return (


        <div className="container w-md-50 w-100 mt-3 mb-3">
            <div className="  ">
                <h2 className=" text-center ">Donate Info</h2>
                <div className='row justify-content-center '>
                    <button className="btn btn-info text-light col-3 col-sm-2  me-2">$25</button>
                    <button className="btn btn-info text-light col-3 col-sm-2  me-2">$500</button>
                    <button className="btn btn-info text-light col-3 col-sm-2  me-2">$2500</button>
                    <div className='col-12 mt-2 d-flex justify-content-center text-center'>
                        <input type="text" className='w-50' placeholder="donation amount" />

                    </div>
                    <div className='d-flex justify-content-center '>
                        <div className='d-inline m-2'>
                            <input type="radio" />
                            <label htmlFor="" className='ms-1'>One Time</label>
                        </div>

                        <div className="d-inline m-2">
                            <input type="radio" />
                            <label htmlFor="" className='ms-1'>Monthly</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card px-4">
                <p className="h8 py-3">Payment Details</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Person Name</p>
                            <input className="form-control mb-3" type="text" placeholder="Name" value="Test" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Card Number</p>
                            <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Expiry</p>
                            <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="btn btn-primary mb-3">
                            <span className="ps-3">Pay $243</span>
                            <span className="fas fa-arrow-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
