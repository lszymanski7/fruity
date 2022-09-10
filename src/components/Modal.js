import PropTypes from 'prop-types'
import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({ isOpen, onRequestClose, selectedFruit }) => {
    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="modal"
            contentLabel="Fruity Modal"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            {
				!!selectedFruit &&
                <div>
                    <h2 className="modal__title">{selectedFruit.name}</h2>
                    <img
						alt={selectedFruit.name}
                        className="modal__image"
                        id={selectedFruit.id}
                        src={selectedFruit.img.color}
                    />
                </div>
            }
            <button className="button" onClick={onRequestClose}>Okay</button>
        </ReactModal>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    selectedFruit: PropTypes.object
}

export { Modal as default }
