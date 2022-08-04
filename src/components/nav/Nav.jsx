import React, { useContext } from "react";
import "./Nav.css";
import { AppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";

const Nav=()=>{
    const page=useContext(AppContext);
    const navigate=useNavigate();
    const navigateHome=()=>{
        navigate("/home");
    }
    const navigateGroups=()=>{
        navigate("/groups");
    }
    const navigateSaved=()=>{
        navigate("/saved");
    }
    const navigateSupport=()=>{
        navigate("/support");
    }
    const navigateProfile=()=>{
        navigate("/profile");
    }
    return(
        <nav className={page.pageName==="landing"||page.pageName==="signup"||page.pageName==="login"||page.pageName==="verify"||page.pageName==="success"||page.pageName==="onboarding"?"hidden":"nav"}>
            <ul>
                <li><button id="home" className={page.pageName==="home"?"active":"inactive"} onClick={navigateHome}></button></li>
                <li><button id="groups" className={page.pageName==="groups"?"active":"inactive"} onClick={navigateGroups}></button></li>
                <li><button id="saved" className={page.pageName==="saved"?"active":"inactive"} onClick={navigateSaved}></button></li>
                <li><button id="support" className={page.pageName==="support"?"active":"inactive"} onClick={navigateSupport}></button></li>
                <li><button id="profile" className={page.pageName==="profile"?"active":"inactive"} onClick={navigateProfile}></button></li>
            </ul>
        </nav>
    )
}
export default Nav;