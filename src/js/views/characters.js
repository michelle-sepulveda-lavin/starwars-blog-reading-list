import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Characters = props => {
	const { store, actions } = useContext(Context);
	const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<>
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
							return (
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
							);
						})
					) : (
						<p>Loading</p>
					)}
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
											actions.getCharacters(page);
											setCurrentPage(page);
										}}>
										{page}
									</button>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Characters;
