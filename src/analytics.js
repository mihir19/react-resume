import ReactGA from "react-ga";

export const initializeReactGA = () => {
	ReactGA.initialize("UA-73829364-2");
	ReactGA.pageview("/");
};
