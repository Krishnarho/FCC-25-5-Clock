import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Card({ heading, length, changeTime, timer }) {
    return (
        <div className='card'>
            <h2 id={`${heading.toLowerCase()}-label`}>{heading} Length</h2>
            <div className='buttons'>
                <button
                    id={`${heading.toLowerCase()}-increment`}
                    onClick={() => changeTime(1, heading)}
                    disabled={timer}
                ><FontAwesomeIcon icon={faArrowUp} />
                </button>
                <span id={`${heading.toLowerCase()}-length`}>{length}</span>
                <button
                    id={`${heading.toLowerCase()}-decrement`}
                    onClick={() => changeTime(-1, heading)}
                    disabled={timer}
                ><FontAwesomeIcon icon={faArrowDown} />
                </button>
            </div>
        </div>
    )
}

export default Card