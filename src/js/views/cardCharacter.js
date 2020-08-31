import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const CardCharacter = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getOnePerson(props.match.params.id);
	}, []);

	return !!store.onePerson ? (
		<div className="container mt-5">
			<div className="card mb-3 tarjeta">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							src={`https://starwars-visualguide.com/assets/img/characters/${props.match.params.id}.jpg`}
							className="card-img img-fluid"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.onePerson.name}</h5>
							<p className="card-text">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 bg-white text-center mb-5 d-flex justify-content-between flex-wrap p-5">
					<div className="col-md-1">
						<span>
							Height <br />
							<small>{store.onePerson.height}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Mass <br />
							<small>{store.onePerson.mass}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Hair Color <br />
							<small>{store.onePerson.hair_color}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Skin Color <br />
							<small>{store.onePerson.skin_color}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Eye Color <br />
							<small>{store.onePerson.eye_color}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Birth Year <br />
							<small>{store.onePerson.birth_year}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Gender <br />
							<small>{store.onePerson.gender}</small>
						</span>
					</div>
				</div>
			</div>
		</div>
	) : (
		<h1 className="text-white">Loading</h1>
	);
};

CardCharacter.propTypes = {
	match: PropTypes.object,
	params: PropTypes.object,
	id: PropTypes.string
};

export default CardCharacter;
