import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import useTheme from '../hooks/useTheme'

const Modal = ({ isOpen, onAfterClose, onRequestClose, selectedFruit }) => {
    // Context value for dark and light theme
    const { theme } = useTheme()

    return (
        <ReactModal
            appElement={document.getElementById('root')}
            className={`modal modal--${theme}`}
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
                    <span className={`modal__caption modal__caption--${theme}`}>{selectedFruit.name.toUpperCase()}</span>
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

export default Modal
