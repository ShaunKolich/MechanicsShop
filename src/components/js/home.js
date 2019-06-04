import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/home.css'

class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <Row>
                    <Col xs="12">
                        <h2>Home</h2>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;