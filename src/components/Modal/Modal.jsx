import React from "react";
import { createPortal } from "react-dom";

import { TodoContext } from "../Context/TodoContext";

import '../../assets/css/Modal.css';
import '../../assets/css/App.css';

function Modal({ children }) {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    return createPortal(
        <div className="ModalBackground">
            <div className="Modal">
                <div className="ModalDiv">
                    <button className="close-button"
                        onClick={toggleModal}
                    >
                        <div className="in">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                        </div>
                        <div className="out">
                            <div className="close-button-block"></div>
                            <div className="close-button-block"></div>
                        </div>
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };