import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import datas from '../datas/logements.json'
import '../styles/Logement.scss'
import Dropdown from "../components/dropdown/Dropdown";
import Carousel from "../components/carousel/Carousel";
import Tags from "../components/tags/Tags";
import Rate from "../components/rates/Rate";

// Récupération de l'id du logement
const Logement = () => {
    const {id} = useParams()
    const ficheLogement = datas.find((logement)=>logement.id === id)
    // console.log(ficheLogement);


const {title, description, host ,location ,equipments} = ficheLogement;
  return (
    <>
      <Header />
        <div className="logement-section">
            <Carousel pictures = {ficheLogement.pictures}>
            </Carousel>
            <div className="info-logement">
                <div className="title-loc-tag">
                    <div>
                        <div className="title-logement">{title}</div>
                        <div className="location-logement">{location}</div>
                        <div className="tags">
                            <Tags tags = {ficheLogement.tags}>
                            </Tags>
                        </div>
                    </div>
                </div>
                <div className="host-rate">
                    <div className="host-info">
                        <span className="host-name">{host.name}</span>
                        <img className="host-picture" src={host.picture} alt={host.name} />
                    </div>
                    <Rate rating = {ficheLogement.rating}>
                    </Rate>
                </div>
            </div>
            <div className="info-bar">
            <Dropdown title="Description" content={<div className="description-logement">{description}</div>} />
            <Dropdown title="Equipements" content={
                    <ul className="equipments-logement">
                        {equipments.map((equipment, i) => (
                            <li key={i}>{equipment}</li>
                        ))}
                    </ul>
                } />
            </div>
        </div>
      <Footer />
    </>
  );
};
export default Logement;