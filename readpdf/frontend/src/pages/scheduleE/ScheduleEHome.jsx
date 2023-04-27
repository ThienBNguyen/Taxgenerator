import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
import ScheduleDFormSimple from './ScheduleEFormSimple'
export default function ScheduleEHome() {
    return (
        <div>
            <Header></Header>
            <About />
            <ScheduleDFormSimple />
            <Footer></Footer>
        </div>
    )
}
