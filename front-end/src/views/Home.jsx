import React, { Component } from "react";

export class Home extends Component {
	componentDidMount() {
		document.title = "Star-Wye";
	}
	render() {
		return <div>Home</div>;
	}
}

export default Home;
