import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'


function Header() {

    return(
        <Navbar fixed='top' collapseOnSelect expand='lg' variant='dark' bg='dark'>
        <Navbar.Brand href='/'>FQ</Navbar.Brand>
            <Nav className='ml-auto'>
                <NavItem>
                    <Nav.Link href='/'>Home</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href='/Projects'>Projects</Nav.Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header