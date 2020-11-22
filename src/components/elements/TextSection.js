import React from 'react'

export default function TextSection(props) {
    return (
        <div className={"cs_Section "+(props.variant==='dark' ? "dark" : "light")}>
            {
                props.heading!==undefined ? <h3 className="cs_Headline">{props.heading}</h3> : ""
            }
            
            {
                props.render!== undefined ? (props.render) : (<p className="cs_Text">{props.text}</p>)
            }
            {
                props.children
            }
        </div>
    )
}
