import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <span className="absolute top-0 right-0 p-4">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            X
          </button>
        </span>
        <h2 className="text-2xl mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
