import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Green checkmark icon from react-icons

const Modal = ({ message, onClose, onAction, actionText }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 animate__animated animate__zoomIn">
        <div className="flex justify-center items-center mb-4">
          <FaCheckCircle className="text-green-600 text-6xl sm:text-5xl md:text-6xl lg:text-7xl animate__animated animate__heartBeat" />
        </div>
        <h3 className="overflow-y-hidden text-2xl sm:text-xl md:text-2xl lg:text-3xl text-center text-green-600 mb-6">
          {message}
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onAction}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg cursor-pointer duration-300 hover:opacity-70 w-full sm:w-auto"
          >
            {actionText}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg cursor-pointer duration-300 hover:opacity-70 w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


