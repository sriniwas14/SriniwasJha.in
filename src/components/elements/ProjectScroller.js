import React, { useRef, useState, useEffect } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function ProjectScroller(props) {
    const sliderRef = useRef()
    const [paginationVisible, setPaginationVisible] = useState(false)

    const scrollToPosition = (direction) => {
        let sliderWidth = sliderRef.current.parentElement.scrollWidth
        let currentScroll = sliderRef.current.scrollLeft

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


    const resizeHandler = () => {
        if (sliderRef.current.scrollWidth>sliderRef.current.parentElement.scrollWidth){
            setPaginationVisible(true)
        } else {
            setPaginationVisible(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", resizeHandler)

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    },[])

    return (
        <Row>
            <div ref={sliderRef} className="cs_ProjectScrollerSlidingArea">
            {
                props.projects.map(project=> (<Col sm={12}><ProjectCard project={project} /></Col>))
            }
            </div>

            {
                (props.projects.length>3 || paginationVisible) ? (<div style={{ textAlign: "center", width: "100%" }}>
                <ButtonGroup>
                    <Button variant="dark" onClick={()=> scrollToPosition("prev")}><AiOutlineLeft/></Button>
                    <Button variant="dark" onClick={()=> scrollToPosition("next")}><AiOutlineRight/></Button>
                </ButtonGroup>
                </div>) : ""
            }
            
        </Row>
    )
}
