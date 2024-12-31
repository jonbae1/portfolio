import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Jonathan Bae</h1>
            <h2>Full-stack Developer</h2>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
