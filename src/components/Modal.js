import React from "react";
import ReactModal from "react-modal";
import Button from "./Button";

export default function Modal(props) {
    ReactModal.setAppElement(document.getElementById("App"));
    return(
        <ReactModal isOpen={true} className="modal" overlayClassName="Overlay">
            <span>{props.value}</span>
            <div className="buttonsModal">
                <Button onClick={props.leftButton} value="Close"/>
                <Button onClick={props.rightButton} value="Restart"/>
            </div>
        </ReactModal>
    );
}