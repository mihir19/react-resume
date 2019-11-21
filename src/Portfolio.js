import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { deepOrange } from "@material-ui/core/colors";
import compose from "recompose/compose";
import { Grid, Avatar, withStyles, Button } from "@material-ui/core";
import { styles, timeLine, URLs } from "../src/Constants";
import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: Array(5)
				.fill(0)
				.map(row => new Array(5).fill("0"))
		};
		this.getRandomInt = this.getRandomInt.bind(this);
	}

	getRandomInt = (min = 0, max = 4) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
	};

	componentDidMount() {
		const start = [4, 0];

		let end = [this.getRandomInt(), this.getRandomInt()];
		// console.log(this.state.grid[0][0]);
		let newGrid = [...this.state.grid];
		console.log(end);
		newGrid[start[0]][start[1]] = "S";
		newGrid[end[0]][end[1]] = "T";
		this.setState({ grid: newGrid });
	}

	breadthFirstSearch = () => {
		let visited = new Set([4, 0]);
		let queue = [[4, 0]];
		let stop = true;
		while (queue.length !== 0 && stop == true) {
			console.log(queue);
			let item = queue.shift();
			let x = item[0];
			let y = item[1];
			let newGrid = [...this.state.grid];
			console.log(item);
			newGrid[x][y] = "1";
			this.setState({
				grid: newGrid
			});
			console.log("abvbvbnv");
			if (this.state.grid[x][y] == "T") {
				stop = false;
				return;
			}
			let newNodes = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
			newNodes.forEach(node => {
				let x2 = node[0];
				let y2 = node[1];
				if (0 <= x2 && x2 < 4 && 0 <= y2 && y2 < 4 && !visited.has([x2, y2])) {
					console.log(x2, y2);
					queue.push([x2, y2]);
					visited.add([x2, y2]);
				}
			});
		}
	};

	render() {
		const { classes } = this.props;
		let { grid } = this.state;
		console.log(this.state.grid);
		return (
			<Grid container spacing={16} className={classes.mainGrid}>
				<Grid item sm={4} xs={12}>
					<Paper className={classes.portfolio}>
						<Table className={classes.table} size="small">
							<TableBody>
								{grid.map((row, rindex) => (
									<TableRow key={rindex}>
										{row.map((col, cindex) => (
											<TableCell
												key={cindex}
												align="right"
												className={col === "1" || col === "S" ? classes.deepOrange : ""}
											>
												{col}
											</TableCell>
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
						<Button onClick={() => this.breadthFirstSearch()}>Start</Button>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(Portfolio);
