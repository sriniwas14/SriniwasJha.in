import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

export default function ProjectScroller(props) {
    return (
        <Row>
            {
                props.projects.map(project=> (<Col sm={4}><ProjectCard project={project} /></Col>))
            }
        </Row>
    )
}
