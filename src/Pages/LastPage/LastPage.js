import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './LastPage.css'

const LastPage = () => {
    const history = useHistory()
    const backHOME = () => {
        history.push('/home')
    }
    return (
        <div style={{height:'60vh'}}>
            <Container>
                <div class="box my-5 py-5">
                    <div>
                        <h1>Thank you...</h1>
                        <p style={{color:'rgb(255, 0, 106)'}}>Order Confirmed!!! <br /> hover me to see magic!!!</p>
                        <p>Come again sir</p>
                    </div>
                    <span class="subBox-1"></span>
                    <span class="subBox-2"></span>
                    <span class="subBox-3"></span>
                    <span class="subBox-4"></span>
                </div>
                <button className="bg-success text-light p-3 border-0 rounded" onClick={backHOME}>Back to Home</button>
            </Container>
        </div>
    );
};

export default LastPage;