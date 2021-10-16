import React from 'react';
import {Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img from '../../utilities/logo2.jpg'
import { BsCartCheckFill } from "react-icons/bs";
import './Header.css'
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user,logOut,quantities} = useAuth()
    let total = 0
    for (const eachItem of quantities) {
        total = total + parseInt(eachItem)
    }
    const history = useHistory()
    const sign = () => {
        history.push('/sign')
    }
    const login = () => {
        history.push('/login')
    }
    
    return (
        <Navbar bg="light" variant="light" className="shadoW" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/home#home">
                <img
                    src={img}
                    width="150"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <div className="d-flex align-items-center">
                    <Nav.Link as={HashLink} to="/cart"><BsCartCheckFill style={{color:"rgb(255, 0, 106)"}} className="fs-2"/><Badge bg="warning" className="text-dark">{total ? <p className="m-0 anim p-0">{total}</p> : 0}</Badge></Nav.Link>
                        {
                            user.email ? <input className="rounded-pill px-3 py-2 me-3" type="submit" onClick={logOut}  value="Log out"></input> : <input className="rounded-pill px-3 py-2 me-3" type="submit" onClick={login}  value="Login"></input>
                        }
                        <input className="rounded-pill  px-3 py-2 me-3" type="submit" onClick={sign} value="Sign up"></input>
                    </div>
                </Nav>
                </Navbar.Collapse>
        </Container>
</Navbar>
    );
};

export default Header;