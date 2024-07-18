import React from "react";
import { Link } from 'react-router-dom'
import idLogement from '../datas/logements.json'
import '../styles/Cards.scss'
import Card from "./Card";

const Cards = () => {
    return (
        <div className="card-list">
            {idLogement.map((logement) => (
                 <Link to={`/logement/${logement.id}`}>
                    <Card
                        title={logement.title}
                        cover={logement.cover}
                    />
                </Link>
            ))}
        </div>
    );
};
export default Cards