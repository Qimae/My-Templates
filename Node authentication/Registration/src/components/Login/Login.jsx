import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();


    const Signin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/login', {
                username: username,
                password: password
            });
            alert("User Logged in");
            history('/welcome');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <div id='Login'>
            <h2>Login</h2>
            <Form onSubmit={Signin}>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value) } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" autoComplete='password' value={password} onChange={(e) => setPassword(e.target.value) } />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </div>
    )
}

export default Login