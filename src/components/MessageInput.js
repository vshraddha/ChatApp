import React from 'react';
import "../Styles/MessageInput.css"
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const MessageInput = ({ newMessage, setNewMessage, sendMessage }) => {
  return (
    <div className="message-input-container">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Message"
      />
      <button onClick={sendMessage}><SendRoundedIcon className='send'/></button>
    </div>
  );
};

export default MessageInput;
