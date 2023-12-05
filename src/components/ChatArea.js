import React from 'react';
import MessageItem from './MessageItem';
import "./ChatArea.css"
const ChatArea = ({ selectedChat }) => {
  return (
    <div className="chat-area">
      {selectedChat.messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatArea;
