import React from 'react';


// Récupération des tags
const Tags = ({tags}) => {
    console.log(tags);

    return (
        <div className="tags-list">
            <div>
            {tags.map((tag, id) => (
                        <div className="tags-logement">
                        <span key={id} className="tag">{tag}</span>
                        </div>
                        ))}

            </div>
        </div>
    )
}

export default Tags