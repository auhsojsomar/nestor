import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Services from "./views/Services";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

import Navbar from "./components/Navbar";

export class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/services" component={Services} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
