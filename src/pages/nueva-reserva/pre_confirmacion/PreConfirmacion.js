import React from 'react';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { ShowPreconfirmation } from '../../../components/nueva-reserva/ShowPreconfirmation';

export const PreConfirmacion = () => {
	const reservaData = JSON.parse(localStorage.getItem('reservaData'));

	return (
		<div>
			<ContainerReserva title='Vas a Reservar'>
				<ShowPreconfirmation reservaData={reservaData} />
			</ContainerReserva>
			<ButtonsReserva leftButtonText='Cancelar' rightButtonText='Reservar' />
		</div>
	);
};
