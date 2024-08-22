import React from "react";
import Header from '../components/header/Header'
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import '../styles/Error.scss'

const Error = () => {
    return (
        <div>
            <Header />
            <p className="error">404</p>
            <p className="error-txt">Oups! La page que vous demandez n'existe pas.</p>
            <Link to ="/" className="back">Retourner sur la page d’accueil</Link>
            <Footer />
        </div>
        
    )
}

export default Error;