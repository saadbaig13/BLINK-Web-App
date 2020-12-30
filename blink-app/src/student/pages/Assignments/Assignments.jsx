import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Assignments.scss';

function Assignments() {
    return (
        <div className="Assignments">
            <Navigation />
            <div className="assignments-main-container">
                <div class="assignments-head">
                    <h3>05</h3>
                    <h2>Assignments</h2>
                </div>
                <div class="assignments-headimg"></div>
            </div>
        </div>
    )
}

export default Assignments
