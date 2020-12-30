import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './Media.scss';

function Media() {
    return (
        <div className="Media">
            <Navigation />
            <div className="media-main-container">
                <div class="media-head">
                    <h3>04</h3>
                    <h2>Media</h2>
                </div>
                <div class="media-headimg"></div>
            </div>
        </div>
    )
}

export default Media
