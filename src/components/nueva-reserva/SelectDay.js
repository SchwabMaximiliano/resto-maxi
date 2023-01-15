import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components.css';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
registerLocale('es', es);

export const SelectDay = ({ dateSelected, setDateSelected }) => {
	/* 	armar una bd de mesas que diga 20: 2 y asi sucesivamente (cantidad personas: cantidad mesas)
		armar una bd de disponibilidad que tenga dates (fechas)
		luego de guardar una reserva debemos actualizar la bd de disponibilidad de forma asincrona
			solo va a haber maximo 3 reservas en cada dia (una en cada horario)
			buscamos por dia y los que tienen 3 o mas reservas los actualizamos en no disponibles
		para marcar la disponibilidad de mesas traemos de la bd de mesas un array con todas las key (o sea las mesas que existen)
		seleccionamos la mesa
		para marcar los dias no disponibles traemos de la bd los dias no disponibles
		seteamos los dias disponibles usando las funciones creadas
		seleccionamos el dia
		para marcar las horas no disponibles hacemos una peticion con el dia seleccionado y traemos un array con las horas reservadas
		seteamos las horas no disponibles
		seleccionamos la hora
		lo deguardar la reserva ya esta hecho, faltaria crear las bd faltantes y actualizarlas tras cada reserva
*/

	// van a venir con la hora seteada asi que los debemos recorrer y setear la hora en 0 para comparar
	// se puede hacer dentro de filter todas las llamadas a las funciones para que sea ams entendible
	const addDays = (date, days) => {
		date.setDate(date.getDate() + days);
		return date;
	};
	const setCeroHours = date => {
		date.setHours(0, 0, 0, 0);
		return date;
	};
	const filter = date => {
		return !diasNoDsponibles.includes(date.getTime());
		// sacar la negacion si usamos dias disponibles
	};
	const diasNoDsponibles = [
		setCeroHours(addDays(new Date(), 4)).getTime(),
		setCeroHours(addDays(new Date(), 5)).getTime(),
		setCeroHours(addDays(new Date(), 6)).getTime(),
		setCeroHours(addDays(new Date(), 7)).getTime(),
	];

	const diasDisponibles = [
		{
			dia: new Date(),
			reservas: [true, true, true],
		},
	];

	return (
		<div className='select-container'>
			<DatePicker
				locale={es}
				selected={dateSelected}
				onChange={date => setDateSelected(date)}
				placeholderText='Selecciona una fecha disponible'
				strictParsing
				includeDateIntervals={[
					{ start: new Date(), end: addDays(new Date(), 60) },
				]}
				filterDate={filter}
			/>
		</div>
	);
};

SelectDay.propTypes = {
	dateSelected: PropTypes.any,
	setDateSelected: PropTypes.any,
};
