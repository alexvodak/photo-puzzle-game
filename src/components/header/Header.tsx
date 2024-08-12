import React from 'react';
import './styles.css'

interface HeaderProps {
    children: React.ReactNode;
    idValue?: string;
    className?: string;
  }

const Header: React.FC<HeaderProps> = ({ children = '', idValue = '', className = '' }) => {
    let headerClassName = "header";
    if (!idValue) {
        headerClassName = headerClassName + " " + className;
    }
    return (
      <header className="header ${className}" id={idValue}>
        <nav className="navbar">
          <ul className="navbar-menu">
            {children}
          </ul>
        </nav>
      </header>
    );
  };


export default Header;