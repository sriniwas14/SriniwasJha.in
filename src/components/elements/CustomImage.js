import React, { useState, useEffect } from 'react'
import Loader from './Loader'

export default function CustomImage(props) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
        <img onLoad={()=>setLoaded(true)} className={props.className} alt={props.alt} src={props.src} style={{ display: loaded ? "inherit" : "none" }}/>
        <Loader height={props.height} loaded={loaded}/>
        </div>        
    )
}
