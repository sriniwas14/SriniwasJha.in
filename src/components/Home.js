import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

export default function Home() {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <TextSection heading="About Me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <TextSection variant="dark" heading="Active Projects" render={(<ProjectScroller projects={activeProjects} />)} />
                </Col>
            </Row>
        </Container>
    )
}
