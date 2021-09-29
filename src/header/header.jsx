import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">My Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Project" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Proiect 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">+ Add Project</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Profile" id="profile-nav-dropdown">
                    <NavDropdown.Item>Settings</NavDropdown.Item>
                    <NavDropdown.Item>Log out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;