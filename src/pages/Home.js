import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Cards'
import Banner from "../components/banner/Banner";
import imageBanner from '../assets/Banner_IMG.png' 

const Home = () => {
    return (
        <div className="main">
        <Header />
        <Banner image={imageBanner} text="Chez vous, partout et ailleurs"/>
        <Card />
        <Footer />
        </div>
    );
    
}

export default Home;