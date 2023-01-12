import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ButtonsReserva = ({
	leftButtonText,
	rightButtonText,
	reservaData,
}) => {
	const paths = {
		'Elegir dia': '/nueva-reserva/elegir-dia',
		'Elegir hora': '/nueva-reserva/elegir-hora',
		Continuar: '/nueva-reserva/pre-confirmacion',
		Reservar: '/exito',
		Cancelar: '/dashboard',
	};

	const localData = JSON.parse(localStorage.getItem('reservaData'));
	const MergedData = { ...localData, ...reservaData };

	return (
		<div className='page-footer'>
			<Button
				className='dashboard-button btn btn-danger'
				as={Link}
				to={paths[leftButtonText]}
				onClick={() => {
					localStorage.removeItem('reservaData');
				}}
			>
				{leftButtonText}
			</Button>
			<Button
				className='dashboard-button btn btn-success'
				as={Link}
				to={paths[rightButtonText]}
				onClick={() => {
					rightButtonText !== 'Reservar' &&
						localStorage.setItem('reservaData', JSON.stringify(MergedData));
				}}
			>
				{rightButtonText}
			</Button>
		</div>
	);
};

ButtonsReserva.propTypes = {
	leftButtonText: PropTypes.string,
	rightButtonText: PropTypes.string,
	reservaData: PropTypes.any,
};
