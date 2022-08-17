import React, { useState } from "react";
import { useEffect,useContext } from "react";
import "./Support.css";
import { AppContext } from "../../AppContext";
import url from "../../url";
const Support=()=>{
    const page=useContext(AppContext)
    const [postalCode,setPostalCode]=useState("");
    const [result,setResult]=useState([]);
    useEffect(()=>{
        page.setPageName("support");
    },[]);

    const search=(e)=>{
        e.preventDefault();
        console.log("search button clicked");
        const query=url+"/consultants/";
        const url=query;
        const searchURL=url+postalCode;
        fetch(searchURL)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="success"){
                console.log(" no result found");
            }else{
                console.log("result found");
                setResult(data.result);
                console.log(data.result)
    
            }
        })
    }

    const connect=(event,param)=>{
        const query=url+"/consultants/connect";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),id:param})
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status==="success"){
                alert("Thank you! You will be contacted by the consultant through email");
            }else{
                console.log("something went wrong");
            }
        })
        
    }

    return(
 
        <div className="container-main support">
                <div className="banner">
                    <div className="greeting">
                        <h3>Search and get support from educational consultants</h3>
                    </div>
                    <div id="search-box">
                        <form>
                            <input type="text" placeholder="Search with postal code" onChange={e=>{setPostalCode(e.target.value)}}/>
                            <button onClick={search}>Search</button>
                        </form>
                    </div>
                </div>
                <div>
                <div className="card head">
      
                                <div><h4>Name</h4></div>
                                <div><h4>City</h4></div>
                                <div><h4>Country</h4></div>
                                <div><h4>Action</h4></div>
                            </div>
                    {
                        result.map(res=>(
                            <div className="card">

                                <div>{res.name}</div>
                                <div>{res.city}</div>
                                <div>{res.country}</div>
                                <div><button onClick={event=>{connect(event,res.id)}}>Request callback</button></div>
                            </div>
                        ))
                    }

                </div>
        </div>
    )
}

export default Support;