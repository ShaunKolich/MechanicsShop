import React, { Component } from 'react';
import '../../less/websiteDisplay.css';
import { Container, Row, Col } from 'fluid-react';
import logo from '../../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class DisplayWebsite extends Component {
    render() {
        return (
            <Router>
            <div className="main_Container">
                <Container>
                    <Row>
                        <div className="logo_container">
                            <Col xs="8"></Col>
                            <div className="logo"><img src={logo} alt="logo"></img>
                            </div>
                        </div>
                        <div className="contact_nav_container">
                            <Col xs="4"></Col>
                            <div className="contactInfo">
                                <ul>
                                    <li><i class="fas fa-phone"></i><span>555-555-5555</span></li>
                                    <li><i class="far fa-envelope"></i><span>support@support.com</span></li>
                                    <li><i class="fas fa-map-marker-alt"></i><span>5555 W. SomeStreet, SomeCity, FL 55555</span></li>
                                </ul>
                            </div>
                            <Col xs="8"></Col>
                            <Col xs="4"></Col>
                            <div className="topNav">Main Navigation

                        </div>
                        </div>
                    </Row>

                </Container>
            </div>
            </Router>
        );
    }
}

export default DisplayWebsite;