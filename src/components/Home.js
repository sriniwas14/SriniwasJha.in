import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'

import WelcomeImage from '../assets/welcome.svg'
import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import Footer from './elements/Footer'
import ProgressBar from './elements/ProgressBar'



export default function Home() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <>
            <animated.div style={animPropsAboutMe}>
                <TextSection className="cs_homeHeader">
                    <Col sm={12} style={{ display: "flex" }}>
                        <div style={{ width: "100%", margin: "auto" }}>
                            <h1>Hello World! 😀</h1>
                            <p>Scroll Down to learn more about me</p>
                        </div>
                    </Col>
                </TextSection>
            </animated.div>
            <animated.div style={ animPropsAboutMe}>
                <TextSection variant="dark">
                    <h2>My Skills</h2>
                    <p>Here are some of the technologies I have worked with along with how proficient I am with them.</p>
                    <br />
                    <Row>
                        <Col sm={6}>
                            <h4>Front-End Tech</h4>
                            <ProgressBar value={85} innerText="ReactJS" />
                            <ProgressBar value={75} innerText="HTML" />
                            <ProgressBar value={80} innerText="SCSS" />
                        </Col>
                        <Col sm={6}>
                            <h4>Back-End Tech</h4>
                            <ProgressBar value={87} innerText="NodeJS" />
                            <ProgressBar value={60} innerText="Python(Flask)" />
                            <ProgressBar value={70} innerText="CorePHP" />
                        </Col>
                        <Col sm={6}>
                            <h4>Mobile Tech</h4>
                            <ProgressBar value={85} innerText="React Native" />
                            <ProgressBar value={75} innerText="Android (Java)" />
                        </Col>
                        <Col sm={6}>
                            <h4>Databases</h4>
                            <ProgressBar value={84} innerText="MySQL" />
                            <ProgressBar value={62} innerText="MongoDB" />
                        </Col>
                    </Row>
                </TextSection>
            </animated.div>
            <animated.div style={ animPropsAboutMe}>
                <TextSection>
                    <div style={{ display: "flex" }}>
                        <img style={{ margin: "auto", width: "100%", height: "auto" }} src="http://ghchart.rshah.org/sriniwas14" alt="Sriniwas' Github History" />
                    </div>
                </TextSection>
            </animated.div>
            <Footer />
        </>
    )
}
