import React, { useEffect, useState,useContext } from "react";
import "./Saved.css";
import { AppContext } from "../../AppContext";
import url from "../../url";
const Saved=()=>{
    const page=useContext(AppContext);
    const [saved,setSaved]=useState([]);


    useEffect(()=>{
        page.setPageName("saved");
        getSaved();
    },[])
    const getSaved=()=>{
        const query=url+"/save/saved"
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken")})
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="notfound"){
                console.log("no saved found");
            }else{
                console.log("saved retrieved");
                setSaved(data.saved);
                console.log(data.saved);
            }
        })
    }

return(
    <div className="container-main saved">

        <h2>Saved Programs</h2>
        <div className="roww">
           {
           saved.map(sav=>(
            <div className="saved-child">
                <div><h4>{sav.name}</h4></div>
                <div>{sav.college}</div>
                <div>{sav.subLevel}</div>
            </div>
           ))
           }
           </div>
    </div>
)
}

export default Saved;