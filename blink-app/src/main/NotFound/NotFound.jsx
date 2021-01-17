import React from 'react'
import './NotFound.scss';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>Not found</h3>
            <p>This page is missing or you assembled the link incorrectly.</p>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    )
}

export default NotFound
