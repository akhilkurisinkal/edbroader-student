import React from "react";
import { useContext } from "react";
import { useState,useEffect } from "react";
import { AppContext } from "../../AppContext";
import "./Home.css";
import Suggested from "./suggested/Suggested";
import Loading from "../../components/loading/Loading";
import Search from "./search/Search";
import url from "../../url";
const Home=()=>{
    const page=useContext(AppContext)
    const [searchString,setSearchString]=useState(false);
    const [searchPrograms,setSearchPrograms]=useState([]);
    const [suggestedPrograms,setSuggestedPrograms]=useState([]);
    

    useEffect(()=>{
        page.setPageName("home");
        getSuggested();
    },[page])

    const getSuggested=()=>{
        const query=url+'/suggested';
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken")})  
        })
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log("no record");
            }else{
                setSuggestedPrograms(data.suggestedPrograms);
                console.log(data.suggestedPrograms);
                console.log(searchString,suggestedPrograms.length);
            }
        })
    }

    const search=(e)=>{
        e.preventDefault();
        console.log("search button clicked");
        const searchURL=url+"/search/"+searchString;
        fetch(searchURL)
        .then(res => res.json())
        .then(data=>{
            if(data.status!=="found"){
                console.log(" no record");
            }else{
                setSearchPrograms(data.programs);
                console.log(data.programs);
            }
        })
    }
    return(
        <div className="container-main home">
            <div id="search-bar">
                <form onSubmit={search}>
                    <div id="search-bar-container">
                        <input type="text" id="search" placeholder="Search for programs, schools and countries" onChange={e=>{setSearchString(e.target.value)}}/>
                        <button type="submit" className="search-btn">Search</button>
                    </div>
                </form>
            </div>
            {
                searchString!==false?<h2>Search Result</h2>:<h2>Suggested for you</h2>
            }
            {
                searchString!==false?<Search programs={searchPrograms}/>:<Suggested programs={suggestedPrograms}/>
            }
            {
                searchString===false&&suggestedPrograms.length<=0 && <Loading/>
            }
            
        </div>
    )
    }


export default Home;