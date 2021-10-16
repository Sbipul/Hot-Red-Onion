import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Error.css'

const Error = () => {
    const history = useHistory()
    const backHOME = () => {
        history.push('/home')
    }
    return (
        <Container className="err">
            <div className="error">
                <h1>Error <span>404</span></h1>
                <button className="bg-success text-light p-3 border-0 rounded" onClick={backHOME}>Back to Home</button>
            </div>
        </Container>
    );
};

export default Error;