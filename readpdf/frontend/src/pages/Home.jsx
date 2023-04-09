import React from 'react'
import About from './About'
import Header from '../components/Header'
import TaxForm from './TaxForm'
import Footer from '../components/footer'
export default function Home() {
    return (
        <div>
            <Header></Header>
            <About />
            <TaxForm />
            <Footer></Footer>
        </div>
    )
}
