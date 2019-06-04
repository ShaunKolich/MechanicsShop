import React from 'react';
import '../../less/websiteDisplay.css';
import { Container, Row, Col } from 'fluid-react';


function DisplayWebsite() {
    return (
        <div className="main_Container">
            <Container>
                <Row>
                    <div className ="logo_container">
                    <Col xs="8"></Col>
                    <div className="logo">Logo Here
                    </div>
                    </div>
                    <Col xs="4">Contact</Col>
                    <div className="contactInfo">
                    </div>
                    <Col xs="8"></Col>
                    <Col xs="4">Main Navigation</Col>
                    <div className="topNav">
                    </div>
                </Row>

            </Container>
        </div>

    )
}

export default DisplayWebsite;