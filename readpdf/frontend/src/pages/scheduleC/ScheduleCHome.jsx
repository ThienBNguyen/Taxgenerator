import React from 'react'
import ScheduleCForm from './ScheduleCForm'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import About from '../about/About'
export default function ScheduleCHome() {
    return (
        <div>
            <Header></Header>
            <About />
            <ScheduleCForm></ScheduleCForm>
            <Footer></Footer>
        </div>
    )
}
