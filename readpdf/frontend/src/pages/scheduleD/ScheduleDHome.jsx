import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
import ScheduleDFormSimple from './ScheduleDFormSimple'
export default function ScheduleDHome() {
    return (
        <div>
            <Header></Header>
            <About />
            <ScheduleDFormSimple />
            <Footer></Footer>
        </div>
    )
}
