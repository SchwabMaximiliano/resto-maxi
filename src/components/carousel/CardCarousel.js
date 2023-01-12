import React from 'react';
import '../components.css';
import PropTypes from 'prop-types';

export const CardCarousel = props => {
	return (
		<div className='card-carousel-container'>
			<h2 className='section-title'>{props.title}</h2>

			<div className='media-scroller snaps-inline'>
				{props.reservas.map((reserva, index) => {
					return (
						<div className='media-element' key={index}>
							<p className='media-data'>
								<b>Canntidad:</b> {reserva.personas} personas
							</p>
							<p className='media-data'>
								<b>Fecha:</b> {reserva.fecha}
							</p>
							<p className='media-data'>
								<b>Hora:</b> {reserva.hora}
							</p>
						</div>
					);
				})}

				<div className='media-element'>
					<p className='title'>A longer title here</p>
				</div>
				<div className='media-element'>
					<p className='title'>An even longer title on this one</p>
				</div>
				<div className='media-element'>
					<p className='title'>Ut enim ad minim veniam</p>
				</div>
				<div className='media-element'>
					<p className='title'>Duis aute irure dolor</p>
				</div>
			</div>
		</div>
	);
};

CardCarousel.propTypes = {
	title: PropTypes.string,
	reservas: PropTypes.any,
};
