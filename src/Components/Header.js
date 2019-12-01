import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import NavItem from 'react-bootstrap/NavItem'

function Header() {
    return(
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand href='#Home'>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Nav>
                <NavItem>
                    <Nav.Link href='#Home' eventKey='1'>Home</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href='#Resume' eventKey='2'>Resume</Nav.Link>
                </NavItem>
                <NavDropdown title='Projects'>
                    <NavDropdown.Item href='#Project1' eventKey='3.1'>Project #1</NavDropdown.Item>
                    <NavDropdown.Item href='#Project2' eventKey='3.2'>Project #2</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Header