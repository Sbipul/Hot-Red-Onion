import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaBusAlt,FaArrowCircleRight } from 'react-icons/fa';
import { useHistory } from 'react-router';
import './Feature.css'

const Feature = () => {

    const [services,setServices] = useState([])

    const history = useHistory()
    useEffect(()=> {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const why = () => {
        history.push('/whyUs')
    }

    return (
        <Container>
            <div className="featureText">
                <h1>Why You Choose Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsa sit nobis asperiores autem recusandae corrupti necessitatibus veritatis debitis quidem.</p>
            </div>
            <Row xs={1} md={3} className="g-4 mt-5">
                {
                    services.slice(19,22).map(service => <Col>
                        <Card className="border-0">
                            <Card.Img className="w-100 mx-auto" variant="top" src={service.img} />
                            <Card.Body>
                            
                            <div className="d-flex">
                                <div><FaBusAlt className="icon"/></div>
                                <div style={{textAlign:'left',paddingLeft:'15px'}}>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.des.slice(0,130)}</Card.Text>
                                    <p onClick={why} className="fw-bold" style={{cursor:'pointer'}}>See More   <FaArrowCircleRight style={{fontSize:'27px',color:'rgb(1, 231, 158)'}}/></p>
                                </div>
                                
                            </div>
                            
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Feature;