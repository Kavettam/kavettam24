import React, { useEffect, useRef, useState } from 'react';

const Modal = ({ isOpen, onClose, imageUrl }) => {
 const modalContentRef = useRef(null);
 const [fadeOut, setFadeOut] = useState(false);

 useEffect(() => {
    if (isOpen) {
      // Set a timeout to close the modal after 3 seconds if no touch is detected
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => onClose(), 300); // Wait for the transition to complete
      }, 5000);

      // Function to handle clicks outside the modal content
      const handleClickOutside = (event) => {
        if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
          setFadeOut(true);
          setTimeout(() => onClose(), 300); // Wait for the transition to complete
        }
      };

      // Add event listener to the document
      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup function to remove the event listener
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        clearTimeout(timer);
      };
    }
 }, [isOpen, onClose]);

 if (!isOpen) {
    return null;
 }

 return (
    <div className={`modal-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="modal-content" ref={modalContentRef}>
        <img src={imageUrl} alt="Latest" />
        <button className="modal-close" onClick={() => {
          setFadeOut(true);
          setTimeout(() => onClose(), 300); // Wait for the transition to complete
        }}></button>
      </div>
    </div>
 );
};

export default Modal;
