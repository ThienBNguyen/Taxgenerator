import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DonateForm from './DonateForm'
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';
// const stripePromise = loadStripe('pk_test_51MxysPHpaHWmcWfmAV6Iv2ij3e11suEJrasgR9PEdconDJG6k2zJuQj2JXR1ZbHsfjbQmv5MNFm7YDzwYFKa16qx00VnzsB5k5');
export default function DonateHome() {
    // const clientSecret = `${paymentIntent.id}_secret_${paymentIntent.client_secret}`;
    return (

        <div>  <Header></Header>
            <DonateForm />
            {/* <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements> */}
            <Footer></Footer>
        </div>
    )
}
