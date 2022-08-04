import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { AppContext } from "../../AppContext";
import "./Groups.css";
import Loading from "../../components/loading/Loading";

const Groups=()=>{
    const page=useContext(AppContext);
    const [groups,setGroups]=useState([]);
    useEffect(()=>{
        page.setPageName("groups");
        getGroups();
    },[page])

    const navigate=useNavigate();
    const getGroups=()=>{
        fetch("http://localhost:3000/groups/userGroups/",{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken")})
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="notfound"){
                console.log("no groups found");
            }else{
                console.log("groups retrieved");
                setGroups(data.data);
            }
        })
    }

    const viewGroups=(event,param)=>{
        const route="/group/"+param;
        navigate(route);
    }

    return(
        <div className="container-main groups">
            <h2>Groups</h2>
            {
                groups.map(group=>(
                    <div className="chatListItem" key={group.id}>
                        <div className="groupName">
                            {group.name}
                        </div>
                        <div className="btnCont">
                            <button className="viewGroup" onClick={event=>{viewGroups(event,group.id)}}>View Group</button>
                        </div>
                    </div>
                ))
            }
            {
                groups.length<=0 && <Loading/>
            }
            
        </div>
    )
    }


export default Groups;