import React from "react";
import { Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Groups from "./pages/groups/Groups";
import Chat from "./pages/groups/chat/Chat";
import Saved from "./pages/saved/Saved";
import Support from "./pages/support/Support";
import Profile from "./pages/profile/Profile";
import Onboarding from "./pages/onboarding/Onboarding";
import Signup from "./pages/signup/Signup";
import Verify from "./pages/verify/Verify";
import Success from "./pages/success/Success";
import Program from "./pages/program/Program";
import ConsultantSignup from "./pages/consultantSignup/ConsultantSignup";


const RoutePaths=()=>{
    return(
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/groups" element={<Groups/>}/>
            <Route path="/group/:id" element={<Chat/>}/>
            <Route path="/saved" element={<Saved/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/onboarding" element={<Onboarding/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/verify" element={<Verify/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/program/:id" element={<Program/>}></Route>
            <Route path="/consultantSignup" element={<ConsultantSignup/>}></Route>

        </Routes>
    )
}
export default RoutePaths;