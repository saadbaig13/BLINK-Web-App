import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './AcademicReport.scss';

function AcademicReport() {
    return (
        <div className="AcademicReport">
            <Navigation />
            <div className="report-main-container">
                <div class="report-head">
                    <h3>08</h3>
                    <h2>Academic Report</h2>
                </div>
                <div class="report-headimg"></div>
            </div>
        </div>
    )
}

export default AcademicReport
