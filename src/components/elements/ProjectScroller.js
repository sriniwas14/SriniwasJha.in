import React, { useRef, useState, useEffect } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

export default function ProjectScroller(props) {
    const sliderRef = useRef()
    const [paginationVisible, setPaginationVisible] = useState(true)

    const scrollToPosition = (direction) => {
        let sliderWidth = sliderRef.current.parentElement.scrollWidth;
        let currentScroll = sliderRef.current.scrollLeft;

        if((sliderWidth+currentScroll)===sliderRef.current.scrollWidth){
            sliderRef.current.scrollLeft = 0
            return
        }

        if(direction==="next"){
            sliderRef.current.scrollLeft = currentScroll+sliderWidth
        } else if(direction==="prev") {
            sliderRef.current.scrollLeft = currentScroll-sliderWidth
        }
    }

    // Handle Resize event to toggle pagination

    return (
        <Row>
            <div ref={sliderRef} className="cs_ProjectScrollerSlidingArea">
            {
                props.projects.map(project=> (<Col xs={12} sm={4}><ProjectCard project={project} /></Col>))
            }
            </div>

            {
                (props.projects.length>3 || paginationVisible) ? (<div style={{ textAlign: "center", width: "100%" }}>
                <ButtonGroup>
                    <Button onClick={()=> scrollToPosition("prev")}>&lt;</Button>
                    <Button onClick={()=> scrollToPosition("next")}>&gt;</Button>
                </ButtonGroup>
                </div>) : ""
            }
            
        </Row>
    )
}
