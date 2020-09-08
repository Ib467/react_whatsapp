import React, {useState, useEffect} from "react";
import './SidebarChat.css';
import { Avatar, IconButton} from '@material-ui/core';


export default function Sidebarchat({ addNewChat }) {
    const [seed, setSeed] = useState("");


    useEffect (() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            //do some clever stuff...
        }

    };



    return !addNewChat ? (
        <div className="sidebarChat">
           
            {/* Random avatar */}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}
