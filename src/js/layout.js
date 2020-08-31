import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Characters from "./views/characters";
import Planets from "./views/planets";
import Vehicles from "./views/vehicles";
import Favorites from "./views/favorites";
import CardCharacter from "./views/cardCharacter";
import CardPlanets from "./views/cardPlanets";
import CardVehicle from "./views/cardVehicle";

//create your first component
const Layout = props => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100 ">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/cardCharacter/:id" component={CardCharacter} />
					<Route exact path="/cardPlanets/:id" component={CardPlanets} />
					<Route exact path="/cardVehicle/:id" component={CardVehicle} />
					<Route exact path="/characters">
						<Characters />
					</Route>
					<Route exact path="/planets">
						<Planets />
					</Route>
					<Route exact path="/vehicles">
						<Vehicles />
					</Route>
					<Route exact path="/favorites">
						<Favorites />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
