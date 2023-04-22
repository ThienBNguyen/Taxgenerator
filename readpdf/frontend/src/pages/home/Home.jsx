import React from 'react'
import About from '../about/About'
import Header from '../../components/header/Header'
import TaxForm from './TaxForm'
import Footer from '../../components/footer/Footer'
import Counter from '../../components/Counter'
export default function Home() {
    return (
        <div>
            <Header></Header>
            <About />
            <TaxForm />
            <Counter />
            <Footer></Footer>
        </div>
    )
}
