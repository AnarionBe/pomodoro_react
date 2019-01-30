import React, {useState} from "react";
import Timer from "./Timer";
import ToggleButton from "./ToggleButton";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Header from "./Header";
import Modal from "./Modal";
import Button from "./Button";
import "./style.css";

export default function Main(props) {
    const [time, setTime] = useState(1); // create default time to 20 minutes
    const [status, setStatus] = useState(false);
    //let modalOn = false;

    let tmp = time;
    const StartReset = () => {
        if(!time) return;
        setStatus(!status);
        if(!status) window.intervalID = setInterval(action, 1000);
        else {
            clearInterval(window.intervalID);
            setTime(1200);
        }
    };

    const action = () => {
        if(time === 0) {
            clearInterval(window.intervalID);
            window.intervalID = null;
            return;
        }
        tmp--; // => well why do i need that ??? THIS IS SHIT HOLY CRAP
        setTime(tmp);
    }

    const IncrementTime = () => {
        setTime(time + 60);
    }

    const DecrementTime = () => {
        if(time < 60) {
            setTime(0);
            return;
        }
        setTime(time - 60);
    }

    return(
        <div className="main">
            {/* {window.intervalID && !time && (<Modal value="What's next ?"/>)} */}
            <Header/>
            <div className="timerZone">
                <div className="display">
                    <Timer time={time}/>
                </div>
                <div className="buttons">
                    {!status && (<Button onClick={IncrementTime} value="+" className="increment radiusTop buttonHover"/>)}
                    <Button onClick={StartReset} value={status ? "Reset" : "Start"} className="toggle buttonHover"/>
                    {!status && (<Button onClick={DecrementTime} value="-" className="decrement radiusBot buttonHover"/>)}
                </div>
            </div>
        </div>
    );
}