import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components.css';
import PropTypes from 'prop-types';

export const SelectDay = ({ dateSelected, setDateSelected }) => {
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
	};

	// setear dias llenos y otros que no se trabaje, si son cosas seeparadas se pueden unir los arrays
	// can a venir con la hora seteada asi que los debemos recorrer y setear la hora en 0 para comparar
	// se puede hacer dentro de filter todas las llamadas a las funciones para que sea ams entendible
	const diasNoDsponibles = [
		setCeroHours(addDays(new Date(), 4)).getTime(),
		setCeroHours(addDays(new Date(), 5)).getTime(),
		setCeroHours(addDays(new Date(), 6)).getTime(),
		setCeroHours(addDays(new Date(), 7)).getTime(),
	];

	return (
		<div className='select-container'>
			<DatePicker
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
