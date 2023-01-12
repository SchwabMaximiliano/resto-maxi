import React from 'react';
import PropTypes from 'prop-types';

export const ShowPreconfirmation = ({ reserva }) => {
	const reservaData = JSON.parse(localStorage.getItem('reservaData'));

	return (
		<div className='select-container bg-white'>
			<p>
				<b>Dia: </b> {reservaData.dia}
			</p>
			<p>
				<b>Hora: </b> {reservaData.hora}
			</p>
			<p>
				<b>Cantidad de personas: </b> {reservaData.personas}
			</p>
		</div>
	);
};

ShowPreconfirmation.propTypes = {
	reserva: PropTypes.any,
};
