import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<Navbar fixed="top" collapseOnSelect expand="md" variant="dark">
			<Navbar.Brand className='brand' href="/">FQ</Navbar.Brand>
			<NavItem className="ml-auto px-4">
				<NavLink exact activeClassName="is-active" className="navbar-text" to="/">
					Home
				</NavLink>
			</NavItem>
			<NavItem className="px-2">
				<NavLink activeClassName="is-active" className="navbar-text" to="/Projects">
					Projects
				</NavLink>
			</NavItem>
			<NavItem className="px-4">
				<NavLink activeClassName="is-active" className="navbar-text" to="/Resume">
					Resume
				</NavLink>
			</NavItem>
		</Navbar>
	);
}

export default Header;
