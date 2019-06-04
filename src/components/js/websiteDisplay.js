import React, { Component } from 'react';
import '../../less/websiteDisplay.css';
import { Container, Row, Col } from 'fluid-react';
import logo from '../../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// page for navigation
import Home from './home';
import Services from './services';
import Specials from './specials';
import Quote from './quote';
import Appointment from './appointment';

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
                                <div className="topNav">
                                    <ul>
                                        <li><Link to={'/'} className="nav-link">Home </Link></li>
                                        <li><Link to={'/services'} className="nav-link">Services</Link></li>
                                        <li><Link to={'/specials'} className="nav-link">Specials</Link></li>
                                        <li><Link to={'/appointment'} className="nav-link">Appointment</Link></li>
                                        <li><Link to={'/quote'} className="nav-link">Quote</Link></li>
                                    </ul>
                                </div>
                                </div>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/services' component={Services} />
                                    <Route path='/specials' component={Specials} />
                                    <Route exact path='/appointment' component={Appointment} />
                                    <Route path='/quote' component={Quote} />
                                </Switch>

                            
                        </Row>

                    </Container>
                </div>
            </Router>
        );
    }
}

export default DisplayWebsite;