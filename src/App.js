import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/NaviBar";
import {Col, Container, Row} from "react-bootstrap";
import Hero from "./Components/Hero";
import Padding from "./Components/Padding";
import Footing from "./Components/Footing";
import MediaBlock from "./Components/MediaBlock";

function App() {
    return (
        <div className="App-header">
            <Container>
                <Row>
                    <Col><NaviBar/></Col>
                </Row>
                <Row>
                    <Padding/>
                </Row>
                <Row>
                    <Hero/>
                </Row>
                <Row>
                    <Padding/>
                </Row>
                <Row>
                    <Col>
                        <MediaBlock/>
                    </Col>
                    <Col>
                        <MediaBlock/>
                    </Col>
                    <Col>
                        <MediaBlock/>
                    </Col>
                </Row>
                <Row>
                    <Padding/>
                </Row>
                <Row>
                    <Footing/>
                </Row>
                <Row>
                    <Padding/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
