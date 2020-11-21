import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col } from 'react-bootstrap'

import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import Footer from './elements/Footer';



export default function Portfolio() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <Container>
            <animated.div style={ animPropsAboutMe}>
                <Row>
                    <Col sm={12}>
                        <TextSection variant="dark" render={(
                            <div style={{ display: "flex" }}>
                                <div style={{ padding: "7px 10px", cursor: "default", width: "100%" }}>
                                    <h5 style={{ textAlign: "center", margin: 0 }}>Portfolio</h5>
                                </div>
                            </div>
                        )}/>
                        <TextSection variant="dark" heading="Programming" render={(<ProjectScroller projects={activeProjects} />)} />
                    </Col>
                </Row>
            </animated.div>
            <animated.div style={ animPropsAboutMe}>
                <Row>
                    <Col sm={12}>
                        <TextSection heading="3D Models" render={(<ProjectScroller projects={activeProjects} />)} />
                    </Col>
                </Row>
            </animated.div>
            <Footer />
        </Container>
    )
}
