import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
	render() {
		return (
			<Fragment>
				<div className="top d-flex justify-content-between">
					<h1>Logo</h1>
					<ul className="list-unstyled my-3">
						<li>
							<i className="fas fa-map-marker-alt" />
							Office / Shop Mercury St. Estrella Subd. <br />
							Deparo Caloocan City
						</li>
						<li>
							<i className="fas fa-mobile-alt" />
							(Smart) 0919-820-2793
							<br />
							(Globe) 0916-930-1375
						</li>
						<li>
							<i className="fas fa-envelope" />
							nestoralbarico@gmail.com
						</li>
					</ul>
				</div>
				<Navbar expand="sm" sticky="top">
					<Navbar.Toggle aria-controls="nav" className="ml-auto" />
					<Navbar.Collapse
						id="nav"
						className="justify-content-center"
					>
						<Nav className="justify-content-center">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/services">Services</NavLink>
							<NavLink to="/about">About</NavLink>
							<NavLink to="/contact">Contact</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Fragment>
		);
	}
}

export default Navigation;
