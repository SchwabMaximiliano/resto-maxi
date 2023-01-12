import React, { useState } from 'react';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { SelectDay } from '../../../components/nueva-reserva/SelectDay';

export const ElegirDia = () => {
	const [dateSelected, setDateSelected] = useState(new Date());

	const dateSelectedString = dateSelected.toLocaleDateString('es-es', {
		month: 'long',
		day: 'numeric',
	});

	const reservaData = {
		dia: dateSelectedString,
	};

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
