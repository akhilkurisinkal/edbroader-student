import React from "react";
import Logo from "../logo/Logo";
import NavLinks from "../navLinks/NavLinks";
import MenuIcon from "../menuIcon/MenuIcon";
import "./Header.css";
const Header=()=>{
    return(
        <header className="header">
            <Logo/>
            <NavLinks/>
            <MenuIcon/>

        </header>
    )
}
export default Header;