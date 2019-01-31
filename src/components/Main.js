import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import Header from "./Header";
import Modal from "./Modal";
import Button from "./Button";
import "./style.css";

export default function Main(props) {
    const defaultTime = 1500;
    const [time, setTime] = useState(defaultTime); // create default time to 20 minutes
    const [status, setStatus] = useState(false);
    const [shown, setShown] = useState(false);
    let intervalID;
    useEffect(() => { // => essayer de comprendre mieux que ça cette jolie merde
        intervalID = setInterval(Action, 1000);
        return () => {
            clearInterval(intervalID);
        }
    });

    const Start = () => {
        setStatus(true);
    }

    const Reset = () => {
        setStatus(false);
        setTime(defaultTime);
    }

    const Restart = () => {
        setShown(false);
        Reset();
        Start();
    }

    const Action = () => {
        if(!status) return;
        if(time === 0) {
            setStatus(false);
            setShown(true);
            return;
        }
        setTime(time - 1);
    }

    const CountDown = () => {
        console.log("time 1:" + time);
        
        console.log("time 2:" + time);
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

    const HideModal = () => {
        setShown(!shown);
    }

    return(
        <div className="main">
            <Header/>
            {shown && (<Modal value="What's next ?" leftButton={HideModal} rightButton={Restart}/>)}
            <div className="timerZone">
                <div className="display">
                    <Timer time={time}/>
                </div>
                <div className="buttons">
                    {!status && (<Button onClick={IncrementTime} value="+" className="increment radiusTop buttonHover"/>)}
                    <Button onClick={status ? Reset : Start} value={status ? "Reset" : "Start"} className="toggle buttonHover"/>
                    {!status && (<Button onClick={DecrementTime} value="-" className="decrement radiusBot buttonHover"/>)}
                </div>
            </div>
        </div>
    );
}