import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './WhyUs.css'


const WhyUs = () => {
    const [why,setWhy] = useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => setWhy(data))
    },[])

    return (
        <Container>
            <h1>About Us</h1>
            <div className="row align-items-center py-5">
                <div className="col-12 col-md-7 text-start">
                    <h2 className="text-success">{why[19]?.name}</h2>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed assumenda voluptatum officiis illo, laborum libero exercitationem soluta impedit, nihil, consectetur officia nobis tenetur odit ipsum? Odio incidunt, sed necessitatibus commodi corrupti sit! Iusto, voluptatem voluptates ipsam tempora numquam similique consequuntur illo alias dolor minima illum quod aliquam beatae fugiat voluptas possimus! Ex officia debitis omnis quae voluptate sint architecto.</p>
                </div>
                <div className="col-12 col-md-5">
                    <img className="w-75 mx-auto" src={why[19]?.img} alt="" />
                </div>
            </div>
            <div className="row align-items-center py-5">
                <div className="col-12 col-md-5">
                    <img className="w-75 mx-auto" src={why[20]?.img} alt="" />
                </div>
                <div className="col-12 col-md-7 text-end">
                    <h2 className="text-success">{why[20]?.name}</h2>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed assumenda voluptatum officiis illo, laborum libero exercitationem soluta impedit, nihil, consectetur officia nobis tenetur odit ipsum? Odio incidunt, sed necessitatibus commodi corrupti sit! Iusto, voluptatem voluptates ipsam tempora numquam similique consequuntur illo alias dolor minima illum quod aliquam beatae fugiat voluptas possimus! Ex officia debitis omnis quae voluptate sint architecto.</p>
                </div>
            </div>
            <div className="row align-items-center py-5">
                <div className="col-12 col-md-7 text-start">
                    <h2 className="text-success">{why[21]?.name}</h2>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed assumenda voluptatum officiis illo, laborum libero exercitationem soluta impedit, nihil, consectetur officia nobis tenetur odit ipsum? Odio incidunt, sed necessitatibus commodi corrupti sit! Iusto, voluptatem voluptates ipsam tempora numquam similique consequuntur illo alias dolor minima illum quod aliquam beatae fugiat voluptas possimus! Ex officia debitis omnis quae voluptate sint architecto.</p>
                </div>
                <div className="col-12 col-md-5">
                    <img className="w-75 mx-auto" src={why[21]?.img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default WhyUs;