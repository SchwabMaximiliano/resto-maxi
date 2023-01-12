import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components.css';
import PropTypes from 'prop-types';

export const SelectDay = ({ dateSelected, setDateSelected }) => {
	return (
		<div className='select-container'>
			<DatePicker
				selected={dateSelected}
				onChange={date => setDateSelected(date)}
				excludeDates={[new Date()]}
				placeholderText='Selecciona una fecha disponible'
				strictParsing
			/>
		</div>
	);
};

SelectDay.propTypes = {
	dateSelected: PropTypes.any,
	setDateSelected: PropTypes.any,
};
