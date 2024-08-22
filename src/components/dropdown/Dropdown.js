import React, { useState } from 'react';
import '../dropdown/Dropdown.scss'

const Dropdown = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown'>
            <button className='dropdown-button' onClick={toggleDropdown}>
                {title}
                <i className={`fa-solid fa-chevron-up ${isOpen ? "down" : "up"}`}></i>
        
            </button> 
            <div className={`dropdown-content ${isOpen ? "open" :"close"}`}>
                <div className="dropdown-text">{content}</div> 
            </div>
        </div>
    );
};

export default Dropdown;

