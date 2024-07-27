import React, { useState } from 'react';
import '../styles/Dropdown.scss'

const Dropdown = ({label, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const show = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className='dropdown-button' onClick={show}>
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

// const Collapse = ({ title, children }) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleCollapse = () => {
//       setIsOpen(!isOpen);
//     };
  
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