import React from 'react';
import '../../less/websiteDisplay.css';
import { Container, Row, Col } from 'fluid-react';


function DisplayWebsite() {
    return (
        <div className="main_Container">
            <Container>
                <Row>
                    <Col xs="8">Logo Here</Col>
                    <Col xs="4">Contact</Col>
                    <Col xs="8">Logo Here 2</Col>
                    <Col xs="4">Main Navigation</Col>
                </Row>

                <Row>
                    <Col xs="12">
                        Header Image
                <Row>
                            <Col xs="10" sm="6">
                                Header Image To
                    </Col>
                            <Col xs="2" sm="6">
                                Request a Quote
                    </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        Our Services
                <Row>
                            <Col xs="8" sm="6">
                                Boxes of Services
                    </Col>
                            <Col xs="4" sm="6">
                                Contact Form
                    </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>About Us</Col>
                    <Col>Picture</Col>
                </Row>
                <Row>
                    <Col xs="9">
                        Our Products
                <Row>
                            <Col xs="8" sm="6">
                                Products
                    </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>Testimonials</Col>

                </Row>
            </Container>
        </div>
    )
}

export default DisplayWebsite;