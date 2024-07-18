import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import idLogement from '../datas/logements.json'

const Logement = () => {
    const {id} = useParams()
    const ficheLogement = idLogement.find((logement)=>logement.id === id)
    console.log(ficheLogement);
    return (
        <>
            <Header />
            <div>LOGEMENTS{id}</div>
            <Footer />
        </>
    )
}

export default Logement;