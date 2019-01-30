import React from "react";
import ReactModal from "react-modal";

export default function Modal(props) {
    return(
        <ReactModal isOpen={true} className="modal" overlayClassName="Overlay">
            <span>{props.value}</span>
            <div className="buttonsModal">
                <button>Close</button>
                <button>Restart</button>
            </div>
        </ReactModal>
    );
}