import React from 'react'
import Navigation from '../../components/Navigation/Navigation';
import './Quiz.scss';

function Quiz() {
    return (
        <div className="Quiz">
            <Navigation />
            <div className="quiz-main-container">
                <div class="quiz-head">
                    <h3>06</h3>
                    <h2>Quiz</h2>
                </div>
                <div class="quiz-headimg"></div>
            </div>
        </div>
    )
}

export default Quiz
