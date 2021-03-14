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
        <>
            <animated.div style={animPropsAboutMe}>
                <TextSection heading="About Me">
                    <p>Hello There! It's me Sriniwas, I've been tinkering with computers since I was a kid and because of that I have earned a deep understanding of it various functions. </p>
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
