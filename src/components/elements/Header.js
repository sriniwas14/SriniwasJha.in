import React, { useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { useLocation, withRouter } from 'react-router-dom'

function Header(props) {
    var routeItems = [
        //Route:Label
        { route: "/", label: "Home" },
        { route: "/portfolio", label: "Portfolio" },
        { route: "/contact", label: "Contact" }
    ]

    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
        props.setcurrentRoute(location.pathname)
    }, [location])

    return (
        <Navbar style={{ backgroundColor: "#0000009c" }} variant="dark" expand="lg">
            <div>

            <a className="footerLinks" href="https://www.linkedin.com/in/sriniwasj/" target="_black" rel="noreferrer"><AiOutlineLinkedin fontSize={30} /></a>
                                <a className="footerLinks" href="https://github.com/sriniwas14" target="_black" rel="noreferrer"><AiOutlineGithub fontSize={30} /></a>
                                <a className="footerLinks" href="https://twitter.com/Sriniwasj" target="_black" rel="noreferrer"><AiOutlineTwitter fontSize={30} /></a>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {
                        routeItems.map(item => <Nav.Link active={props.currentRoute==item.route} href={item.route}>{item.label}</Nav.Link>)
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default withRouter(Header)