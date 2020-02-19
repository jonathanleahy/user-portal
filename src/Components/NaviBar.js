import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function NaviBar() {

    return (
        <>
            <Navbar>
                <Navbar.Brand href="#home">
                    <img
                        width={30}
                        height={30}
                        className="ml-3"
                        src="ecology-and-environment.svg"
                        alt="Generic placeholder"
                    />{' '}Generic User Portal</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/login"><Button variant="outline-primary">Sign In</Button></Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

/*
<Navbar.Text>
    Signed in as: <a href="#login">Mark Otto</a>
</Navbar.Text>
*/
