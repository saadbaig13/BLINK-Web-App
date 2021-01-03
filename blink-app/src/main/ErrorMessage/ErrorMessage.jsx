import React from 'react'
import './ErrorMessage.scss';

export default function ErrorMessage(props) {
    return (
        <div className="ErrorMessage">
            <a onClick={props.clearError}>
                <span>{props.message}</span>
            </a>
        </div>
    )
}
