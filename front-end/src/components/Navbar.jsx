import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
	render() {
		return (
			<Navbar expand="sm" sticky="top">
				<Navbar.Toggle aria-controls="nav" className="ml-auto" />
				<Navbar.Collapse id="nav" className="justify-content-center">
					<Nav className="justify-content-center">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/services">Services</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;
