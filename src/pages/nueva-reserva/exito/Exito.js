import React from 'react';
import { Button } from 'react-bootstrap';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import '../../email/emailConfirmed.css';
import '../../email/emailError.css';
import '../../../components/components.css';
import { Link } from 'react-router-dom';

export const Exito = () => {
	return (
		<div className='select-container'>
			<ContainerReserva title='Tu reserva fué efectuada exitosamente'>
				<div className='success'>
					<i className='checkmark'>✓</i>
				</div>
			</ContainerReserva>
			<div className='page-footer'>
				<Button
					className='dashboard-button btn btn-success'
					as={Link}
					to={'/dashboard'}
					onClick={() => {
						localStorage.removeItem('reservaData');
					}}
				>
					Listo
				</Button>
			</div>
		</div>
	);
};
