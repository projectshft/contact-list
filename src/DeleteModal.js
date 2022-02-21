import React, { useRef } from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ setShowModal, currId, removeContact }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h6>Are you sure you want to delete?</h6>
        <button id="x-btn" onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faXmark}/></button>
        <button className="btn btn-success btn-sm" onClick={() => {
          removeContact(currId)
          setShowModal(false)
          }}>Yes</button>
        <button className="btn btn-danger btn-sm" onClick={() => setShowModal(false)}>No</button>
      </div>
      
    </div>,
    document.getElementById("portal")
  );
};