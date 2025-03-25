import React from "react";

const PopUp = ({ isOpen, onClose, filePath }) => {
  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4">PopUp Content</h2>
        <p>File Path: {filePath}</p>
      </div>
    </dialog>
  );
};

export default PopUp;