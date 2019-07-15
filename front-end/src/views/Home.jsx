import React, { Component, Fragment } from "react";
import Hero from "../components/Hero";
export class Home extends Component {
	componentWillMount() {
		document.title = "Star-Wye";
	}
	render() {
		return (
			<Fragment>
				<Hero />
			</Fragment>
		);
	}
}

export default Home;
