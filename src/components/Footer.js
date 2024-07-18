import React from 'react';
import logo from '../assets/LOGO_footer.png';
import '../styles/Footer.css'

function Footer () {
    return (
        <footer className='footer' style={{
            backgroundColor:'black'
        }}>
            <img className='logo-footer' src={logo} alt = 'Logo Kasa'></img>
            <p style= {{
                color:'white'
            }}>© 2020 Kasa. All rights reserved</p>
        </footer>

        
    )
}

export default Footer 