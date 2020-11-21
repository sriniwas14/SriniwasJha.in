import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';

import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter  } from 'react-icons/ai'



export default function Contact() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});
    const animPropsSections = useSpring({ to: { opacity: 1, transform: 'translateY(0)' }, from: { opacity: 0, transform: 'translateY(-20)' } })

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
