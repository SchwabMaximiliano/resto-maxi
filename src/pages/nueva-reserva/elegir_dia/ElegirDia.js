import React, { useState } from 'react';
import { ContainerReserva } from '../../../components/nueva-reserva/ContainerReserva';
import { ButtonsReserva } from '../../../components/nueva-reserva/ButtonsReserva';
import { SelectDay } from '../../../components/nueva-reserva/SelectDay';

export const ElegirDia = () => {
	const addDays = (date, days) => {
		date.setDate(date.getDate() + days);
		return date;
	};

	const diaActual = new Date(new Date().setHours(0, 0, 0, 0));
	const diaDefault = addDays(diaActual, 1);
	const [dateSelected, setDateSelected] = useState(diaDefault);

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
