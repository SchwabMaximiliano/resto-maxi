import React, { useState } from 'react';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { SelectDay } from '../../../components/nueva-reserva/SelectDay';

export const ElegirDia = () => {
	const [dateSelected, setDateSelected] = useState(null);
	let reservaData = null;
	if (dateSelected !== null) {
		const dateSelectedString = dateSelected.toLocaleDateString('es-es', {
			month: 'long',
			day: 'numeric',
		});

		reservaData = {
			dia: dateSelectedString,
			date: dateSelected,
		};
	}

	return (
		<div>
			<ContainerReserva title='Elegí el día'>
				<SelectDay
					dateSelected={dateSelected}
					setDateSelected={setDateSelected}
				/>
			</ContainerReserva>
			<ButtonsReserva
				leftButtonText='Cancelar'
				rightButtonText='Elegir hora'
				reservaData={reservaData}
			/>
		</div>
	);
};
