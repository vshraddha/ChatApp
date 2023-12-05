// ChatHeader.js
import React from 'react';
import "../Styles/ChatHeader.css"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';


const ChatHeader = ({ activeChat, setShowHeader , profile }) => {

  return (
    <div className="chat-header">
      <div className="header-left"><img className="profile-header" src={profile} />{activeChat.name}</div>
      <div className="header-right">
        <button><DeleteRoundedIcon /> Delete </button>
        <button><ArrowBackRoundedIcon />Back</button>
      </div>
    </div>
  );
};

export default ChatHeader;
