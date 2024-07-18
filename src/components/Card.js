import React from "react";
import '../styles/Cards.css'

const Card = ({title, cover}) => {
    return (
          <article className="card">
            <img className="card-cover" src = {cover} alt = {title} ></img>
                <h3 className="card-title">{title}</h3>
          </article>
    );
  };

  export default Card