import React from 'react';

const ChatItem = ({ chat, setActiveChat, setShowHeader, setShowingChat , profile}) => {
  return (
    <div
      className={`chat-item ${chat === chat ? 'selected' : ''}`}
      onClick={() => {
        setShowHeader(true);
        setActiveChat(chat);
        setShowingChat(false);
      }}
    >
      <img src={profile} className='profile'  />
      {chat.name}
    </div>
  );
};

export default ChatItem;

