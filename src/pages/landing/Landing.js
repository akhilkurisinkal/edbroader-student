import React from "react";
import { useNavigate } from "react-router-dom";
import boyStudying from "../../assets/boyStudying.gif";
import Button from "../../components/button/Button";
import "./Landing.css";
const Landing=()=>{
    const navigate=useNavigate();
    const getStarted=()=>{
        navigate("/signup");
    }
    return(
        <div className="container-box landing">
            <div className="hero-div">
                <img className="hero-image" src={boyStudying} alt="boy studying animation"/>
            </div>
            <div className="content-box">
                <h2>Be ready to go global.</h2>
                <p>Explore the best countries, schools and academic programs with edbroader.</p>
                <Button id="getStarted" className="primary-btn" label="Get Started" handleClick={getStarted} />
                <p>Already using edbroader? <a href="/login">Login here</a></p>
            </div>
        </div>
    )
}
export default Landing;