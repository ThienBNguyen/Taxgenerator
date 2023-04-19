import React from 'react'
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

export default function DonateForm() {
    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: '{{sk_test_51MxysPHpaHWmcWfmByLIKiJypo0fCzs58mCqwH24SbT8bk2C50ESFJn3OiS1OyP2zEc1aDoKN860Gm9LXJpkoCZN00oRZk1v5v}}',
    // };
    return (


        <div class="container w-50 mt-3 mb-3">
            <div class="  ">
                <h2 class=" text-center ">Donate Info</h2>
                <div class='row justify-content-center '>
                    <button class="btn btn-info text-light col-2 me-2">$25</button>
                    <button class="btn btn-info text-light col-2 me-2">$500</button>
                    <button class="btn btn-info text-light col-2 me-2">$2500</button>
                    <div class='col-12 mt-2 d-flex justify-content-center text-center'>
                        <input type="text" className='w-50' placeholder="donation amount" />

                    </div>
                    <div class='d-flex justify-content-center '>
                        <div class='d-inline m-2'>
                            <input type="radio" />
                            <label htmlFor="" className='ms-1'>One Time</label>
                        </div>

                        <div class="d-inline m-2">
                            <input type="radio" />
                            <label htmlFor="" className='ms-1'>Monthly</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card px-4">
                <p class="h8 py-3">Payment Details</p>
                <div class="row gx-3">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Person Name</p>
                            <input class="form-control mb-3" type="text" placeholder="Name" value="Test" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Card Number</p>
                            <input class="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Expiry</p>
                            <input class="form-control mb-3" type="text" placeholder="MM/YYYY" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input class="form-control mb-3 pt-2 " type="password" placeholder="***" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="btn btn-primary mb-3">
                            <span class="ps-3">Pay $243</span>
                            <span class="fas fa-arrow-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
