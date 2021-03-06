import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Row, Col } from 'react-bootstrap'
import TextSection from '../elements/TextSection'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter  } from 'react-icons/ai'

export default function Footer() {
    const animPropsFooter = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <animated.div style={ animPropsFooter }>
                        <TextSection className="cs_footer" variant="dark" render={(<Row>
                            <Col className="footerCopyrightContainer" sm={6} style={{ fontSize: "17px", paddingTop: "3px", cursor: "default" }}>
                                <p>Made With React by Sriniwas</p>
                            </Col>
                            <Col className="footerLinksContainer" sm={6} style={{ textAlign: "right" }}>
                                <a className="footerLinks" href="https://www.linkedin.com/in/sriniwasj/" target="_black" rel="noreferrer"><AiOutlineLinkedin fontSize={30} /></a>
                                <a className="footerLinks" href="https://github.com/sriniwas14" target="_black" rel="noreferrer"><AiOutlineGithub fontSize={30} /></a>
                                <a className="footerLinks" href="https://twitter.com/Sriniwasj" target="_black" rel="noreferrer"><AiOutlineTwitter fontSize={30} /></a>
                            </Col>
                        </Row>)} />
        </animated.div>
    )
}
