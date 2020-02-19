import React from 'react'
import Navbar from "react-bootstrap/Navbar";

export default function NaviBar() {
    return (
        <>
            <Navbar>
                <Navbar.Brand href="#home">User Portal</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
