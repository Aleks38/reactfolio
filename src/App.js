import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/reactfolio/" element={<Homepage />} />
				<Route path="/reactfolio/about/" element={<About />} />
				<Route path="/reactfolio/projects/" element={<Projects />} />
				<Route path="/reactfolio/contact/" element={<Contact />} />
				<Route path="/reactfolio/*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;