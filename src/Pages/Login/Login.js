import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signLogo from '../../utilities/logo2.jpg'

const Login = () => {
    const {err,logInMan,handleEmail,handlePassword} = useAuth()
    return (
        <div className="signUpBg">
            <div className="pt-5">
                <div className="mx-auto" style={{width:'270px',height:'60px'}}>
                    <img className="h-100 w-100" src={signLogo} alt="" />
                </div>
                <div style={{width:'30%'}} className="mx-auto mt-2">
                    <input onBlur={handleEmail} className="signPut" placeholder="Your Email" type="email" name="" id="" />
                    <input onBlur={handlePassword} className="signPut" placeholder="Your Password" type="password" name="" id="" />
                </div>
                <Link to="/sign">New User??</Link>
                <p>{err}</p>
                <div style={{width:'30%'}} className="mx-auto mt-2">
                    <button onClick={logInMan} style={{background:'rgb(255, 0, 106)',borderRadius:'4px'}} className="w-100 text-light p-3 border-0">Log in</button><br /><br />
                </div>
            </div>
        </div>
    );
};

export default Login;
