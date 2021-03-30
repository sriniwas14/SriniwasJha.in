import React from 'react'
import { useSpring, animated } from 'react-spring';

import TextSection from './elements/TextSection'
import ProjectScroller from './elements/ProjectScroller'
import { activeProjects, activeGames } from '../ApiCalls'
import Footer from './elements/Footer';


export default function Portfolio() {

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    return (
        <>
            <animated.div style={ animPropsAboutMe}>
                        <TextSection className="cs_homeHeader" render={(
                            <div style={{ display: "flex" }}>
                                <div style={{ padding: "7px 10px", cursor: "default", width: "100%" }}>
                                    <h2 style={{ fontFamily: "oswald" }}>Portfolio</h2>
                                    <p>Listed here are some of the projects I did, click on any one of the projects to read more about it.</p>
                                </div>
                            </div>
                        )}/>
                        <TextSection variant="dark" heading="Web Applications" render={(<ProjectScroller projects={activeProjects.slice(0,2)} />)} />
            </animated.div>
            <animated.div style={ animPropsAboutMe }>
                        <TextSection heading="Video Games" render={(<ProjectScroller fromIndex={3} projects={activeProjects.slice(2)} />)} />
            </animated.div>
            <Footer />
        </>
    )
}
