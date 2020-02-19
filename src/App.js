import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NaviBar from "./Components/NaviBar";
import {Col, Container, Row} from "react-bootstrap";
import Media from "react-bootstrap/Media";

function App() {
    return (
        <div className="App" className="App-header">

            <Container>
                <Row>
                    <Col><NaviBar/></Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col><h3>Media Heading</h3>
                        <p>Lorem ipsum dolor amet irony yr in, before they sold out jean shorts ex 3 wolf moon nisi
                        pinterest. Gochujang veniam quis pork belly actually. Crucifix consequat portland shabby chic.
                        Heirloom cloud bread qui consequat everyday carry taiyaki meggings truffaut distillery. In
                        hexagon taiyaki actually.
Beard hell of
                        intelligentsia prism proident aliqua eiusmod irony health goth craft beer mixtape copper mug.
                        Pariatur wayfarers pinterest drinking vinegar, prism butcher mumblecore. Helvetica small batch
                        seitan swag taxidermy, truffaut meh artisan ethical. Tofu fam hoodie iPhone selvage salvia
                            consectetur pok pok vegan cardigan before they sold out ethical.</p><p><Button>Learn More...</Button></p></Col>
                    <Col>
                        <img
                            width={250}
                            height={250}
                            className="ml-3"
                            src="ecology-and-environment.svg"
                            alt="Generic placeholder"
                        />
                    </Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col>
                        <Media>
                            <Media.Body>
                                <h5>Media Heading</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    Donec lacinia congue felis in faucibus.
                                </p>
                            </Media.Body>
                            <img
                                width={64}
                                height={64}
                                className="ml-3"
                                src="64x64.svg"
                                alt="Generic placeholder"
                            />
                        </Media> </Col>
                    <Col>
                        <Media>
                            <Media.Body>
                                <h5>Media Heading</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    Donec lacinia congue felis in faucibus.
                                </p>
                            </Media.Body>
                            <img
                                width={64}
                                height={64}
                                className="ml-3"
                                src="64x64.svg"
                                alt="Generic placeholder"
                            />
                        </Media>
                    </Col>
                    <Col><Media>
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                            </p>
                        </Media.Body>
                        <img
                            width={64}
                            height={64}
                            className="ml-3"
                            src="64x64.svg"
                            alt="Generic placeholder"
                        />
                    </Media>
                    </Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
                <Row>
                    <Col>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik"
                                              title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
                                                                                  title="Flaticon">www.flaticon.com</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <br/><br/><br/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
