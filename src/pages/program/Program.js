import React, { useEffect, useState } from "react";
import "./Program.css";
import Button from "../../components/button/Button";
import Nav from "../../components/nav/Nav";
import { useNavigate,useParams } from "react-router-dom";
import url from "../../url";
const Program=()=>{
  
    const [programDetails,setProgramDetails]=useState([]);
    const [isMember,setIsMember]=useState(false);
    const [isSaved,setIsSaved]=useState();
    const {id}=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        getProgramDetails();
        
    },[isSaved])




    const getProgramDetails=()=>{
        const query=url+"/program";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),program:id})  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="success"){
                console.log("No data");
            }else{
                console.log("data found");
                setProgramDetails(data.data);
                setIsMember(data.isMember);
           
            }
            console.log(programDetails);
            findIsSaved();
            
        })
        
    }

    const viewGroup=(event,param)=>{
        const route="/group/"+param;
        navigate(route);
    }

    const joinGroup=(event,param)=>{
        const query=url+"/groups/joinGroup/";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),program:param})  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="exist"){
                console.log("already joined");
            }else{
                console.log("joined group");
                const route="/group/"+param;
                navigate(route);
            }
        })
    }

    const saveProgram=(event,param)=>{
        console.log("saving");
        const query=url+"/save/";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),program:param})  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="exist"){
                alert("already saved");
            }else{
                alert("saved");
                
                
            }
            
        })
        findIsSaved();
        
    }

    const unsaveProgram=(event,param)=>{

        console.log("saving");
        const query=url+"/save/unsave";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),program:param})  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="exist"){
                alert("already saved");
            }else{
                alert("unsaved");
               
                
            } 
        })
        findIsSaved();
       
    }

    const findIsSaved=()=>{
        const query=url+"/save/find/";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),program:id})  
        })
        .then(res => res.json())
        .then(data=>{
            setIsSaved(data.status);
        })
    }



    return(
        <div className="container-main program">
            {
                programDetails.map(program=>(
                    <div>
                        
                        <div className="coverImage">
                           <h2> {program.name}</h2>
                           <span>{program.subLevel}</span>
                           <div className="btn-grp">
                           {isSaved?<button className="save" onClick={event=>(unsaveProgram(event,program.code))}>Unsave</button>:<button className="save" onClick={event=>(saveProgram(event,program.code))}>Save</button>}
                            {isMember?<Button className="joinGroup" label="View group" handleClick={event=>viewGroup(event,program.code)}/>:<Button className="joinGroup" label="Join group" handleClick={event=>(joinGroup(event,program.code))}/>}

                            </div>
                        </div>
                        <div className="programDetails">
                            <h3>Description</h3>
                            <p>{program.summary}</p>
                            <h3>Courses</h3>
                            
                                <ul>
                                    <li>Web development</li>
                                    <li>Android</li>
                                    <li>iOS app development</li>
                                </ul>
                            
                            <h3>Admissions</h3>
                            <p>
                                Bachelor's degree in computer science
                            </p>
                            <h3>Careers</h3>
                            <ul>
                            {
                                program.careers.map(career=>(
                                    <li>{career}</li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                    
                ))
                
            }
            
        </div>
    )
}

export default Program;