import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import datas from '../datas/logements.json'
import '../styles/Logement.scss'
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Rate from "../components/Rate";

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
            {/* Photos du logement */}
            <Carousel pictures = {ficheLogement.pictures}>
            </Carousel>
            <div className="info-logement">
                <div className="title-loc-host">
                    <div>
                        <div className="title-logement">{title}</div>
                        <div className="location-logement">{location}</div>
                    </div>
                    <div className="host">
                        <div className="host-logement">
                            <span className="host-name">{host.name}</span>
                            <img className="host-picture" src={host.picture} alt={host.name} />
                        </div>
                    </div>
                </div>
                {/* Tags */}
                <div className="tags-rate">
                    <Tags tags = {ficheLogement.tags}>
                    </Tags>
                {/* Rates */}
                    <Rate rating = {ficheLogement.rating}>
                    </Rate>
                </div>
            </div>
            <div className="info-bar">
            {/* Desc/Equip */}
            <Dropdown label="Description" content={<div className="description-logement">{description}</div>} />
            <Dropdown label="Equipements" content={
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