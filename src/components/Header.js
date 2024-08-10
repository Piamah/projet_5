import React from 'react';
import logo from '../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.scss'

function Header () {
    const location = useLocation();
    const path = location.pathname;
    console.log(path)
    return (
        <header className='header'>
            <img className='logo' src={logo} alt = 'Logo Kasa'></img>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={`nav ${path === "/accueil" ? "underlined" : ""}`}>Accueil</Link>
                    </li>
                    <li>
                       <Link to = "/about" className={`nav ${path === "/about" ? "underlined" : ""}`}>À propos</Link> 
                    </li>
                </ul>
            </nav>
        </header>    
    )
}

export default Header 


// function Header () {

// ******************AJOUT CONTENU ICI*********************


//     return (
//         <header className='header'>
//             <img className='logo' src={logo} alt = 'Logo Kasa'></img>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to = "/" className='nav'>Accueil</Link> + ****************UNDERLINE ADDED********************
//                     </li>
//                     <li>
//                        <Link to = "/about" className='nav'>À propos</Link> 
//                     </li>
//                 </ul>
//             </nav>
//         </header>

        
//     )
// }

// export default Header 