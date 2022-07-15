import React from "react";
import { Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing/Landing";
import Signup from "./pages/signup/Signup";
const RoutePaths=()=>{
    return(
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}
export default RoutePaths