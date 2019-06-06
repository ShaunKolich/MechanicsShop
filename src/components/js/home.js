import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/home.css'

import HeaderContainer from './header';
import MiddleText from './middletext';
import BackImg from './backgroundimg';

class Home extends Component {
    render() {
        return (
            <div className="Page">
                <Row>
                    <Col xs="12">
                      <HeaderContainer/>
                    </Col>
                </Row>
                <MiddleText />
                <BackImg/>
            </div>
        )
    }
}

export default Home;