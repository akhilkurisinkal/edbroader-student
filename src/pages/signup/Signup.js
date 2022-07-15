import {React,useState} from "react";
import Textbox from "../../components/textbox/Textbox";
import "./Signup.css";
import user from "../../assets/user.svg";
import email from "../../assets/email.svg";
import lock from "../../assets/lock.svg";
import Button from "../../components/button/Button";
import signuphero from "../../assets/signuphero.svg";

const Signup=()=>{
    const [signupData,setSignupData]=useState({});
    return(
        <div className="container-box signup">
            <div className="hero-div">
               <h2>You are few steps away from discovering your higher education opportunities.</h2>
               <img src={signuphero} alt="signup"/>
            </div>
            <div className="content-box">
                <h2>Create<br/>Account</h2>
                <form>
                    <Textbox type="text" imageName="user" icon={user} placeholder="Name" />
                    <Textbox type="email" imageName="email" icon={email} placeholder="Email" />
                    <Textbox type="password" imageName="password" icon={lock} placeholder="Password" />
                    <Button className="primary-btn" label="Create Account"/>
                </form>

                <div>
                    <p>Already have an account?</p>
                    <Button className="secondary-btn" label="Login"/>
                </div>
            </div>
            
        </div>
    )
}

export default Signup;