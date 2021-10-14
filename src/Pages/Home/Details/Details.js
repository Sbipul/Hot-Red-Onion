import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'
import { BsCartCheckFill } from "react-icons/bs";


const Details = () => {

    const {id} = useParams()

    const [allDetails,setAllDetails] = useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setAllDetails(data.find(select => parseInt(select.id) === parseInt(id))))
    } ,[])



    return (
        <div>
            <div className="row py-5">
                <div className="col-md-6 p-2">
                <div style={{height:'60vh',width:'65%',margin:'0 auto',textAlign:'left'}}>
                    <h1>{allDetails.name}</h1>
                    <p className="pt-2">{allDetails.des}</p>
                    <div className="d-flex align-items-center">
                        <h1>${allDetails.price}</h1>
                        <div className="mx-3 d-flex align-items-center pricing px-4">
                            <h1 style={{color:'rgb(255, 0, 106)',cursor:'pointer'}} className="mx-2 my-0 p-0" >-</h1>
                            <h3 id="qnty" className="mx-2 my-0 p-0">1</h3>
                            <h2 style={{color:'rgb(255, 0, 106)',cursor:'pointer'}} className="mx-2 my-0 p-0" >+</h2>
                        </div>
                    </div>
                    <button  style={{background:"rgb(255, 0, 106)"}} className="border px-4 mt-3 py-2 text-light rounded-pill" ><BsCartCheckFill className="fs-4 me-3"/>Add</button>
                </div>
                </div>
                <div className="col-md-6 p-2">
                    <div style={{height:'60vh',width:'65%',margin:'0 auto'}}>
                        <img className="w-100 h-100" src={allDetails.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;