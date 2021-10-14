import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../utilities/logo.jpg'
import './Footer.css'


const Footer = () => {
    return (
        <div className="bg-dark py-5">
        <Container>
            <div className="row">
                <div className="col-12 col-md-7">
                    <div style={{width:'220px',height:'50px'}}>
                        <img className="h-100 w-100" src={logo} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="d-flex justify-content-between">
                        <ul>
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign up to Deliver</li>
                            <li>Add your restaurent</li>
                        </ul>
                        <ul>
                            <li>Get Help</li>
                            <li>Read FAQs</li>
                            <li>View All city</li>
                            <li>Restaurent near me</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 col-md-8 text-start text-light">
                    <p>Copiright &copy; 2020 Online food</p>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-between text-light">
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Footer;