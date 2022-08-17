import React, { useState ,useContext} from "react";
import Logo from "../logo/Logo";
import NavLinks from "../navLinks/NavLinks";
import MenuIcon from "../menuIcon/MenuIcon";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { AppContext } from "../../AppContext";
const Header=()=>{
    const isLogged=useContext(AppContext);
    const navigate=useNavigate();
    const logoutAction=()=>{
        localStorage.removeItem("accessToken");
        navigate("/login");
        isLogged.setIsLogged(false);
        console.log(isLogged.isLogged);
    }
    return(
        <header className="header">
            <Logo className="logo"/>
            <NavLinks/>
            <MenuIcon/>
            <button className={isLogged.isLogged?"view":"hide"} onClick={logoutAction}>Logout</button>
        </header>
    )
}
export default Header;