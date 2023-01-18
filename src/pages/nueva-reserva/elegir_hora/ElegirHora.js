import React, { useState } from 'react';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { SelectHour } from '../../../components/nueva-reserva/SelectHour';

export const ElegirHora = () => {
	const [hourSelected, setHourSelected] = useState();

	const reservaData = {
		hora: hourSelected,
	};

	return (
		<div>
			<ContainerReserva title='Elegí el horario'>
				<SelectHour
					hourSelected={hourSelected}
					setHourSelected={setHourSelected}
				/>
			</ContainerReserva>
			<ButtonsReserva
				leftButtonText='Cancelar'
				rightButtonText='Continuar'
				reservaData={reservaData}
			/>
		</div>
	);
};
