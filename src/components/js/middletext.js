import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/middletext.css'

import Buggati from "../../img/car-49278_1280.jpg";
function MiddleText() {
    return (
        <div className="middle_Text_container">
            <Row>
                <Col xs="10" sm="6">
                    <div className="middle_img">
                        <h2>Need Work Done?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, mi sed fermentum pulvinar, enim tortor dictum.
                        </p>
                        <img src={Buggati}></img>
                    </div>
                </Col>
                <Col xs="2" sm="6">
                    <div className="middle_info">
                        <div className='div1'>
                            <i class="fas fa-chart-line"></i>
                            <i class="fas fa-cogs"></i>
                            <i class="far fa-clock"></i>
                        </div>
                        <Row>
                        <div className="div2">
                            <h2 id="h2">Years in Service<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, mi sed fermentum pulvinar, enim tortor dictum.</p></h2>
                            <h2 id="h2">Full Integrity<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, mi sed fermentum pulvinar, enim tortor dictum.</p></h2>
                            <h2 id="h2">Quick and Efficient<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum, mi sed fermentum pulvinar, enim tortor dictum.</p></h2>
                            </div>
                            </Row>
                    </div>
                </Col>
            </Row>

        </div>

    )
}
export default MiddleText;

