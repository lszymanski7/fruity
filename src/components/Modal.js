import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onRequestClose, selected }) => {
    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="modal"
            contentLabel="Fruity Modal"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            {!!selected && (
                <div>
                    <h2 className="modal__title">{selected.name}</h2>
                    <img
                        alt={selected.name}
                        className="modal__image"
                        id={selected.id}
                        src={selected.img}
                    />
                </div>
            )}
            <button
                className="button"
                onClick={onRequestClose}
            >
                Okay
            </button>
        </ReactModal>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    selected: PropTypes.object
}

export { Modal as default }
