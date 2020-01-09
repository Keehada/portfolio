import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
			<Navbar.Brand href="/">FQ</Navbar.Brand>
			<NavItem className="ml-auto px-4">
				<NavLink exact activeClassName="is-active" className="navbar-text" to="/">
					Home
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink activeClassName="is-active" className="navbar-text" to="/Projects">
					Projects
				</NavLink>
			</NavItem>
		</Navbar>
	);
}

export default Header;
