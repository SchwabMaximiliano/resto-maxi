import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components.css';
import PropTypes from 'prop-types';
import es from 'date-fns/locale/es';
import axios from 'axios';
import { bffresto } from '../../config';
registerLocale('es', es);

export const SelectDay = ({ dateSelected, setDateSelected }) => {
	/* 	armar una bd de mesas { cant_pers_nro: 1, cant_pers: UNO:, cant_mesas: 2 } y asi sucesivamente
		armar una bd de horarios no disponibles { dia: fecha(), hora: '20:00', mesa: 'uno' }
		luego de guardar una reserva debemos actualizar la bd de disponibilidad de forma asincrona
			-buscamos por dia, horario y cant_pers si trae igual o mas reservas que la bd de mesas atributo cant_mesas, 
			 guardamos en horarios no disponibles { dia: fecha(), hora: '20:00', mesa: 'uno'}
			-buscamos por dia y mesa en horarios no disponibles, si trae igual o mas reservas que cantidad de horarios
			 los actualizamos en dias no disponibles
		para marcar la disponibilidad de mesas traemos de la bd de mesas un array con todas las key (o sea las mesas que existen)
		seleccionamos la mesa
		para marcar los dias no disponibles buscamos en la bd de dias no disponibles por mesa seleccionada y los que tienen 3 o mas reservas
		(mandamos un array con los dias al front)
		seteamos los dias disponibles usando las funciones creadas
		seleccionamos el dia
		para marcar las horas no disponibles hacemos una peticion con el dia y la mesa selecionada y traemos un array con las horas 
		reservadas de la base de datos horarios no disponibles
		seteamos las horas no disponibles
		seleccionamos la hora
		
		Ejecuto a cierta hora un comando que pasa a historico los que estan en esa hora
		con la misma herramienta enviar un email 2 dias antes de la reserva (CRON)
		armar la bd de historicos
		cuando pasa a historico se quita de reservas y si estaba en no disponibles tambien, 
		hay que verificar en todas las bd si hay que quitarlo
		ver que onda lo de actualizar bd asincrono
		
*/

	const [diasNoDisponibles, setDiasNoDisponibles] = useState();
	const reserva = JSON.parse(localStorage.getItem('reservaData'));

	useEffect(() => {
		axios
			.get(`${bffresto}/api/dia-disponibilidades/todos/${reserva.personas}`)
			.then(response => setDiasNoDisponibles(response.data));
	}, []);

	const addDays = (date, days) => {
		date.setDate(date.getDate() + days);
		return date;
	};

	const filter = date => {
		return !diasNoDisponibles?.includes(date.getTime());
	};

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
