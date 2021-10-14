import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodItem from '../FoodItem/FoodItem';
import './Menu.css'

const Menu = () => {
    const [meals,setMeals] = useState([])
    const [items,setItems] = useState([])


    useEffect(()=> {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])


    useEffect(()=> {
        breakfast()
    },[items])


    const breakfast = () => {
        const update1 = [...items]
        const newItem1 = update1.slice(0,6)
        setMeals(newItem1)
    }
    const lunch = () => {
        const update2 = [...items]
        const newItem2 = update2.slice(7,13)
        console.log(newItem2.length)
        setMeals(newItem2)
    }
    const dinner = () => {
        const update3 = [...items]
        const newItem3 = update3.slice(13,19)
        console.log(newItem3.length)
        setMeals(newItem3)
    }



    return (
        <div>
            <Container>
                <div className="d-flex justify-content-between w-25 pt-5 mx-auto">
                    <p onClick={breakfast} style={{cursor:'pointer'}}>Breakfast</p>
                    <p onClick={lunch} style={{cursor:'pointer'}}>Lunch</p>
                    <p onClick={dinner} style={{cursor:'pointer'}}>Dinner</p>
                </div>
            <Row xs={1} md={3} className="g-4 mt-5">
                {
                    meals.map(meal => <FoodItem key={meal.id} meal={meal}></FoodItem>)
                }
            </Row>
            <div className="w-25 mt-5 mx-auto">
                <button style={{background:"rgb(255, 0, 106)"}} className="text-center border fw-bold rounded text-light p-2">Check Out Your food</button>
            </div>
            </Container>
        </div>
    );
};

export default Menu;