import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton} from '@material-ui/core';
import { SearchOutlined} from '@material-ui/icons';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from "./SidebarChat"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            
             <Avatar src="https://avatars2.githubusercontent.com/u/12961776?s=460&u=faf32bf68e282447acdffe756e23d00bbccb80c7&v=4" />
            <div className="sidebar_headerRight">
            <IconButton >
                <DonutLargeIcon />
            </IconButton>
            <IconButton >
            <ChatIcon />
            </IconButton>
            <IconButton >
            <MoreVertIcon />
            </IconButton>
            </div>
            </div>


            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchOutlined /> 
                 <input placeholder="Search or Start new chat" type="text" />

                </div>
            </div>

            <div className="sidebar_chat">
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
             
            </div>
        </div>
       
    )
}
