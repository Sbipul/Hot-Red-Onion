import React from 'react';
import './SignUp.css'
import signLogo from '../../utilities/logo2.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {

    const {googleSign} = useAuth()

    return (
        <div className="signUpBg">
            <div className="pt-5">
                <div className="mx-auto" style={{width:'270px',height:'60px'}}>
                    <img className="h-100 w-100" src={signLogo} alt="" />
                </div>
                <div style={{width:'30%'}} className="mx-auto mt-2">
                    <input className="signPut" placeholder="Your Name" type="text" name="" id="" />
                    <input className="signPut" placeholder="Your Email" type="email" name="" id="" />
                    <input className="signPut" placeholder="Your Password" type="password" name="" id="" />
                    <input className="signPut" placeholder="Re-type Password" type="password" name="" id="" />
                </div>
                <Link to="/login">Already registered</Link>
                <div style={{width:'30%'}} className="mx-auto mt-2">
                    <button style={{background:'rgb(255, 0, 106)',borderRadius:'4px'}} className="w-100 text-light p-3 border-0">Sign up</button><br /><br />
                    <button onClick={googleSign} style={{background:'rgb(255, 0, 106)',borderRadius:'4px'}} className="w-100 text-light p-3 border-0">Google sign in</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;