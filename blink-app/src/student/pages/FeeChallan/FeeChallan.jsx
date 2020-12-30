import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './FeeChallan.scss';

function FeeChallan() {
    return (
        <div className="FeeChallan">
            <Navigation />
            <div className="fee-main-container">
                <div class="fee-head">
                    <h3>09</h3>
                    <h2>Fee Challan</h2>
                </div>
                <div class="fee-headimg"></div>
            </div>
        </div>
    )
}

export default FeeChallan
