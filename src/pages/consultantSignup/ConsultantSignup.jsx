import "./ConsultantSignup.css";
import {React,useState,useEffect,useContext} from "react";
import Textbox from "../../components/textbox/Textbox";
import user from "../../assets/form-icons/user.svg";
import email from "../../assets/form-icons/email.svg";
import lock from "../../assets/form-icons/lock.svg";
import Button from "../../components/button/Button";
import agent from "../../assets/agent.svg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
const ConsultantSignup=()=>{
    const page=useContext(AppContext);
    const [userData,setUserData]=useState(
        {
            name:'',
            email:'',
            password:''
        }
    );

    useEffect(()=>{
        page.setPageName("signup");
    },[page])
    const [errors,setErrors]=useState({
        emailError:""
    });


    const navigate=useNavigate();
    const signupAction=(event)=>{
        event.preventDefault();
        fetch('http://localhost:3000/signup/',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.status!=="success"){
                console.log("Email already registered");
                setErrors({...errors,emailError:"Email already registered"})
            }else{
                localStorage.setItem("id",userData.email);
                console.log("navigating to verification page");
                navigate("/verify");
            }
        });
    }
    const gotoLogin=()=>{
        navigate("/login")
    }
    return(
        <div className="container-main signup">
            <div className="signup-sub hero-div">
               <h2>Register your educational consultancy business and get connected with potential clients. </h2>
               <img src={agent} alt="signup"/>
            </div>
            <div className="signup-sub content-box">
                <h2>Register<br/>Business</h2>
                <form onSubmit={signupAction}>
                    <Textbox type="text" imageName="user" icon={user} placeholder="Name" inputDataChange={(e) => setUserData({...userData, name: e.target.value})} />
                    <Textbox type="email" imageName="email" icon={email} placeholder="Email" inputDataChange={(e) => setUserData({...userData, email: e.target.value})} error={errors.emailError}  />
                    <Textbox type="text" imageName="postalcode" icon={lock} placeholder="Postal Code"  inputDataChange={(e) => setUserData({...userData, postalCode: e.target.value})}/>
                    <Textbox type="text" imageName="country" icon={lock} placeholder="Country" inputDataChange={(e) => setUserData({...userData, password: e.target.value})}/>
                    <Textbox type="text" imageName="city" icon={lock} placeholder="City" inputDataChange={(e) => setUserData({...userData, password: e.target.value})}/>
                    <Textbox type="password" imageName="password" icon={lock} placeholder="Password" minlength="8" inputDataChange={(e) => setUserData({...userData, password: e.target.value})}/>     
                    <Button className="primary-btn" label="Create Account" />
                </form>

                <div>
                    <p>Already have an account?</p>
                    <Button className="secondary-btn" label="Login" handleClick={gotoLogin}/>
                </div>
            </div>
            
        </div>
    )
}

export default ConsultantSignup;