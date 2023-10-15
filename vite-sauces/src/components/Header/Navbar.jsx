import './Header.css';
import img from './lossaucessinfondo.png';
import CartWidget from './CartWidget';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    return (
        <div className="Header">
        <img className='logomenu' src={img} alt='logo-ls' />

        <nav className="menu">
            <ul className="menu-items">
            <li><a href="/">Home</a></li>
            <li>
                <a onClick={toggleSubmenu}>Category</a>
                <ul className={isSubmenuOpen ? 'submenu open' : 'submenu'}>
                <li>
                    <Link to='/category/Congelados'>Congelados</Link>
                </li>
                <li>
                    <Link to='/category/Procesados'>Procesados</Link>
                </li>
                <li>
                    <Link to='/category/Galletas'>Galletas</Link>
                </li>
                <li>
                    <Link to='/category/Yogures'>Yogures</Link>
                </li>
                <li>
                    <Link to='/category/Pastas'>Pastas</Link>
                </li>
                </ul>
            </li>
            <li className='CartWidget'><a href='#'><CartWidget /> </a></li>
            </ul>
        </nav>
        </div>
    );
}

export default NavBar;
