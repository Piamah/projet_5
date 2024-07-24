import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import datas from '../datas/logements.json'
import '../styles/Logement.scss'
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousel";

// Récupération de l'id du logement
const Logement = () => {
    const {id} = useParams()
    const ficheLogement = datas.find((logement)=>logement.id === id)
    // console.log(ficheLogement);


// Récupération des données

const {title, description, host, rating ,location ,equipments ,tags ,pictures} = ficheLogement;
  return (
    <>
      <Header />
        <div className="logement-section">
            {/* Photos du logement */}
            <Carousel pictures = {ficheLogement.pictures}>

            </Carousel>
            <div className="info-logement">
                <div>
                    <div className="title-logement">{title}</div>
                    <div className="location-logement">{location}</div>
                    {/* Tags */}
                    <div className="tags-section">
                        {/* {tags.map((tag, id) => (
                        <div className="tags-logement">
                        <span key={id} className="tag">{tag}</span>
                        </div>
                        ))} */}
                    </div>
                </div>
                <div className="host-rating">
                    <div className="host-logement">
                            <span className="host-name">{host.name}</span>
                            <img className="host-picture" src={host.picture} alt={host.name} />
                        </div>
                    <div className="rate-logement">{rating}</div>
                </div>
            </div>
            <div className="info-bar">
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