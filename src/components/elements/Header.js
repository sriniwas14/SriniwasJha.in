import React, { useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
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
        <Navbar style={{ backgroundColor: "#0000009c" }} variant="dark">
            <Nav className="ml-auto">
                {
                    routeItems.map(item => <Nav.Link active={props.currentRoute==item.route} href={item.route}>{item.label}</Nav.Link>)
                }
            </Nav>
        </Navbar>
    )
}
export default withRouter(Header)