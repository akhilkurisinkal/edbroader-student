import React from "react";
import "./Profile.css";
import Dropdown from "../../components/dropdown/Dropdown";
import Button from "../../components/button/Button";
import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import profileImg from "../../assets/profile.svg";
import url from "../../url";

const Profile=()=>{
    const page=useContext(AppContext)
    const [nationalities,setNationalities]=useState([]);
    const [eduLevels,setEduLevels]=useState([]);
    const [eduSubLevels,setEduSubLevels]=useState([]);
    const [eduFields,setEduFields]=useState([]);
    const [eduSubFields,setEduSubFields]=useState([])
    const [gpas,setGpas]=useState([1.0,2.0,3.0,4.0]);
    const [interestedCareers,setInterestedCareers]=useState([]);
    const navigate=useNavigate();

    const [userData,setUserData]=useState({
        user:localStorage.getItem("id"),
        nationality:"",
        eduLevel:"",
        eduSubLevel:"",
        eduField:"",
        eduSubField:"",
        gpa:"",
        interestedCareer:"",
        accessToken:localStorage.getItem("accessToken")
    });


    useEffect(()=>{
        page.setPageName("profile");
        getNationalities();
        getEduLevels();
        getEduFields();
    },[page])


    useEffect(()=>{
        getEduSubLevels();
    },[userData.eduLevel])

    useEffect(()=>{
        getEduSubFields();
    },[userData.eduField])

    useEffect(()=>{
        getInterestedCareers();
    },[userData.eduSubField])

    const getNationalities=()=>{
        console.log("fetching nationalities");
        const query=url+"/countries";
        fetch(query)
        .then(res => res.json())
        .then(data=>{
            setNationalities(data.data);
            })
    }

    const getEduLevels=()=>{
        console.log("fetching education levels");
        const query=url+"/levels";
        fetch(query)
        .then(res => res.json())
        .then(data=>{
            setEduLevels(data.data);
            })
    }

    const getEduSubLevels=()=>{
        const query=url+"/subLevels/";
        const url=query;
        const queryString=url+userData.eduLevel;
        console.log("fetching education sub levels");
        console.log(queryString)
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            setEduSubLevels(data.data);
            })
    }

    const getEduFields=()=>{
        console.log("fetching education fields");
        const query=url+"/fields";
        fetch(query)
        .then(res => res.json())
        .then(data=>{
            setEduFields(data.data);
            })
    }
    

    const getEduSubFields=()=>{
        const query=url+"/subFields/";
        const url=query;
        const queryString=url+userData.eduField;
        console.log("fetching education sub fields");
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            setEduSubFields(data.data);
            })
    }

    const getInterestedCareers=()=>{
        const query=url+"/careers/";
        const url=query;
        const queryString=url+userData.eduSubField;
        console.log("fetching careers...")
        console.log(queryString);
        fetch(queryString)
        .then(res => res.json())
        .then(data=>{
            setInterestedCareers(data.data);
            })
    }

    const saveData=()=>{
        const query=url+"/onboarding/";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.status!=="success"){
                console.log("something went wrong!");
            }else{
                console.log("navigating to home");
                alert("Profile updated");
                navigate("/home");
            }
        });
    }

    const onBoard=(event)=>{
        event.preventDefault();
        if(Object.values(userData).indexOf("")> -1){
           alert("All fields are required")
           console.log(userData);
        }else{
            console.log("Saving user data...")
            console.log(userData);
            saveData();
   
        }
        
      
    }

    return(
        <div className="container-main onboarding">
            <h3>Update Profile</h3>
            <img src={profileImg} alt="profile/"/>
            <form onSubmit={onBoard}>
                    <Dropdown name="nationality" options={nationalities} value={userData.nationality} label="Nationality" handleChange={(e)=>{setUserData({...userData,nationality:e.target.value})}} />
                    <Dropdown name="eduLevel" options={eduLevels} value={userData.eduLevel} label="Education Level" handleChange={(e)=>{setUserData({...userData,eduLevel:e.target.value})}}/>
                    <Dropdown name="eduSubLevel" options={eduSubLevels} value={userData.eduSubLevel} label="Education Sub-level" handleChange={(e)=>{setUserData({...userData,eduSubLevel:e.target.value})}}/>
                    <Dropdown name="eduField" options={eduFields} value={userData.eduField} label="Field of Study" handleChange={(e)=>{setUserData({...userData,eduField:e.target.value})}}/>
                    <Dropdown name="eduSubField" options={eduSubFields} value={userData.eduSubField} label="Sub-field of study" handleChange={(e)=>{setUserData({...userData,eduSubField:e.target.value})}}/>
                    <Dropdown name="gpa" options={gpas} label="GPA" value={userData.gpa} handleChange={(e)=>{setUserData({...userData,gpa:e.target.value})}}/>
                    <Dropdown name="interestedCareer" options={interestedCareers}  value={userData.interestedCareer} label="Interested Career" handleChange={(e)=>{setUserData({...userData,interestedCareer:e.target.value})}}/>
                    <Button className="primary-btn-2" label="Update Profile"/>
            </form>
        </div>
    )
}

export default Profile;