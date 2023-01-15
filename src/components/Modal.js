import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onRequestClose, selected }) => {
    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="flexbox-column modal"
            contentLabel="Application Modal"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            {!!selected && (
                <>
                    <img
                        alt={selected.name}
                        className="modal__image"
                        id={selected.id}
                        src={selected.img}
                    />
                    <span className="modal__caption">{selected.name.toUpperCase()}</span>
                </>
            )}
        </ReactModal>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    selected: PropTypes.object
}

export { Modal as default }
