import React from "react";
import fullStar from "../assets/fullStar.png"
import emptyStar from "../assets/emptyStar.png"

// Récupération des tags
const Rate = ({rating}) => {
    const score = rating;
    const notes=[1, 2, 3, 4, 5]
    console.log(score);
    return (
        <div className="rates-section">
            <div>
            {notes.map((note) => (
                //Si mon score supp ou égal à la note alors
                        score >= note ? (
                            <img className="star" alt="full-star"
                            //To string to convert data en en chaine de caractères
                            key ={note.toString()}
                            src={fullStar}
                            
                            />
                        ) : ( // Ou..
                            <img className="star" alt="full-star"
                            key ={note.toString()}
                            src={emptyStar}
                            />
                        )
                        ))}

            </div>
        </div>
    )
}

export default Rate

