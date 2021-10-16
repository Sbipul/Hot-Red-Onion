import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import FoodItem from '../FoodItem/FoodItem';
import './Menu.css'

const Menu = () => {
    const history = useHistory()
    const {breakfast,dinner,lunch,meals} = useAuth()

    const checkOut = () => {
        history.push('/cart')
    }
    return (
        <div>
            <Container>
                <div id="foods" className="d-flex justify-content-between w-50 pt-5 mx-auto">
                    <input type="button" className="meal" onClick={breakfast} value="Breakfast" style={{cursor:'pointer',textAlign:'center'}}></input>
                    <input type="button" className="meal" onClick={lunch} value="Lunch" style={{cursor:'pointer',textAlign:'center'}}></input>
                    <input type="button" className="meal" onClick={dinner} value="Dinner" style={{cursor:'pointer',textAlign:'center'}}></input>
                </div>
            <Row xs={1} md={3} className="g-4 mt-5">
                {
                    meals.map(meal => <FoodItem key={meal.id} meal={meal}></FoodItem>)
                }
            </Row>
            <div className="w-25 mt-5 mx-auto">
                <button style={{background:"rgb(255, 0, 106)"}} onClick={checkOut} className="text-center border fw-bold rounded text-light p-2">Check Out Your food</button>
            </div>
            </Container>
        </div>
    );
};

export default Menu;