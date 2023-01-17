import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { bffresto } from '../../config';
import Swal from 'sweetalert2';

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

	const navigate = useNavigate();
	const saveReserva = async data => {
		const userId = JSON.parse(localStorage.getItem('userData'))._id;
		await axios
			.post(`${bffresto}/api/reservas/nueva-reserva`, {
				...data,
				userId,
			})
			.then(response => {
				console.log(response.status);
				if (response.status === 201) {
					console.log(response);
				} else {
					Swal.fire('Error!', 'No se pudo realizar la reserva', 'error');
					navigate('/dashboard');
				}
			})
			.catch(function (error) {
				console.log(error);
				navigate('/dashboard');
			});
	};

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
					rightButtonText !== 'Reservar'
						? localStorage.setItem('reservaData', JSON.stringify(MergedData))
						: saveReserva(localData);
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
