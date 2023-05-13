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
                <Navbar key={expand} expand={expand} className="bg-dark text-white-50">
                    <Container fluid>
                        <Navbar.Brand className='text-white-50'> <Link
                            to="/" className="text-decoration-none text-secondary " >Tax Generator </Link></Navbar.Brand>
                        <button className='text-secondary  text-uppercase btn btn-outline-primary btnLanguage' onClick={toggleLanguage}>{currentLanguage}</button>
                        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navbar-toggle-custom" /> */}
                        {/* <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="navbar-toggle-custom"
                        > */}
                        {/* <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Link
                                        to="/" relative="path"
                                    ><Button variant="">Home</Button></Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header> */}
                        {/* <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link className='me-2 '
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
                                </Nav>
                            </Offcanvas.Body> */}
                        {/* </Navbar.Offcanvas> */}
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

// export default  header = () => {
//     const [currentLanguage, setCurrentLanguage] = useState('en');
//     const handleLanguageChange = () => {
//         if (currentLanguage === 'en') {
//             setCurrentLanguage('vi');
//         } else {
//             setCurrentLanguage('en');
//         }
//     };
//     return (
//         <>
//             {['sm'].map((expand) => (
//                 <Navbar key={expand} expand={expand} className="bg-dark text-white-50">
//                     <Container fluid>
//                         <Navbar.Brand className='text-white-50'> <Link
//                             to="/" className="text-decoration-none text-secondary " >Tax Generator </Link></Navbar.Brand>
//                         <button>header</button>
//                         {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navbar-toggle-custom" /> */}
//                         {/* <Navbar.Offcanvas
//                             id={`offcanvasNavbar-expand-${expand}`}
//                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                             placement="end"
//                             className="navbar-toggle-custom"
//                         > */}
//                         {/* <Offcanvas.Header closeButton>
//                                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                                     <Link
//                                         to="/" relative="path"
//                                     ><Button variant="">Home</Button></Link>
//                                 </Offcanvas.Title>
//                             </Offcanvas.Header> */}
//                         {/* <Offcanvas.Body>
//                                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                                     <Link className='me-2 '
//                                         to="/schedulec" relative="path"
//                                     ><Button variant="primary">Schedule C</Button></Link>
//                                     <Link className='me-2'
//                                         to="/scheduled" relative="path"
//                                     ><Button variant="primary">Schedule D</Button></Link>
//                                     <Link className='me-2'
//                                         to="/schedulee" relative="path"
//                                     ><Button variant="primary">Schedule E</Button></Link>
//                                     <Link
//                                         to="/donate" relative="path"
//                                     ><Button variant="primary">Donate</Button></Link>
//                                 </Nav>
//                             </Offcanvas.Body> */}
//                         {/* </Navbar.Offcanvas> */}
//                     </Container>
//                 </Navbar>
//             ))}
//         </>
//     )
// }
