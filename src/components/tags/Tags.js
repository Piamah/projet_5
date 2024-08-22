import React from 'react';
import '../tags/Tags.scss'

// Récupération des tags
const Tags = ({tags}) => {
    // console.log(tags);

    return (
        <div>
            <div className="tags-list">
            {tags.map((tag, id) => (
                        <div key={id} className="tags-logement">
                        <span className="tag">{tag}</span>
                        </div>
                        ))}

            </div>
        </div>
    )
}

export default Tags