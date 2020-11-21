import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter  } from 'react-icons/ai'



export default function Portfolio() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});
    const animPropsSections = useSpring({ to: { opacity: 1, transform: 'translateY(0)' }, from: { opacity: 0, transform: 'translateY(-20)' } })

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
            <animated.div style={ animPropsAboutMe}>
                <Row>
                    <Col sm={12}>
                        <TextSection variant="dark" render={(<Row>
                            <Col className="footerCopyrightContainer" sm={6} style={{ fontSize: "17px", paddingTop: "3px", cursor: "default" }}>
                                <p>Copyright © Sriniwas Jha</p>
                            </Col>
                            <Col className="footerLinksContainer" sm={6} style={{ textAlign: "right" }}>
                                <a className="footerLinks" href="https://www.linkedin.com/in/sriniwasj/" target="_black" rel="noreferrer"><AiOutlineLinkedin fontSize={30} /></a>
                                <a className="footerLinks" href="https://github.com/sriniwas14" target="_black" rel="noreferrer"><AiOutlineGithub fontSize={30} /></a>
                                <a className="footerLinks" href="https://twitter.com/Sriniwasj" target="_black" rel="noreferrer"><AiOutlineTwitter fontSize={30} /></a>
                            </Col>
                        </Row>)} />
                    </Col>
                </Row>
            </animated.div>
        </Container>
    )
}
