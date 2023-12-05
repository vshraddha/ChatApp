import React, { useState } from 'react';
import Header from "./components/Header"
import ChatList from "./components/ChatList"
import ChatHeader from "./components/ChatHeader"
import MessageInput from "./components/MessageInput"
import Footer from './components/Footer';
import profile from "./Assets/profile.png"
import './App.css';

const dummyChats = [
  {
        id: 1,
        name: 'John Doe',
        profilePicture: profile,
        messages: [
          { sender: 'John Doe', message: 'Hi' },
          { sender: 'You', message: 'Hello' },
          { sender: 'John Doe', message: 'How are you?' },
          { sender: 'You', message: 'I am fine' },
         
    
        ],
      },
      {
        id: 2,
        name: 'Alice Smith',
        profilePicture: profile,
        messages: [
          { sender: 'Alice Smith', message: 'Hey' },
          { sender: 'You', message: 'Good to see you!' },
          { sender: 'Alice Smith', message: "What's up?" },
        ],
      },
      {
        id: 3,
        name: 'Caressa Jessalin',
        profilePicture: profile,
        messages: [
          { sender: 'Caressa Jessalin', message: 'Hello' },
          { sender: 'You', message: 'Hi Caressa' },
          { sender: 'Caressa Jessalin', message: 'How are you doing?' },
    
        ],
      },
      {
        id: 4,
        name: 'Robert Johnson',
        profilePicture: profile,
        messages: [
          { sender: 'Robert Johnson', message: 'Hello' },
          { sender: 'You', message: 'Hi Robert' },
          { sender: 'Robert Johnson', message: 'How is your day?' },
        ],
      },
      {
        id: 5,
        name: 'Emily Williams',
        profilePicture: profile,
        messages: [
          { sender: 'Emily Williams', message: 'Hey there' },
          { sender: 'You', message: 'Good afternoon, Emily' },
          { sender: 'Emily Williams', message: 'How is your project going?' },
        ],
      },

]; 
const App = () => {
  const [activeChat, setActiveChat] = useState(dummyChats[0]);
  const [chatHistory, setChatHistory] = useState(dummyChats.reduce((acc, chat) => {
    acc[chat.name] = chat.messages;
    return acc;
  }, {}));
  const [newMessage, setNewMessage] = useState('');
  const [showHeader, setShowHeader] = useState(false);
  const [showingChat, setShowingChat] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = { sender: 'You', message: newMessage };
      const updatedChatHistory = { ...chatHistory };
      updatedChatHistory[activeChat.name].push(message);
      setChatHistory(updatedChatHistory);
      setNewMessage('');
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="chat-container">
        <ChatList
         chat={dummyChats}
          dummyChats={dummyChats}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          setShowHeader={setShowHeader}
          setShowingChat={setShowingChat}
          profile={profile}
        />
        <div className="chat-area">
          {showHeader && <ChatHeader activeChat={activeChat} setShowHeader={setShowHeader} profile={profile}/>}
          {chatHistory[activeChat.name].map((message, index) => (
            <div key={index} className={`message-item ${message.sender === 'You' ? 'you' : 'alice'}`}>
              <span className="message-sender">{message.sender}:</span>
              {message.message}
            </div>
          ))}
          <MessageInput
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
          />
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default App;

