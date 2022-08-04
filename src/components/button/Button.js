import React from "react";
import "./Button.css";

const Button=(props)=>{
    return(
        <button id={props.id} className={props.className} onClick={props.handleClick}>{props.label}</button>
    )
}

export default Button;