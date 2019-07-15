import React, { Component } from "react";

export class Home extends Component {
	componentDidMount() {
		document.title = "Star-Wye";
	}
	render() {
		return (
			<div>
				<i class="fas fa-alarm-clock"></i>
				Home
			</div>
		);
	}
}

export default Home;
