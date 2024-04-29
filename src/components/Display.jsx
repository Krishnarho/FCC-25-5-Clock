import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRepeat } from '@fortawesome/free-solid-svg-icons';
import timerSound from '../assets/tickv.mp3'

function Display({ counter, reset, active, timer, playPause, audio, tick }) {
    return (
        <div className='display'>
            <h2 className='active' id="timer-label">{active}</h2>
            <span id="time-left">{counter}</span>
            <div className='controls'>
                <button
                    id='start_stop'
                    onClick={playPause}
                > {timer ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>
                <button
                    id='reset'
                    onClick={reset}
                ><FontAwesomeIcon icon={faRepeat} />
                </button>
                <audio
                    id='beep'
                    type="audio/mpeg"
                    src="http://cd.textfiles.com/10000gp2/500SNDS/33_60.WAV"
                    ref={audio}
                />
                <audio
                    id='my-audio'
                    type="audio/mpeg"
                    src={timerSound}
                    ref={tick}
                />
            </div>
        </div>
    )
}

export default Display