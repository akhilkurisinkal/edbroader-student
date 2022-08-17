import {React,useState,useEffect,useContext} from "react";
import Textbox from "../../components/textbox/Textbox";
import "./Verify.css";
import email from "../../assets/form-icons/email.svg";
import lock from "../../assets/form-icons/lock.svg";
import Button from "../../components/button/Button";
import verifyhero from "../../assets/verifyhero.svg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import url from "../../url";
const Verify=()=>{
    const page=useContext(AppContext);
    const [code, setCode]=useState({
        id:localStorage.getItem("id"),
        vcode:""}
    )
    useEffect(()=>{
        page.setPageName("signup");
    },[page])
    const [errors,setErrors]=useState({
        codeError:""
    })

    const navigate=useNavigate();

    const verifyUser=(event)=>{
        event.preventDefault();
        const query=url+"/verify/";
        fetch(query,{
            method:"POST",
            body:JSON.stringify(code),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="success"){
                console.log("Invalid code",data.status);
                setErrors({...errors,codeError:"Invalid code"})
            }else{
                console.log("navigating to success page");
                navigate("/success");
            }
        })
        
    }        

    return(
        <div className="container-main verify">
            <div className="verify-sub hero-div">
            <h2>Enter code <br/>sent to your email.</h2>
               <img src={verifyhero} alt="signup"/>
            </div>
            <div className="verify-sub content-box">
                <h2>Verify code</h2>
                <form onSubmit={verifyUser}>
                    <Textbox type="text" imageName="lock" icon={lock} placeholder="Code" inputDataChange={(e)=> setCode({...code,vcode:e.target.value})}  error={errors.codeError} />
                    <Button className="primary-btn" label="Verify" />
                </form>
            </div>
            
        </div>
    )
}

export default Verify;