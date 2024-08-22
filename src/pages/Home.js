import React from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Cards from '../components/cards/Cards';
import Banner from "../components/banner/Banner";
import imageBanner from '../assets/Banner_IMG.png';
import logements from '../datas/logements.json'

const Home = () => {
    return (
        <div className="main">
        <Header />
        <Banner image={imageBanner} text="Chez vous, partout et ailleurs"/>
        <Cards logements={logements} />
        <Footer />
        </div>
    );
    
}

export default Home;