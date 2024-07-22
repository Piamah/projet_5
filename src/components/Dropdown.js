import React, { useState } from 'react';
import '../styles/Dropdown.scss'

const Dropdown = ({label, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className='dropdown-button' onClick={toggleDropdown}>
                {isOpen ? `${label}` : `${label}` }
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Dropdown;