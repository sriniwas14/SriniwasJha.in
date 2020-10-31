import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="custom-primary" variant="dark">
            <Nav className="ml-auto">
                <Nav.Link active href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Projects</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}
