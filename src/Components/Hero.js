import React from 'react'
import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Hero() {
    return (
        <>
            <Col><h3>You've Arrived...</h3>
                <p>Lorem ipsum dolor amet irony yr in, before they sold out jean shorts ex 3 wolf moon nisi
                    pinterest. Gochujang veniam quis pork belly actually. Crucifix consequat portland shabby
                    chic.
                    Heirloom cloud bread qui consequat everyday carry taiyaki meggings truffaut distillery. In
                    hexagon taiyaki actually.
                    Beard hell of
                    intelligentsia prism proident aliqua eiusmod irony health goth craft beer mixtape copper
                    mug.
                    Pariatur wayfarers pinterest drinking vinegar, prism butcher mumblecore. Helvetica small
                    batch
                    seitan swag taxidermy, truffaut meh artisan ethical. Tofu fam hoodie iPhone selvage salvia
                    consectetur pok pok vegan cardigan before they sold out ethical.</p>
                    <p><Button variant="secondary">Learn
                    More...</Button></p></Col>
            <Col>
                <div className="App-centered">
                    <img
                        width={250}
                        height={250}
                        className="ml-3"
                        src="ecology-and-environment.svg"
                        alt="Generic placeholder"
                    />
                </div>
            </Col>
        </>
    )
}
