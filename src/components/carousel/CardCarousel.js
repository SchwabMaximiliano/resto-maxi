import React from 'react';
import '../components.css';
import PropTypes from 'prop-types';

export const CardCarousel = props => {
	return (
		<div className='card-carousel-container'>
			<h2 className='section-title'>{props.title}</h2>

			<div className='media-scroller snaps-inline'>
				{props.reservas?.map((reserva, index) => {
					return (
						<div className='media-element' key={index}>
							<p className='media-data mb-0'>
								<b>Canntidad de personas:</b>
							</p>
							<p>{reserva.personas}</p>
							<p className='media-data mb-0'>
								<b>Fecha:</b>
							</p>
							<p>{reserva.dia}</p>
							<p className='media-data mb-0'>
								<b>Hora:</b>
							</p>
							<p>{reserva.hora}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

CardCarousel.propTypes = {
	title: PropTypes.string,
	reservas: PropTypes.any,
};
