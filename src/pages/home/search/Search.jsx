import React from "react";
import { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search=(props)=>{
    const navigate=useNavigate();
    const viewProgram=(event,param)=>{
        const route="/program/"+param;
        navigate(route);
    }
    return(
        <div id="search">
            
            <h4>Programs</h4>
            {
                
                props.programs.map(program=>(
                    <button className="search-child" onClick={event=>{viewProgram(event,program.code)}}>
                        <div className="left">
                            Logo
                        </div>
                        <div className="middle">
                            <h4>{program.name}</h4>
                        </div>
                        <div>
                            {program.subLevel}
                        </div>
                        <div>
                           24 months
                        </div>
                        <div className="right">
                            {program.fees}
                        </div>
                    </button>
                ))
            }
            <h4>Schools</h4>
            {
                
                props.schools.map(school=>(
                    <button className="search-child">
                        <div className="left">
                            Logo
                        </div>
                        <div className="middle">
                            <h4>{school.name}</h4>
                        </div>
                        <div>
                            {school.country}
                        </div>
                        <div>
                           24 months
                        </div>
                        <div className="right">
                            {school.worldRank}
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default Search;