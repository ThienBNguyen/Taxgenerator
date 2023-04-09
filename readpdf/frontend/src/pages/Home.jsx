import React from 'react'
import About from './About'
import Header from '../components/Header'
import TaxForm from './TaxForm'
export default function Home() {
    return (
        <div>
            <Header></Header>
            <About />
            <TaxForm></TaxForm>
        </div>
    )
}
