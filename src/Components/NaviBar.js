import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import allActions from "../actions";
import {useHistory} from "react-router";
import {toast} from "react-toastify";

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
                            <Navbar.Brand>
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
                                Signed in as: {currentUser.user.name}&nbsp;
                                <Button variant="outline-primary"
                                        onClick={() => {
                                            sessionStorage.setItem('token', {})
                                            dispatch(allActions.userActions.logOut());
                                            toast(`You are now Logged out!`);
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
