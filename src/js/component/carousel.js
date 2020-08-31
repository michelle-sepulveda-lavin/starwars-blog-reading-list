import React, { useState } from "react";

const Carousel = () => {
	return (
		<>
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://www.xtrafondos.com/wallpapers/stormtrooper-star-wars-3647.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.xtrafondos.com/wallpapers/star-wars-logo-3654.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.wallpapertip.com/wmimgs/9-97765_star-wars-wallpaper-9-16-data-src-darth.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</>
	);
};

export default Carousel;
