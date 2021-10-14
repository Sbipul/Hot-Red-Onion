import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FoodItem = (props) => {

    const {id,name,price,des,img} = props.meal
    const history = useHistory()
    const viewDetails = () => {
        history.push(`/details/${id}`)
    }
    return (
        <Col>
            <Card onClick={viewDetails} className="border-0">
                <Card.Img className="w-50 mx-auto" variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{des.slice(0,30)}</Card.Text>
                <Card.Title className="fw-bold fs-3">${price}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default FoodItem;