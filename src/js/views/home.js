import React, { useContext } from "react";
import "../../styles/home.scss";
import Carousel from "../component/carousel";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Home = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Carousel />
			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<h2>Characters</h2>
					</div>
				</div>
				<div className="row">
					{!!store.characters.results ? (
						store.characters.results.map((character, index) => {
							const url = character.url.replace("http://swapi.dev/api/people/", "");
							const urlaux = url.replace("/", "");
							const urlFav = character.url.replace("http", "https");
							return index < 4 ? (
								<div className="col-md-6 col-lg-3 mb-4 card-deck" key={index}>
									<div className="card">
										<img
											src={`https://starwars-visualguide.com/assets/img/characters/${urlaux}.jpg`}
											className="card-img-top img-fluid"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">{character.name}</h5>
											<p className="card-text">
												Hair Color: {character.hair_color} <br />
												Eye Color: {character.eye_color}
											</p>
										</div>
										<div className="card-footer">
											<Link to={`/cardcharacter/${url}`} className="btn btn-secondary mr-2 mb-2">
												Learn more!
											</Link>
											<button
												onClick={() => {
													actions.getFavorites(character.name, urlFav);
												}}
												className="btn btn-warning mb-2">
												<i className="far fa-heart" />
											</button>
										</div>
									</div>
								</div>
							) : (
								""
							);
						})
					) : (
						<p>Loading</p>
					)}
				</div>
				<Link className="btn btn-dark" to="/characters">
					See more characters!
				</Link>

				{/*---------- Planets --------- */}

				<div className="row mt-5">
					<div className="col-12">
						<h2>Planets</h2>
					</div>
				</div>
				<div className="row">
					{!!store.planets.results &&
						store.planets.results.map((planet, index) => {
							const url = planet.url.replace("http://swapi.dev/api/planets/", "");
							const urlaux = url.replace("/", "");
							const urlFav = planet.url.replace("http", "https");
							return (
								index < 4 && (
									<div className="col-md-6 col-lg-3 mb-4 card-deck" key={index}>
										<div className="card">
											<img
												src={`https://starwars-visualguide.com/assets/img/planets/${urlaux}.jpg`}
												className="card-img-top img-fluid"
												alt="..."
											/>
											<div className="card-body">
												<h5 className="card-title">{planet.name}</h5>
												<p className="card-text">
													Population: {planet.population} <br />
													Terrain: {planet.terrain}
												</p>
											</div>
											<div className="card-footer">
												<Link
													className="btn btn-secondary mr-2 mb-2"
													to={`/cardPlanets/${url}`}>
													Learn more
												</Link>
												<button
													onClick={() => {
														actions.getFavorites(planet.name, urlFav);
													}}
													className="btn btn-warning mb-2">
													<i className="far fa-heart" />
												</button>
											</div>
										</div>
									</div>
								)
							);
						})}
				</div>
				<Link className="btn btn-dark" to="/planets">
					See more planets!
				</Link>

				{/* --------------- Vehicles ----------- */}
				<div className="row mt-5">
					<div className="col-12">
						<h2>Vehicles</h2>
					</div>
				</div>
				<div className="row">
					{!!store.vehicles.results &&
						store.vehicles.results.map((vehicle, index) => {
							const url = vehicle.url.replace("http://swapi.dev/api/vehicles/", "");
							const urlaux = url.replace("/", "");
							const urlFav = vehicle.url.replace("http", "https");
							return (
								index < 4 && (
									<div className="col-md-6 col-lg-3 mb-4 card-deck" key={index}>
										<div className="card">
											<img
												src={`https://starwars-visualguide.com/assets/img/vehicles/${urlaux}.jpg`}
												className="card-img-top img-fluid"
												alt="..."
											/>
											<div className="card-body">
												<h5 className="card-title">{vehicle.name}</h5>
												<p className="card-text">
													Model: {vehicle.model} <br />
													Vehicle class: {vehicle.vehicle_class}
												</p>
											</div>
											<div className="card-footer">
												<Link
													className="btn btn-secondary mr-2 mb-2"
													to={`/cardVehicle/${url}`}>
													Learn more
												</Link>
												<button
													onClick={() => {
														actions.getFavorites(vehicle.name, urlFav);
													}}
													className="btn btn-warning mb-2">
													<i className="far fa-heart" />
												</button>
											</div>
										</div>
									</div>
								)
							);
						})}
				</div>
				<Link className="btn btn-dark" to="/vehicles">
					See more vehicles!
				</Link>
			</div>
		</>
	);
};

export default Home;
