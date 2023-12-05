import React from 'react';
import "../Styles/Footer.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
       Logo
      </div>
      <div className="right-side">
        <p>Contact@00000000.tech</p>
        
        <TelegramIcon className='icons'/>
        <InstagramIcon className='icons'/>
        <TwitterIcon className='icons'/>
        
        
       
      </div>
    </div>
  );
};

export default Footer;
