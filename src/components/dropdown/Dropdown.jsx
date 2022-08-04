import React, { useEffect, useState } from "react";
import "./Dropdown.css";
const Dropdown=(props)=>{
    return(
        <div>
        
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} className="dropdown" onChange={props.handleChange}  required>
                <option selected disabled>--select an option--</option>
                {
                    props.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }  
                </select>
        </div>
    )
}
export default Dropdown;