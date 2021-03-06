import React, { useState, useEffect } from 'react'
import Loader from './Loader'

export default function CustomImage(props) {
    const [loaded, setLoaded] = useState(false)
    console.log("IMAGE ", props.src)

    return (
        <div>
        <img onLoad={()=>setLoaded(true)} className={props.className} alt={props.alt} src={props.src} style={{ display: loaded ? "block" : "none", width: "100%" }}/>
        <Loader height={props.height} loaded={loaded}/>
        </div>        
    )
}
