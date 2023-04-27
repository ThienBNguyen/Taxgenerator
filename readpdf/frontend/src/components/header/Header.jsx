import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
export default function header() {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark text-white-50">
                    <Container fluid>
                        <Navbar.Brand className='text-white-50'> <Link
                            to="/" className="text-decoration-none text-secondary " >Tax Generator</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Link
                                        to="/" relative="path"
                                    ><Button variant="">Home</Button></Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link className='me-2'
                                        to="/schedulec" relative="path"
                                    ><Button variant="primary">Schedule C</Button></Link>
                                    <Link className='me-2'
                                        to="/scheduled" relative="path"
                                    ><Button variant="primary">Schedule D</Button></Link>
                                    <Link className='me-2'
                                        to="/schedulee" relative="path"
                                    ><Button variant="primary">Schedule E</Button></Link>
                                    <Link
                                        to="/donate" relative="path"
                                    ><Button variant="primary">Donate</Button></Link>
                                    {/* <Nav.Link href="#action1"><Button variant="outline-light">Sign in </Button></Nav.Link>
                                    <Nav.Link href="#action2"><Button variant="primary">Get Started</Button></Nav.Link> */}

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
