import PropTypes from 'prop-types'
import React from 'react'
import ReactModal from 'react-modal'

const Modal = (props) => {
    const { selectedFruit, isOpenModal, closeModal } = props

    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="modal"
            contentLabel="Fruity Modal"
            isOpen={isOpenModal}
            onRequestClose={closeModal}
        >
            {
                selectedFruit && 
                <div>
                    <h2 className="modal__title">{selectedFruit.name}</h2>
                    <img className="modal__image" id={selectedFruit.id} src={selectedFruit.img.color} alt={selectedFruit.name} />
                </div>
            }
            <button className="button" onClick={closeModal}>Okay</button>
        </ReactModal>
    )
}

Modal.propTypes = {
	selectedFruit: PropTypes.object,
	isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}

export { Modal as default }
