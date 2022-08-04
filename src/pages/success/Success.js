import React from "react";
import { useNavigate } from "react-router-dom";
import thankyou from "../../assets/thankyou.gif";
import success from "../../assets/success.gif";
import Button from "../../components/button/Button";
import "./Success.css";

const Success=()=>{
    const navigate=useNavigate();
    const gotoLogin=()=>{
        navigate("/login")
    }
    return(
        <div className="container-box success">
            <div className="hero-div">
                <img src={success} alt="thankyou animation" />
            </div>
            <div className="content-box">
                <h2>Thank you!</h2>
                <p>Your account has been successfully verified</p>
                <Button className="primary-btn" label="Login" handleClick={gotoLogin}/>
            </div>
        </div>
    )
}

export default Success;