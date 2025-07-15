

import { useEffect } from "react";

const Modal = ({ isOpen, onClose, imageUrl }) => {
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (event.target.classList.contains('modal-overlay')) {
          onClose();
        }
      };
  
      if (isOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
      } else {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isOpen, onClose]);
  
    const closeModal = () => {
      onClose();
    };
  
    return (
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 modal-overlay ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white max-w-lg mx-auto p-8 rounded-lg overflow-hidden">
          <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={imageUrl} alt="Full size" className="w-full" />
        </div>
      </div>
    );
  };
  
  export default Modal;