import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (username.trim() === '') {
            setErrorMessage('Username cannot be blank');
            return;
        }

        if (password.trim() === '') {
            setErrorMessage('Password cannot be blank');
            return;
        }

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must contain at least 1 upper case letter, 1 lower case letter, and be at least 8 characters long');
            return;
        }
        setErrorMessage('');
        // Submit login data to server
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    );
}

export default Login;
