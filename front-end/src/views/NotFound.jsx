import React, { Component } from "react";

export class NotFound extends Component {
	componentWillMount() {
		document.title = "Star-Wye | 404 Not Found";
	}
	render() {
		return <div>404 Not Found</div>;
	}
}

export default NotFound;
