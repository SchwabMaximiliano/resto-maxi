import React from 'react';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { ShowPreconfirmation } from '../../../components/nueva-reserva/ShowPreconfirmation';

export const PreConfirmacion = () => {
	const reserva = {
		dia: 'dasdas',
		hora: 'asdsda',
		cantidad_personas: 2,
	};

	return (
		<div>
			<ContainerReserva title='Vas a Reservar'>
				<ShowPreconfirmation reserva={reserva} />
			</ContainerReserva>
			<ButtonsReserva leftButtonText='Cancelar' rightButtonText='Reservar' />
		</div>
	);
};
