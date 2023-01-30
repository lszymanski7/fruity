import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onAfterClose, onRequestClose, selectedFruit }) => {
    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="modal"
            closeTimeoutMS={200}
            contentLabel="Application Modal"
            isOpen={isOpen}
            onAfterClose={onAfterClose}
            onRequestClose={onRequestClose}
        >
            {!!selectedFruit && (
                <>
                    <img
                        alt={selectedFruit.name}
                        className="modal__image"
                        src={selectedFruit.img}
                    />
                    <span className="modal__caption">{selectedFruit.name.toUpperCase()}</span>
                </>
            )}
        </ReactModal>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onAfterClose: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    selectedFruit: PropTypes.object
}

export { Modal as default }
