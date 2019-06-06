import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/backgroundimg.css'

import ImageTest from '../../img/054a455d-901b-4d61-8f04-f26c960cfc6f_200x200.png';

function Back_Img() {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <div className="background-cont">
                   <img src = {ImageTest} alt =""></img>
                    </div>
                    </Col>
            </Row>
        </div>
    )
}

export default Back_Img;