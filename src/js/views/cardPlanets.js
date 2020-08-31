import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const CardPlanets = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getOnePlanet(props.match.params.id);
	}, []);

	return (
		<div className="container">
			<div className="card mb-3 tarjeta">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							src={`https://starwars-visualguide.com/assets/img/planets/${props.match.params.id}.jpg`}
							className="card-img img-fluid"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.onePlanet && store.onePlanet.name}</h5>
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
							Rotation Period <br />
							<small>{store.onePlanet.rotation_period}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Orbital Period <br />
							<small>{store.onePlanet.orbital_period}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Diameter <br />
							<small>{store.onePlanet.diameter}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Climate <br />
							<small>{store.onePlanet.climate}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Gravity <br />
							<small>{store.onePlanet.gravity}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Terrain <br />
							<small>{store.onePlanet.terrain}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Surface Water <br />
							<small>{store.onePlanet.surface_water}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Population <br />
							<small>{store.onePlanet.population}</small>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

CardPlanets.propTypes = {
	match: PropTypes.object,
	params: PropTypes.object,
	id: PropTypes.string
};

export default withRouter(CardPlanets);
