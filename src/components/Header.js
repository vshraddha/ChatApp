import React from 'react';
import "../Styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
      <div className="logo">Logo</div>
        <div className="line"></div>
        <div className="nav-links">
          <a href="/"><i className="material-icons">home</i>Explore</a>
          <a href="/"><i className="material-icons">create</i>Create</a>
          <a href="/"><i className="material-icons">edit</i>Edit</a>
        </div>
      </div>
      <div className="right-section">
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;
