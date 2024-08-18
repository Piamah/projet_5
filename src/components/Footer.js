import React from 'react';
import logo from '../assets/LOGO_footer.png';
import '../styles/Footer.scss'

function Footer () {
    return (
        <footer className='footer'>
            <img className='logo-footer' src={logo} alt = 'Logo Kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>

        
    )
}

export default Footer 