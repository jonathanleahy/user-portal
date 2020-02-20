import React from 'react'
import {useForm, useField} from 'react-final-form-hooks'
import {Button, Form} from "react-bootstrap";
import allActions from "../actions";
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router";
import * as axios from "axios";
import {toast} from "react-toastify";

export const LoginForm = () => {

    const dispatch = useDispatch()

    let history = useHistory();

    const onSubmit = async values => {

        try {
            const result = await axios.post(
                'http://localhost:3333/login', {
                    username: values.email,
                    password: values.password
                }
            );
            if (result.data) {
                const user = {name: values.email}
                dispatch(allActions.userActions.setUser(user))
                toast("Logged in!");
                history.push('/dashboard')
            } else {
            }
        } catch (e) {
            toast("Couldn't login you in !");
        }



    }

    const validate = values => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    const {form, handleSubmit, pristine, submitting} = useForm({
        onSubmit,
        validate
    })
    const email = useField('email', form)
    const password = useField('password', form)
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Username</Form.Label>
                    <Form.Control type="text" {...email.input} placeholder="Enter Username"/>
                    {email.meta.touched && email.meta.error && (
                        <Form.Text className="text-muted">
                            {email.meta.error}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...password.input} placeholder="Enter password"/>
                    {password.meta.touched && password.meta.error && (
                        <Form.Text className="text-muted">
                            {password.meta.error}
                        </Form.Text>
                    )}
                </Form.Group>

                <Button type="submit" variant="primary" disabled={pristine || submitting}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
