import React,{ useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TextSection from './elements/TextSection'
import { useParams, Link } from "react-router-dom"
import { AiOutlineLeft, AiOutlineGithub  } from 'react-icons/ai'

import { getProjectById } from '../ApiCalls'

export default function ProjectSingle() {
    let { projectId } = useParams();
    const [project, setProject] = useState({ title: "Hola" });


    useEffect(() => {
        setProject(getProjectById(projectId))
    })

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
                                <a href={ project.github } target="_blank"><AiOutlineGithub fontSize={35}/></a>
                            </div>
                        </div>
                    )}/>
                </Col>
            </Row>
        </Container>
    )
}
