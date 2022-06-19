import React from 'react'
import ReactModal from 'react-modal'

const Modal = (props) => {
    const { selectedFruit, modalIsOpen, closeModal } = props

    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="modal"
            // closeTimeoutMS={250}
            contentLabel="Fruit Modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            {
                selectedFruit && 
                <div>
                    <h2 className="modal__title">{selectedFruit.name}</h2>
                    <img className="modal__image" src={selectedFruit.img.color} alt={selectedFruit.name} />
                </div>
            }
            <button className="button" onClick={closeModal}>Okay</button>
        </ReactModal>
    )
}

export { Modal as default }