import React, { useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
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
        props.setcurrentRoute(location.pathname)
    }, [location])

    return (
        <Navbar fixed="top" style={{ backgroundColor: "#000000", backdropFilter: "blur(9px)" }} variant="dark" expand="lg">
            <div>

            <a className="footerLinks" href="https://www.linkedin.com/in/sriniwasj/" target="_black" rel="noreferrer"><AiOutlineLinkedin fontSize={30} /></a>
                                <a className="footerLinks" href="https://github.com/sriniwas14" target="_black" rel="noreferrer"><AiOutlineGithub fontSize={30} /></a>
                                <a className="footerLinks" href="https://twitter.com/Sriniwasj" target="_black" rel="noreferrer"><AiOutlineTwitter fontSize={30} /></a>
            </div>
            <Navbar.Toggle children={(<AiOutlineMenu />)} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {
                        routeItems.map(item => <Link key={routeItems.label} style={{ padding: "10px 20px" }} className={ "nav-link"+(props.currentRoute===item.route ? " active" : "") } to={item.route}>{item.label}</Link>)
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default withRouter(Header)