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
	/*
	const subDays = (date, days) => {
		date.setDate(date.getDate() - days);
		return date;
	};
*/
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
