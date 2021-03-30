import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

export default function ProjectScroller(props) {

    return (
        <Row className="cs_ProjectRow">
            {
                props.projects.map(project => (<Col sm={6}><ProjectCard project={project} /></Col>))
            }            
        </Row>
    )
}
