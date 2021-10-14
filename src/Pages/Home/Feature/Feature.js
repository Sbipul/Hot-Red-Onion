import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaBusAlt,FaArrowCircleRight } from 'react-icons/fa';
import './Feature.css'

const Feature = () => {

    const [services,setServices] = useState([])

    useEffect(()=> {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <Container>
            <div style={{width:'42%',textAlign:'left',marginTop:'4rem'}}>
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
                                    <p className="fw-bold">See More   <FaArrowCircleRight style={{fontSize:'27px',color:'rgb(1, 231, 158)'}}/></p>
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