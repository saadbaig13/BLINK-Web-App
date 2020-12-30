import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './Whiteboard.scss';

function Whiteboard() {
    return (
        <div className="Whiteboard">
            <Navigation />
            <div className="whiteboard-main-container">
                <div class="whiteboard-head">
                    <h3>07</h3>
                    <h2>Digital Whiteboard</h2>
                </div>
                <div class="whiteboard-headimg"></div>
            </div>
        </div>
    )
}

export default Whiteboard
