import React from 'react'
import About from '../about/About'
import Header from '../../components/header/Header'
import TaxForm from '../w2form/TaxForm'
import Footer from '../../components/footer/Footer'
import TaxDisplaySimpleForm from '../../components/taxdisplay/TaxDisplaySimpleForm'
export default function Home() {
    return (
        <div>
            <Header></Header>
            <About />
            <TaxDisplaySimpleForm/>
            <TaxForm />
            <Footer></Footer>
        </div>
    )
}
