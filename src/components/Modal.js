import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onRequestClose, selected }) => {
    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className="flexbox-column modal"
            contentLabel="Fruity Modal"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <button 
                className="modal__close"
                onClick={onRequestClose}
            />
            {!!selected && (
                <>
                    <img
                        alt={selected.name}
                        className="modal__image"
                        id={selected.id}
                        src={selected.img}
                    />
                    <span className="modal__caption">{selected.name}</span>
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
