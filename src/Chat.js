import React, { useState, useEffect } from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import "./Chat.css"
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000 ));
 
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed ' + input)
        
    }

    return (
        <div className="chat">
            <div className="chat_header"> 
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3> Room Name</h3>
                    <p>Last Seen at ...</p>
                </div>
            <div className="chat_headerRight">
            <IconButton >
                <SearchOutlined />
            </IconButton>
            <IconButton >
                <AttachFile />
            </IconButton>
            <IconButton >
                <MoreVertIcon />
            </IconButton>
            </div>
        </div>
        <div className="chat_body"> 
            
            <p className={`chat_message ${true && "chat_receiver"}`}>
            <span className="chat_name"> Indi</span>    
            Hey Guys
            <span className="chat_timestamp">
            3:52pm
            </span>
            
            </p>
            <span className="chat_name"> Sonny</span>
            <p className="chat_message">Hey Guys</p>
            
        </div>
        <div className="chat_footer"> 
            <InsertEmoticon />
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Type a message"/>
                <button onClick={sendMessage}>Send a Message</button>
            </form>
            <MicIcon />     
        </div>

        </div>
    )
}

export default Chat