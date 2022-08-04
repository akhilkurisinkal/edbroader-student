import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Suggested.css";

const Suggested=(props)=>{
    const navigate=useNavigate();
    const viewProgram=(event,param)=>{
        const route="/program/"+param;
        navigate(route);
    }
    return(
        <div id="suggested">
            
            {
                props.programs.map(program=>(
                    <button className="suggested-child" onClick={event=>{viewProgram(event,program.code)}}>
                        <div className="top">
                            <button className="save-btn"></button>
                        </div>
                        <div className="middle">
                            <h4>{program.name}</h4>
                            <h5>{program.college},{program.country}</h5>
                        </div>
                        <div className="bottom">
                        <button className="cap-icon"></button>{program.subLevel}
                        <button className="time-icon"></button>24 months
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default Suggested;