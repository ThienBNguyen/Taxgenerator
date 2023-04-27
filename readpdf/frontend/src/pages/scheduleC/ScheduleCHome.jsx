import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
import ScheduleCFormSimple from './ScheduleCFormSimple'
export default function ScheduleCHome() {
    return (
        <div>
            <Header></Header>
            <About />
            <ScheduleCFormSimple />
            <Footer></Footer>
        </div>
    )
}
