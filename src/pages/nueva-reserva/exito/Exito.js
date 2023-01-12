import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import '../../email/emailConfirmed.css';
import '../../email/emailError.css';
import '../../../components/components.css';
// import axios from 'axios';
// import { bffresto } from '../../../config';

export const Exito = () => {
	// const reservaData = JSON.parse(localStorage.getItem('reservaData'));
	const reservaOK = true;
	/*
	axios
		.post(`${bffresto}/api/user/reserva`, reservaData)
		.then(response => {
			console.log(response.status);
			if (response.status === 201) {
				console.log(response);
			} else {
				reservaOK = false;
			}
		})
		.catch(function (error) {
			console.log(error);
			reservaOK = false;
		});
*/
	return (
		<div className='select-container'>
			{reservaOK ? (
				<ContainerReserva title='Tu reserva fué efectuada exitosamente'>
					<div className='success'>
						<i className='checkmark'>✓</i>
					</div>
				</ContainerReserva>
			) : (
				<ContainerReserva title='No se pudo realizar la reserva'>
					<div className='successE'>
						<i className='checkmarkE'>🗙</i>
					</div>
				</ContainerReserva>
			)}
			<div className='page-footer'>
				<Button
					className='dashboard-button btn btn-success'
					as={Link}
					to='/dashboard'
				>
					Listo
				</Button>
			</div>
		</div>
	);
};
