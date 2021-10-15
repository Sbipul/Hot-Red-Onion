import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Details.css'
import { BsCartCheckFill } from "react-icons/bs";
import useAuth from '../../../hooks/useAuth';


const Details = () => {
    
const {id} = useParams()
const history = useHistory()
const [allDetails,setAllDetails] = useState([])

const [num,setNum] = useState(1)

useEffect(()=>{

    fetch('/menu.json')
    .then(res => res.json())
    .then(data => setAllDetails(data.find(select => parseInt(select.id) === parseInt(id))))
} ,[])

const initPrice = parseFloat(allDetails.price)

const [price,setPrice] = useState(0)

const increase = () => {
    let newNum = num+1;
    let newPrice = (initPrice * num) + initPrice
    setPrice(newPrice)
    setNum(newNum)
}

const decrease = () => {
    if (num <= 1) {
        return
    }
    let newNum = num-1;
    let newPrice = Math.abs(initPrice - (num * initPrice))
    setPrice(newPrice)
    setNum(newNum)
}

const backtoPre = () => {
    history.push('/home')
}



const {addToCart} = useAuth()


    return (
        <div>
            <div className="row py-5">
                <div className="col-md-6 p-2">
                <div style={{height:'72vh',width:'75%',margin:'0 auto',textAlign:'left'}}>
                    <h1>{allDetails.name}</h1>
                    <p className="pt-2">{allDetails.des}</p>
                    <div className="d-flex align-items-center">
                        <h1>${!price ? (allDetails.price) : price.toFixed(1)}</h1>
                        <div className="mx-3 d-flex align-items-center pricing px-4">
                            <h1 onClick={decrease} style={{color:'rgb(255, 0, 106)',cursor:'pointer'}} className="mx-2 my-0 p-0" >-</h1>
                            <h3 id="qnty" className="mx-2 my-0 p-0">{num}</h3>
                            <h2 onClick={increase} style={{color:'rgb(255, 0, 106)',cursor:'pointer'}} className="mx-2 my-0 p-0" >+</h2>
                        </div>
                    </div>
                    <button onClick={()=>addToCart(num,price)} style={{background:"rgb(255, 0, 106)"}} className="border px-4 mt-3 py-2 text-light rounded-pill" ><BsCartCheckFill className="fs-4 me-3"/>Add</button>
                    <button onClick={backtoPre} className="border px-4 ms-3 mt-3 py-2 bg-warning text-dark rounded-pill" >Back to previous Page</button>
                </div>
                </div>
                <div className="col-md-6 p-2">
                    <div style={{height:'60vh',width:'63%',margin:'0 auto'}}>
                        <img className="w-100 h-100" src={allDetails.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;