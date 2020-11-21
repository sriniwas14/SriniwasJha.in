import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';

import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import Footer from './elements/Footer';



export default function Home() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <Container>
            <animated.div style={animPropsAboutMe}>
                <Row>
                    <Col sm={12}>
                        <TextSection heading="About Me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Col>
                </Row>
            </animated.div>
            <animated.div style={ animPropsAboutMe}>
                <Row>
                    <Col sm={12}>
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
