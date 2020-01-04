import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
			<Navbar.Brand href="/">FQ</Navbar.Brand>
			<NavItem className="ml-auto px-4">
				<Link className="nav-text" to="/">
					Home
				</Link>
			</NavItem>
			<NavItem>
				<Link className="nav-text" to="/Projects">
					Projects
				</Link>
			</NavItem>
		</Navbar>
	);
}

export default Header;
