import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'

import WelcomeImage from '../assets/welcome.svg'
import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import Footer from './elements/Footer'



export default function Home() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <>
            <animated.div style={animPropsAboutMe}>
                <TextSection className="cs_homeHeader">
                    <Col sm={12} style={{ display: "flex" }}>
                        <div style={{ width: "100%", margin: "auto" }}>
                            <h1>Hello There! 😀</h1>
                            <p>Scroll Down to learn more about me</p>
                        </div>
                    </Col>
                </TextSection>
            </animated.div>
            <animated.div style={ animPropsAboutMe}>
                <TextSection variant="dark" heading="Programming" render={(<ProjectScroller projects={activeProjects} />)} />
            </animated.div>
            <animated.div style={ animPropsAboutMe}>
                <TextSection heading="3D Models" render={(<ProjectScroller projects={activeProjects} />)} />
            </animated.div>
            <Footer />
        </>
    )
}
