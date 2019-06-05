import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/header.css'

import ControlledCarousel from './Carousel';


function HeaderContainer() {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <div className="header_Container">
                        <ControlledCarousel/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HeaderContainer;