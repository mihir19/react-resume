import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
	faEnvelope,
	faIdBadge,
	faBriefcase,
	faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/core";

import { deepOrange } from "@material-ui/core/colors";
import Profile from "../src/Profile";
import Portfolio from "../src/Portfolio";
import { initializeReactGA } from "./analytics";

initializeReactGA();

library.add(fab, faEnvelope, faUserGraduate, faIdBadge, faBriefcase);
const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	orangeAvatar: {
		margin: 10,
		color: "#fff",
		backgroundColor: deepOrange[500]
	},
	mainGrid: {
		padding: theme.spacing.unit
	},
	profileCard: {
		height: "100%"
	},
	card: {
		display: "flex",
		marginBottom: theme.spacing.unit * 2
	},
	detailCard: {
		height: "100%",
		marginBottom: theme.spacing.unit * 2
	},
	stepIcon: { fontSize: "30px" },
	details: {
		display: "flex",
		flexDirection: "column"
	},
	content: {
		flex: "1 0 auto"
	},
	cover: {
		width: 100,
		height: 50
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing.unit,
		paddingBottom: theme.spacing.unit
	},
	playIcon: {
		height: 38,
		width: 38
	}
});

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={props => <Profile {...props} />} />
					<Route path="/portfolio" render={props => <Portfolio {...props} />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default withStyles(styles)(App);
