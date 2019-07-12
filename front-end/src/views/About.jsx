import React, { Component } from "react";

export class About extends Component {
	componentDidMount() {
		document.title = "Star-Wye | About";
	}
	render() {
		return <div>About</div>;
	}
}

export default About;
