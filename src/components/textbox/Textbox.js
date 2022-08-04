import React from "react";
import "./Textbox.css";


const Textbox=(props)=>{
    return(
        <div className="textbox">
            <img className="inputIcon" src={props.icon} alt={props.imageName} />
            <input type={props.type} className={props.className} placeholder={props.placeholder} minLength={props.minlength} onChange={props.inputDataChange} required />
            <span>{props.error}</span>
        </div>
    )
}

export default Textbox;