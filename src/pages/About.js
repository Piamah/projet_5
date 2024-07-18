import React from "react";
import Header from "../components/Header";
import Banner from "../components/banner/Banner";
import imageBanner from "../assets/Banner_IMG_2.png"

const About = () => {
    return (
        <div>
        <Header />
        <Banner image={imageBanner}/>
        <div>Menu déroulant</div>
        </div>
    );
}

export default About;