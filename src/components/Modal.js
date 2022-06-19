import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({ selectedFruit, modalIsOpen, closeModal }) => (
    <ReactModal
        appElement={document.getElementById('root')}
        // className=""
        // closeTimeoutMS={250}
        contentLabel="Fruit Modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
    >
        {selectedFruit && <h3>Selected Fruit: {selectedFruit.name}</h3>}
        {selectedFruit && <img src={selectedFruit.img.color} alt={selectedFruit.name} width="75px" height="75px" />}
        <button onClick={closeModal}>Okay</button>
    </ReactModal>
)

export { Modal as default }