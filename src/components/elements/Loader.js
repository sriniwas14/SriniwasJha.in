import React from 'react'

export default function Loader(props) {
    return (
        <div style={{ textAlign: "center", width: '100%', display: props.loaded ? "none" : "flex", height: props.height, background: "#b9b9b9", color: "black", borderRadius: 5 }}>
            <div style={{ margin: "auto" }}>Loading</div>
        </div>
    )
}
