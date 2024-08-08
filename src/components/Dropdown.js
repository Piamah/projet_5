import React, { useState } from 'react';
import '../styles/Dropdown.scss'

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
            {isOpen && (
                <div className={`dropdown-content ${isOpen ? "open" :"close"}`}>{content} </div>
            )}
        </div>
    );
};

export default Dropdown;


  
//     return (
//       <div className="collapse">
//         <button className="collapse-button" onClick={toggleCollapse}>
//           {title} <FontAwesomeIcon icon={faAngleUp} className={`arrow ${isOpen ? "down" : "up"}`} />
//         </button>
//         <div className={`collapse-content ${isOpen ? "open" : ""}`}>{children}</div>
//       </div>
//     );
//   };
  
//   export default Collapse;