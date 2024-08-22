import React from "react";
import { Link } from 'react-router-dom'
// import idLogement from '../../datas/logements.json'
import './Cards.scss';
import Card from "../card/Card";

const Cards = ({ logements }) => {
    return (
        <div className="card-list">
            {logements.map((logement) => (
                 <Link key={logement.id} to={`/logement/${logement.id}`}>
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