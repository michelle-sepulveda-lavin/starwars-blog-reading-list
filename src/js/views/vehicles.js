import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
	const { store, actions } = useContext(Context);

	const [pages, setPages] = useState([1, 2, 3, 4]);
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div className="container my-5">
			<div className="row">
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
										<Link className="btn btn-secondary mr-2 mb-2" to={`/cardVehicle/${url}`}>
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
						);
					})}
			</div>
			<div className="row">
				<div className="col-md-4 d-flex justify-content-end">
					<span className="text-white mt-3">Current page: {currentPage}</span>
				</div>
				<div className="col-md-8 ">
					{!!pages &&
						pages.map((page, index) => {
							return (
								<button
									className="btn btn-secondary m-1"
									key={index}
									onClick={() => {
										actions.getVehicles(page);
										setCurrentPage(page);
									}}>
									{page}
								</button>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Vehicles;
