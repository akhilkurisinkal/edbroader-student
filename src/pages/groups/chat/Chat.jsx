import React, { useEffect, useState } from "react";
import "./Chat.css";
import Textbox from "../../../components/textbox/Textbox";
import Button from "../../../components/button/Button";
import userIcon from "../../../assets/profile.svg";
import { useNavigate,useParams } from "react-router-dom";
import url from "../../../url";
const Chat=()=>{
    const navigate=useNavigate();
    const [chatName,setChatName]=useState("");
    const [chats,setChats]=useState([]);
    const {id}=useParams();
    const [newMessage,setNewMessage]=useState({
        user:localStorage.getItem("accessToken"),
        group:id,
        message:""
    });

    useEffect(()=>{
        getChats();
        scrollToBottom();
    },[])
    const scrollToBottom=()=>{
        var messageBody = document.querySelector('#chatList');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
    const getChats=()=>{
        const query=url+"/chat";
            fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({accessToken:localStorage.getItem("accessToken"),group:id})  
            })
            .then(res => res.json())
            .then(data=>{
                if(data.status==="failure"){
                    console.log("failed to load chat");
                }else{
                    console.log("loading chat...",data.data[0].messages);
                    setChats(data.data[0].messages);
                    setChatName(data.data[0].name);
                }
            })
    }

    const sendMessage=(e)=>{
        e.preventDefault();
        const query=url+"/chat/sendMessage/";
        fetch(query,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(newMessage)  
            })
            .then(res => res.json())
            .then(data=>{
                if(data.status==="failure"){
                    console.log("failed to send messsage");
                }else{
                    console.log("message sent");
                    setChats(data.data[0].messages);
                }
            })
    }

   

    return(
        <div className="container-main chat">
            <div className="groupName">
                <h4>{chatName}</h4>
            </div>
            <div className="chatList" id="chatList">
                {
                    chats.map(chat=>(
                        
                        <div className="message">
                            <div className="userIcon">
                                <img src={userIcon} alt="userIcon"/><br/>
                
                            </div>
                            <div className="tria-left">

                            </div>
                            <div className="recta">
                                <h6>Akhil K Thomas</h6>
                                    {chat.message}
                            </div>
                        </div>
                    ))
                    
                }
            </div>
           <div className="sendMessage">
            <form onSubmit={sendMessage}>
                <div className="typing">
                    <input className="typeBox" placeholder="Type message" type="text"onChange={e=>{setNewMessage({...newMessage,message:e.target.value})}} /><button className="sendBtn" >Send</button>
                </div>

            </form>

           </div>
        </div>
    )
}

export default Chat;