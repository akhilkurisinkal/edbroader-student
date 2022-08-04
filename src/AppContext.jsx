import React, { createContext, useState } from "react";
export const AppContext=createContext();
export const AppProvider=(props)=>{
    const [pageName,setPageName]=useState("home");

    return(
        <AppContext.Provider value={{pageName,setPageName}}>
            {props.children}
        </AppContext.Provider>
    )
}