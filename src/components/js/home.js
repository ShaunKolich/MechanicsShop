import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/home.css'

import HeaderContainer from './header';
class Home extends Component {
    render() {
        return (
            <div className="Page">
                <Row>
                    <Col xs="12">
                        <h2></h2>
                        <HeaderContainer/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;