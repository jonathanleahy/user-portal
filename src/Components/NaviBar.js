import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import {useHistory} from "react-router";

export default function NaviBar() {

    const currentUser = useSelector(state => state.currentUser)

    const dispatch = useDispatch()

    let history = useHistory();

    return (
        <>
            <Navbar>
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            width={30}
                            height={30}
                            className="ml-3"
                            src="ecology-and-environment.svg"
                            alt="Generic placeholder"
                        />{' '}Generic User Portal</Navbar.Brand>
                    <Navbar.Toggle/>
                </Link>
                {currentUser.loggedIn ?
                    <>
                        <Link to="/dashboard">
                            <Navbar.Brand href="dashboard">
                                <img
                                    width={30}
                                    height={30}
                                    className="ml-3"
                                    src="dashboard.svg"
                                    alt="Generic placeholder"
                                />{' '}Dashboard</Navbar.Brand>
                        </Link>
                    </>
                    : <></>
                }

                <Navbar.Collapse className="justify-content-end">
                    {
                        currentUser.loggedIn ?
                            <>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{currentUser.user.name}</a>&nbsp;
                                </Navbar.Text>
                                <Button variant="outline-primary"
                                        onClick={() => {
                                            dispatch(allActions.userActions.logOut());
                                            history.push('/')
                                        }}>Logout</Button>
                            </>
                            :
                            <>
                                <Navbar.Text>
                                    <Link to="/login"><Button variant="outline-primary">Sign In</Button></Link>
                                </Navbar.Text>
                            </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

/*
*/
