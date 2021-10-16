import React from 'react';
import './SignUp.css'
import signLogo from '../../utilities/logo2.jpg'
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {

    const {err,googleSign,handlePassword,handleEmail,handleSignUpMan} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';

    const newHandleGoogle = () => {
        googleSign()
        .then(res => {
            history.push(redirect_uri)
        })

    }
    
    return (
        <div className="signUpBg">
            <div className="pt-5">
                <div className="mx-auto" style={{width:'270px',height:'60px'}}>
                    <img className="h-100 w-100" src={signLogo} alt="" />
                </div>
                <div style={{width:'30%'}} className="mx-auto mt-2">
                    <input className="signPut" placeholder="Your Name" type="text" name="" id="" />
                    <input onBlur={handleEmail} className="signPut" placeholder="Your Email" type="email" name="" id="" />
                    <input onBlur={handlePassword} className="signPut" placeholder="Your Password" type="password" name="" id="" />
                    <input className="signPut" placeholder="Re-type Password" type="password" name="" id="" />
                </div>
                <Link to="/login">Already registered</Link>
                <p>{err}</p>
                <div style={{width:'30%'}} className="mx-auto mt-2">
                    <button onClick={handleSignUpMan} style={{background:'rgb(255, 0, 106)',borderRadius:'4px'}} className="w-100 text-light p-3 border-0">Sign up</button><br /><br />
                    <button onClick={newHandleGoogle} style={{background:'rgb(255, 0, 106)',borderRadius:'4px'}} className="w-100 bg-warning text-dark p-3 border-0">Google sign in</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;