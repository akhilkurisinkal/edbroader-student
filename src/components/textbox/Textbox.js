import React from "react";
import "./Textbox.css";


const Textbox=(props)=>{
    return(
        <div className="textbox">
            <img className="inputIcon" src={props.icon} alt={props.imageName} />
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default Textbox;