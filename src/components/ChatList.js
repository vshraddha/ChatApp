import React from 'react';
import ChatItem from './ChatItem';
import "../Styles/Chatlist.css"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import MessageIcon from '@mui/icons-material/Message';

const ChatList = ({ dummyChats, activeChat, setActiveChat, setShowHeader, setShowingChat,profile }) => {
  return (
    <div className="chat-list">
      <p>ALL YOUR CHATS</p>
      <div className='sub-sec'> 
        <MessageIcon className='msg-icon'/><p>Chat images:on</p>
      </div>
      {dummyChats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          setShowHeader={setShowHeader}
          setShowingChat={setShowingChat}
          profile={profile}
        />
      ))}

      <div className="divider"></div>
    
      <div className="bot-button" >
        <AddCircleOutlineRoundedIcon className='circle' />
        Create New Bot
      </div>
    </div>
  );
};

export default ChatList;
