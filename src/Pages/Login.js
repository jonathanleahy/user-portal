import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Padding from "../Components/Padding";
import {LoginForm} from "./LoginForm";
import NaviBar from "../Components/NaviBar";

function Login() {
    return (
        <div className="App-header">
            <Container>
                <Row>
                    <Col><NaviBar/></Col>
                </Row>
                <Row>
                    <Padding/>
                </Row>
                <Row><h1>
                    Welcome Back to the Generic User Portal</h1>
                </Row>
                <Row><Padding/></Row>
                <Row>
                    <Col>
                        <LoginForm/>
                    </Col>
                    <Col>
                        Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water
                        spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion
                        desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize
                        bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
                        sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                        Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
