import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
        <i className="fas fa-bars"></i>
      </div>


      <div className={`side-panel ${isMenuOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>Панель</h3>
          <button 
            className="close-panel" 
            onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="panel-content">
        <Link to="/" >Все новости</Link>
        <br/>
        <br/>
        <Link to="/category" >Категорий</Link>
        <br/>
        <br/>
        <Link to="/AddPost" >Добавить новость</Link>
        </div>
      </div>


      {isMenuOpen && (
        <div 
          className="panel-overlay" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;