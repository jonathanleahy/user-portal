import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Padding from "../Components/Padding";
import NaviBar from "../Components/NaviBar";
import {useSelector} from 'react-redux'
import {Redirect} from "react-router";

function Dashboard() {

    const currentUser = useSelector(state => state.currentUser)

    return (
        currentUser.loggedIn ?
            <div className="App-header">
                <Container>
                    <Row>
                        <Col><NaviBar/></Col>
                    </Row>
                    <Row>
                        <Padding/>
                    </Row>
                    <Row><h1>
                        Hi {currentUser.user.name}, welcome</h1>
                    </Row>
                    <Row><Padding/></Row>
                    <Row>
                        <Col>
                            We don't store the JWT in localhost as this is a security risk.<br/><br/>
                            When you refresh the page you will realise the user details are lost and you will have to login again.<br/><br/>
                            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
                            water
                            spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion
                            desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize
                            bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
                            sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
                            watercress.
                            Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
                        </Col>
                    </Row>
                </Container>
            </div>
            :
            <div>
                <Redirect to="/" />
            </div>

    );
}

export default Dashboard;
