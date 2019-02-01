import React from "react";

export default (props) => {
    const TimeParser = () => {
        const mins = Math.floor(props.time / 60);
        const secs = props.time % 60;
        if(secs < 10) return `${mins}:0${secs}`;
        return `${mins}:${secs}`;
    }

    return(
        <div className="timer">
            <span>{TimeParser()}</span>
        </div>
    );
}