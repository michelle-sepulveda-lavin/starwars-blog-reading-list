import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const CardVehicle = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getOneVehicle(props.match.params.id);
	}, []);

	return !!store.oneVehicle ? (
		<div className="container mt-5">
			<div className="card mb-3 tarjeta">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							src={`https://starwars-visualguide.com/assets/img/vehicles/${props.match.params.id}.jpg`}
							className="card-img img-fluid"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.oneVehicle.name}</h5>
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
							Model <br />
							<small>{store.oneVehicle.model}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Manufactuter <br />
							<small>{store.oneVehicle.manufacturer}</small>
						</span>
					</div>
					<div className="col-md-1">
						1
						<span>
							Length <br />
							<small>{store.oneVehicle.length}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Vehicle Class <br />
							<small>{store.oneVehicle.vehicle_class}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Passengers <br />
							<small>{store.oneVehicle.passengers}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Crew <br />
							<small>{store.oneVehicle.crew}</small>
						</span>
					</div>
					<div className="col-md-1">
						<span>
							Max Atm Speed <br />
							<small>{store.oneVehicle.max_atmosphering_speed}</small>
						</span>
					</div>
				</div>
			</div>
		</div>
	) : (
		<h1 className="text-white">Loading</h1>
	);
};

CardVehicle.propTypes = {
	match: PropTypes.object,
	params: PropTypes.object,
	id: PropTypes.string
};

export default CardVehicle;
