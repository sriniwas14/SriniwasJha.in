import React from 'react'

export default function ProgressBar(props) {
    return (
        <div>
            <div className="cs_progressBar">
                <div style={{ width: `${props.value}%` }} className="cs_progressBarValue">
                    <text>{ props.innerText }</text>
                </div>
            </div>
        </div>
    )
}
