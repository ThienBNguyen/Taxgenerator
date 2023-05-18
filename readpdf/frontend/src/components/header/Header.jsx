import React, { useContext } from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import LanguageContext from '../../services/LanguageContext';

export default function Header() {
  const {  currentLanguage,toggleLanguage } = useContext(LanguageContext);
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" navbarDisplay bg-dark text-white-50">
                    <Container fluid>
                        <Navbar.Brand className='text-white-50'> <Link
                            to="/" className="text-decoration-none text-secondary " >Tax Generator </Link></Navbar.Brand>
                        <button className='text-secondary  text-uppercase btn btn-outline-primary btnLanguage' onClick={toggleLanguage}>{currentLanguage}</button>
                      
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
