import { useState, useEffect, useRef } from 'react'
import './App.css'
import Card from './components/Card'
import Display from './components/Display'

function App() {
    const [displayTime, setDisplayTime] = useState(1500)
    const [sessionTime, setSessionTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [timer, setTimer] = useState(false);
    const [active, setActive] = useState("Session");
    const audio = useRef(null);
    const tick = useRef(null);

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return `${minutes}:${seconds}`;
    }

    const changeTime = (value, type) => {
        let newTime;
        type === "Session" ? newTime = sessionTime + (value) : newTime = breakTime + (value);
        if (newTime > 0 && newTime <= 60 && !timer) {
            type === "Session" ? setSessionTime(newTime) : setBreakTime(newTime);
            if (type === "Session") {
                setDisplayTime(newTime * 60);
            }
        }
    }

    const reset = () => {
        setSessionTime(25);
        setBreakTime(5);
        setDisplayTime(1500);
        setTimer(false);
        setActive("Session");
        audio.current.load();
        tick.current.load();
    }

    useEffect(() => {
        if (timer && displayTime > 0) {
            const interval = setTimeout(() => {
                setDisplayTime(displayTime - 1)
                tick.current.play();
                tick.current.currentTime = 0;
            }, 1000)
            return () => clearInterval(interval);
        } else if (displayTime === 0) {
            audio.current.play();
            audio.current.currentTime = 0;

            if (active === "Session") {
                setDisplayTime(breakTime * 60);
                setActive("Break");
            }
            if (active === "Break") {
                setDisplayTime(sessionTime * 60);
                setActive("Session");
            }
        }
    }, [sessionTime, breakTime, displayTime, timer, active]);

    const playPause = () => {
        setTimer(!timer);
    }

    return (
        <>
            <div className='container'>
                <h1>25 + 5 JS Clock</h1>
                <div className='counter'>
                    <Card heading="Session" length={sessionTime} changeTime={changeTime} timer={timer} />
                    <Card heading="Break" length={breakTime} changeTime={changeTime} timer={timer} />
                </div>
                <Display counter={formatTime(displayTime)} active={active} reset={reset} playPause={playPause} timer={timer} audio={audio} tick={tick} />
            </div>
        </>
    )
}

export default App
