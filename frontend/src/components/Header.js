import React from 'react';      
import { Navbar, Container, Nav, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';


const Header = () => { 
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Forum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Users</Nav.Link>
                </Nav>
                <ButtonGroup className="me-2">
                    <Button variant="light" size="sm" className="mr-5">
                        Login
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="light" size="sm">
                        Register
                    </Button>
                </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
