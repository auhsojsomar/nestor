import React, { Component } from "react";

export class NotFound extends Component {
	componentDidMount() {
		document.title = "Star-Wye | 404 Not Found";
	}
	render() {
		return <div>404 Not Found</div>;
	}
}

export default NotFound;
