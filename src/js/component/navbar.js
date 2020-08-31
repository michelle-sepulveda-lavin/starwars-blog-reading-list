import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" id="logo">
					STAR WARS
				</span>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="true"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon bg-warning" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto float-right">
					<li className="nav-item active m-3">
						<Link to="/characters">
							<span className="navbar-brand mb-0 h1 text-white ">Characters</span>
						</Link>
					</li>
					<li className="nav-item m-3">
						<Link to="/planets">
							<span className="navbar-brand mb-0 h1 text-white">Planets</span>
						</Link>
					</li>
					<li className="nav-item m-3">
						<Link to="/vehicles">
							<span className="navbar-brand mb-0 h1 text-white">Vehicles</span>
						</Link>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle text-warning "
							to="/#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</a>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
							{store.favorites.length > 0 &&
								store.favorites.map((item, index) => {
									return (
										<div className="dropdown-item" key={index}>
											<Link
												to={
													item.idUrl.includes("people")
														? "/cardCharacter/" +
														  item.idUrl.replace("https://swapi.dev/api/people/", "")
														: item.idUrl.includes("vehicles")
															? "/cardVehicle/" +
															  item.idUrl.replace("https://swapi.dev/api/vehicles/", "")
															: "/cardPlanets/" +
															  item.idUrl.replace("https://swapi.dev/api/planets/", "")
												}
												test={item.idUrl}>
												{item.name}
											</Link>
											<i
												className="fas fa-trash ml-4"
												onClick={() => {
													actions.deleteFavorite(item.name);
												}}
											/>
										</div>
									);
								})}
							<div className="dropdown-divider" />
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
