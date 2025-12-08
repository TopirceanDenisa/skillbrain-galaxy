import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  // Previne scrolling când modalul este deschis
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`${isOpen ? 'modal-wrapper' : 'modal-hidden'}`} onClick={closeModal}>
      <i onClick={closeModal} className="close-icon fa fa-times-circle-o" aria-hidden="true"></i>

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;