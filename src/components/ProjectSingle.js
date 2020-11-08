import React,{ useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TextSection from './elements/TextSection'
import { useParams, Link } from "react-router-dom"
import { AiOutlineLeft, AiOutlineGithub  } from 'react-icons/ai'

import { getProjectById, getSlidesById } from '../ApiCalls'
import CustomCarousel from './elements/CustomCarousel'
import ProjectSingleDetails from './elements/ProjectSingleDetails'

export default function ProjectSingle() {
    let { projectId } = useParams();
<<<<<<< HEAD
    const [project, setProject] = useState({ title: "", details: {} });
=======
    const [project, setProject] = useState({ title: "", details: [] });
>>>>>>> 81367c56307aa0c54e1869769b8ddc952434117d
    const [slides, setSlides] = useState([])
    
    useEffect(() => {
        setSlides(getSlidesById(projectId).slides)
    }, [])


    useEffect(() => {
        setProject(getProjectById(projectId))
    }, [])

    return (
        <Container>
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
<<<<<<< HEAD
                                {
                                    Object.keys(project.details).length>0 ? (<ProjectSingleDetails details={ project.details }/>) : ""
                                }
=======
                                <ProjectSingleDetails details={ project.details }/>
>>>>>>> 81367c56307aa0c54e1869769b8ddc952434117d
                            </Col>
                        </Row>
                    )} />
                </Col>
            </Row>
        </Container>
    )
}
