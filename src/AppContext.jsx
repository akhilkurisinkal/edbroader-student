import React, { createContext, useState } from "react";
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [pageName,setPageName]=useState("home");
    const [isLogged,setIsLogged]=useState();

    return(
        <AppContext.Provider value={{pageName,setPageName,isLogged,setIsLogged}}>
            {props.children}
        </AppContext.Provider>
    )
}