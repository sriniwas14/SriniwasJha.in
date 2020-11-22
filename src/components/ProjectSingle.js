import React,{ useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TextSection from './elements/TextSection'
import { useParams, Link } from "react-router-dom"
import { useSpring, animated } from 'react-spring'
import { AiOutlineLeft, AiOutlineGithub  } from 'react-icons/ai'

import { getProjectById, getSlidesById } from '../ApiCalls'
import CustomCarousel from './elements/CustomCarousel'
import ProjectSingleDetails from './elements/ProjectSingleDetails'

export default function ProjectSingle() {
    let { projectId } = useParams();
    const [project, setProject] = useState({ title: "", details: {} });
    const [slides, setSlides] = useState([])

    const animProps = useSpring({ to: { opacity: 1, transform: 'scaleY(1)' } , from:{ opacity: 0, transform: 'scaleY(0.8)' }})
    
    useEffect(() => {
        setSlides(getSlidesById(projectId).slides)
    }, [])


    useEffect(() => {
        setProject(getProjectById(projectId))
    }, [])

    return (
        <Container>
            <animated.div style={animProps}>
            <Row>
                <Col md={12}>
                    <TextSection variant="dark" render={(
                        <div style={{ display: "flex" }}>
                            <div xs={4}>
                                <Link to="/"><Button variant="dark"><AiOutlineLeft/></Button></Link>
                            </div>
                            <div style={{ padding: "7px 10px", cursor: "default", width: "100%" }}>
                                <h5 style={{ textAlign: "center", margin: 0 }}>{project.title}</h5>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <a href={ project.details.projectUrl } target="_blank" rel="noreferrer"><AiOutlineGithub fontSize={35}/></a>
                            </div>
                        </div>
                    )}/>
                    
                    <CustomCarousel slides={slides} />

                    <TextSection variant="dark" render={(
                        <Row>
                            <Col sm={6}>
                                <h4>Introduction</h4>
                                <p>{ project.introduction }</p>
                            </Col>
                            <Col sm={6}>
                                <h4>Details</h4>
                                {
                                    Object.keys(project.details).length>0 ? (<ProjectSingleDetails details={ project.details }/>) : ""
                                }
                            </Col>
                        </Row>
                    )} />
                </Col>
            </Row>
            </animated.div>
        </Container>
    )
}
