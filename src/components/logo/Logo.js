import React, { useEffect, useState,useContext } from "react";
import "./Logo.css";
import logoWhite from "../../assets/logo/logo-white.png";
import logoBlue from "../../assets/logo/logo-blue.png";
import { AppContext } from "../../AppContext";
const Logo=()=>{
    const page=useContext(AppContext);
    const [color,setColor]=useState(logoBlue);
    useEffect(()=>{
        setLogoImage();
    },[]);

    const setLogoImage=()=>{
        if(page.pageName!=="signup" || page.pageName.page!=="login" || page.pageName!=="verify" || page.pageName!=="success"){
            setColor(logoBlue);
        }
        else{
            setColor(logoWhite);
        }

    }
    return(
        <img  src={color} alt="edbroader logo"/>
    )
}
export default Logo;