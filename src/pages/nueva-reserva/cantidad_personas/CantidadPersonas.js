import React, { useState } from 'react';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { SelectPersonas } from '../../../components/nueva-reserva/SelectPersonas';

export const CantidadPersonas = () => {
	const [personas, setPersonas] = useState('1');

	const reservaData = {
		personas,
	};

	return (
		<div>
			<ContainerReserva title='Cuantos van a ser?'>
				<SelectPersonas personas={personas} setPersonas={setPersonas} />
			</ContainerReserva>
			<ButtonsReserva
				leftButtonText='Cancelar'
				rightButtonText='Elegir dia'
				reservaData={reservaData}
			/>
		</div>
	);
};
