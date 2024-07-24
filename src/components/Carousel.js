import React, { useState } from 'react';
import '../styles/Carousel.scss'

const Carousel = ({pictures}) => {
    console.log(pictures);
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
      };

    const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };
console.log(current);
    return (
        <div className="carousel">
            {current > 0 && (
                <button className="left-arrow" onClick={prevSlide}>
                ❮
                {/* <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> */}
                </button>
          )}
          {current < pictures.length - 1 && (
                <button className="right-arrow" onClick={nextSlide}>
                ❯
                {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
                </button>
          )}
            <div className="slide-number">{`${current + 1}/${pictures.length}`}</div>
            {pictures.map((picture, id) => (
                <div className={id === current ? "slide active" : "slide"} key={id}>
                {id === current && (
                <div className='image-container'>
                    <img src={picture} alt={`slide ${id}`} className="image" />
                </div>
                )}
              </div>
            )
        )}
        </div>
    )
}

export default Carousel