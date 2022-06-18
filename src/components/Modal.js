import React from "react"
import ReactModal from 'react-modal'

import fruits from "../dictionary/fruits"
import apple from "../assets/icons/fruits-color/apple.png"

const Modal = () => (
    <ReactModal
        isOpen={false}
        //onRequestClose={false}
        contentLabel="Random Fruit"
        closeTimeoutMS={200}
        //className="modal"
    >
        <h3>Random Fruit</h3>
        <img src={apple} alt={fruits[0].name} />
        <button>Okay</button>
    </ReactModal>
)

export { Modal as default }