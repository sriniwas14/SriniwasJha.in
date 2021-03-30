import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';
import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects } from '../ApiCalls'

import Footer from './elements/Footer';



export default function Contact() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <>
            <animated.div style={ animPropsAboutMe}>
                        <TextSection className="cs_homeHeader" render={(
                            <div style={{ display: "flex", textAlign: "center"}}>
                                <div style={{ padding: "7px 10px", cursor: "default", width: "100%" }}>
                                    <h2 style={{ fontFamily: "oswald" }}>Contact</h2>
                                    <p>Get in touch with me.</p>
                                </div>
                            </div>
                        )}/>
                        <TextSection variant="dark" >
                            <Container>
                                <form className="customForm">
                                    <Row>
                                        <Col sm={{ span: 8, offset: 2 }} >
                                            <input type="text" name="name" placeholder="Full Name"/>
                                            <input type="phone" name="phone" placeholder="Phone Number"/>
                                            <input type="email" name="email" placeholder="E-Mail Address"/>
                                            <button>Submit</button>
                                        </Col>
                                    </Row>
                                </form>
                            </Container>
                        </TextSection>
            </animated.div>
            <Footer />
        </>
    )
}
