import React from 'react'
import '../banner/Banner.scss'

const Banner = ({image, text}) => {
    return (
    <div className='banner'>
        <h1>{text}</h1>
        <img className='bannerHome' alt = 'Bannière' src = { image }></img>
    </div>
    );
}

export default Banner