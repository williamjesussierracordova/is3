import React, { useState } from 'react';
import './header.css'; // Asegúrate de crear y enlazar un archivo CSS para los estilos

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/home">Medical Center</a>
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="hamburger"></div>
            </div>
        </header>
    );
}

export default Header;