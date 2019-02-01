import React from "react";

export default (props) => {
    return(
        <audio autoPlay>
            <source src={props.src} type={props.type}/>
        </audio>
    );
}