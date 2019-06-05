import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/home.css'

import HeaderContainer from './header';
import MiddleText from './middletext';
import Back_Img from './backgroundimg';

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
                <MiddleText />
                <Back_Img/>
            </div>
        )
    }
}

export default Home;