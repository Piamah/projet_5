import React from "react";
import '../styles/Rate.scss'

// Récupération des tags
const Rate = ({rating}) => {
    const score = rating;
    const notes=[1, 2, 3, 4, 5]
    console.log(score);
    return (
        <div className="rate-section">
            <div>
            {notes.map((note) => (
                //Si mon score supp ou égal à la note alors
                        score >= note ? (
                            <i className="fa-solid fa-star full-star" key ={note.toString()}>
                            </i>

                        ) : ( // Ou..
                            <i className="fa-solid fa-star empty-star" key ={note.toString()}>
                            </i>
                        )
                        ))}

            </div>
        </div>
    )
}

export default Rate

