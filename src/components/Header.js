import React from 'react';
import logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

function Header () {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt = 'Logo Kasa'></img>
            <nav>
                <ul>
                    <li>
                        <Link to = "/" className='nav'>Accueil</Link>
                    </li>
                    <li>
                       <Link to = "/about" className='nav'>À propos</Link> 
                    </li>
                </ul>
            </nav>
        </header>

        
    )
}

export default Header 