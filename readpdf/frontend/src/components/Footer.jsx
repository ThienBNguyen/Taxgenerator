import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'
export default function Footer() {
    return (
        <div >
            <div className='footer text-center bg-dark text-white-50 pt-4'>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <h5>About Us</h5>
                            <p>Some text about our company.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <h5>Contact Us</h5>
                            <p>123 Main Street<br />New York, NY 10001<br />Phone: (555) 555-5555</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center p-3">
                    <p>&copy; 2023 Your Company, Inc.</p>
                </div>
            </div>
        </div>
    )
}