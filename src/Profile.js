import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid, Avatar, withStyles } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { styles, timeLine, URLs } from "../src/Constants";
import withWidth from "@material-ui/core/withWidth";
import compose from "recompose/compose";
class Profile extends Component {
	redirectHandler = param => {
		this.props.history.replace(URLs[param]);
	};

	handleStep = () => {
		// this.setState(state => ({
		// 	activeStep: state.activeStep + 1
		// }));
	};

	constructor(props) {
		super(props);
		this.state = {
			activeStep: 0
		};
		this.redirectHandler = this.redirectHandler.bind(this);
		this.handleStep = this.handleStep.bind(this);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Avatar className={classes.orangeAvatar}>MK</Avatar>
						<Typography variant="subtitle1" color="inherit" className={classes.grow}>
							It's the Journey, Not the destination
						</Typography>
						{/* <div>
            <Button color="inherit">Login</Button>
            <Icon className={classNames(classes.icon, "fa fa-plus-circle")} />
          </div> */}
					</Toolbar>
				</AppBar>

				<Grid container spacing={16} className={classes.mainGrid}>
					<Grid item sm={3} xs={12}>
						<Card className={classes.profileCard}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Profile Picture"
									// height="140"
									image={process.env.PUBLIC_URL + "/images/Headshot-02.jpg"}
									title="Profile Picture"
								/>
								<CardContent>
									<Typography variant="h5" component="h2">
										Mihir Kavatkar
									</Typography>
									<Typography component="p" gutterBottom>
										Full Stack Software Developer <br />
										Alzheimer's Therapeutic Research Institute <br />
										Keck School of Medicine, USC.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="small"
									color="primary"
									target="_blank"
									href={URLs.linkedIn}
								>
									LinkedIn
								</Button>
								<Button
									size="small"
									color="primary"
									target="_blank"
									href={URLs.facebook}
								>
									Facebook
								</Button>
								<Button size="small" color="primary" target="_blank" href={URLs.gitHub}>
									Github
								</Button>
							</CardActions>
							<CardContent>
								<h5>Excited About</h5>
								<Typography component="p" variant="subheading" gutterBottom>
									<a href="https://www.aptwebstudy.org/welcome">
										Alzheimer's Prevention trials Webstudy
									</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={9} xs={12}>
						<Grid item sm={12} xs={12}>
							<Card className={classes.detailCard}>
								<CardHeader title="Timeline" />
								<CardContent className={classes.content}>
									<Stepper orientation="vertical">
										{timeLine.map((step, index) => {
											return (
												<Step key={index} active={true}>
													<StepLabel
														icon={<FontAwesomeIcon size="lg" icon={step.icon} />}
														StepIconProps={{
															classes: { root: classes.stepIcon },
															onClick: () => this.handleStep()
														}}
													>
														<div style={{ display: "flex", alignItems: "center" }}>
															<Typography variant="subtitle1" color="secondary">
																{step.time}:
															</Typography>
															<Typography variant="subtitle1" color="primary">
																&nbsp;
																{step.label}
															</Typography>
															{/* only={["xs", "sm", "md"]} */}
															<Hidden mdDown>
																<Typography variant="body1" color="textSecondary">
																	&nbsp;
																	{step.description}
																</Typography>
															</Hidden>
														</div>
													</StepLabel>
													<StepContent>
														{/* <Typography>{step.content}</Typography> */}
														{/* only={["lg", "xl"]} */}
														<Hidden lgUp>
															<Typography variant="body1" color="textSecondary">
																{step.description}
															</Typography>
														</Hidden>
													</StepContent>
												</Step>
											);
										})}
									</Stepper>
								</CardContent>
							</Card>
						</Grid>
						{/* <Grid item sm={3}>
          <Card className={classes.detailCard}>
            <CardContent className={classes.content}>
              <CardHeader title="News" />
            </CardContent>
          </Card>
        </Grid> */}
						<Grid item sm={12} xs={12}>
							<Card>
								<CardHeader title="Publications" />
								<CardContent className={classes.content}>
									<Typography variant="subheading" color="primary">
										<a href="https://aanddjournal.net/article/S1552-5260(18)30524-7/abstract">
											[AAIC 2018] Classification of Emotional Responses in Video and Audio
											Recordings using a Convolutional Neural Network
										</a>
									</Typography>
									<Typography component="p" color="secondary" noWrap>
										Pradeep Anand Ravindranath, Mihir Kavatkar, Michael S. Rafii, Paul S.
										Aisen, Gustavo Jimenez-Maggiora
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
					{/* <Grid item sm={12}>
						<Card>
							<CardMedia
								className={classes.cover}
								image={process.env.PUBLIC_URL + "/images/wind-farm.jpg"}
								title="Live from space album cover"
							/>
						</Card>
						<Card>
							<CardMedia
								className={classes.cover}
								image={process.env.PUBLIC_URL + "/images/wind-farm.jpg"}
								title="Live from space album cover"
							/>
						</Card>
					</Grid> */}
				</Grid>
			</div>
		);
	}
}

export default compose(
	withStyles(styles),
	withWidth()
)(Profile);
