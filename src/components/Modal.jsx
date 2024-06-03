
import React from 'react';

// Modal component definition
const Modal = ({ isOpen, onClose, title, children }) => {
  // If the modal is not open, return null (do not render anything)
  if (!isOpen) return null;

  return (
    // Modal background overlay
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
      {/* Modal content container */}
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        {/* Close button container */}
        <span className="absolute top-0 right-0 p-4">
          {/* Close button */}
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            X
          </button>
        </span>
        {/* Modal title */}
        <h2 className="text-2xl mb-4">{title}</h2>
        {/* Modal children (content) */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
