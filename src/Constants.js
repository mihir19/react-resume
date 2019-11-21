import { deepOrange } from "@material-ui/core/colors";

import {
	faBriefcase,
	faFlask,
	faUserGraduate
} from "@fortawesome/free-solid-svg-icons";

export const linkedIn = "linkedIn";
export const gitHub = "gitHub";
export const facebook = "facebook";

export const URLs = {
	linkedIn: "https://www.linkedin.com/in/mihirkavatkar/",
	gitHub: "https://github.com/mkavatkar",
	facebook: "https://www.facebook.com/mihir.kavatkar"
};

export const styles = theme => ({
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
	},
	portfolio: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	},
	table: {
		minWidth: 100
	},
	deepOrange: {
		color: "#777",
		backgroundColor: deepOrange[500]
	}
});

export const timeLine = [
	{
		icon: faBriefcase,
		time: "2016 - now",
		label: "Full Stack Developer at Keck School of Medicine, USC",
		description: "Full Stack App Development in HeathTech"
	},
	{
		icon: faFlask,
		time: "Summer 2016",
		label: "Software Developer Intern at Electra Vehicles",
		description: "Full Stack App Development, Ionic Framework"
	},
	{
		icon: faFlask,
		time: "Summer 2015",
		label: "Research Assistant Intern at Patterns and Predictions",
		description: "Deep Reinforcement Learning, Atari 2600"
	},
	{
		icon: faUserGraduate,
		time: "2014 - 2016",
		label: "University of Massachusetts Dartmouth, M.S.",
		description:
			"Projects in GPU Computing with Performance and Benchmark Analysis"
	},
	{
		icon: faUserGraduate,
		time: "2011 - 2014",
		label: "Vidyalankar Institute of Technology, B.E.",
		description: "Online Assignment Submission Tool with Smart Plagarism"
	}
	// { icon: "", label: "1992, Born" }
];
