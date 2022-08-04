import {React,useState,useContext,useEffect} from "react";
import Textbox from "../../components/textbox/Textbox";
import "./Login.css";
import email from "../../assets/form-icons/email.svg";
import lock from "../../assets/form-icons/lock.svg";
import Button from "../../components/button/Button";
import loginhero from "../../assets/loginhero.svg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";

const Login=()=>{
    const page=useContext(AppContext);
    const [errors,setErrors]=useState({
        credentialError:""
    })
    const [loginData,setLoginData]=useState({
        id:"",
        password:""
    })
    useEffect(()=>{
        page.setPageName("login");
    },[page])
    const navigate=useNavigate();
    const loginUser=(event)=>{
        event.preventDefault();
        fetch('http://localhost:3000/login',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(loginData)  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="invalid"){
                console.log("invalid credentials");
                setErrors({...errors,credentialError:"Invalid credentials"});
            }else{
                localStorage.setItem("accessToken",data.accessToken);
                if(data.onboarded!=="yes"){
                    navigate("/onboarding");
                }else{
                    console.log(data.accessToken);
                    navigate("/home");
                }
            }
        })
    }

    const gotoSignup=()=>{
        navigate("/signup")
    }
    return(
        <div className="container-main login">
            <div className="login-sub hero-div">
               <h2>Login in to get personolized experience with edbroader.</h2>
               <img src={loginhero} alt="signup"/>
            </div>
            <div className="login-sub content-box">
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                    <Textbox type="email" imageName="email" icon={email} placeholder="Email" inputDataChange={(e) => setLoginData({...loginData, id: e.target.value})} />
                    <Textbox type="password" imageName="password" icon={lock} placeholder="Password" error={errors.credentialError}  inputDataChange={(e) => setLoginData({...loginData, password: e.target.value})} />
                    <Button className="primary-btn" label="Login"  />
                </form>

                <div>
                    <p>New to edbroader?</p>
                    <Button className="secondary-btn" label="Create Account" handleClick={gotoSignup}/>
                </div>
            </div>
            
        </div>
    )
}

export default Login;