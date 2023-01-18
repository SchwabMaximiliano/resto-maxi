import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { bffresto } from '../../config';
import PropTypes from 'prop-types';
import axios from 'axios';

export const SelectHour = ({ hourSelected, setHourSelected }) => {
	const [horarios, setHorarios] = useState([]);
	const [hourDisabled, setHourDisabled] = useState([]);

	const reserva = JSON.parse(localStorage.getItem('reservaData'));

	useEffect(() => {
		axios
			.get(`${bffresto}/api/horarios/todos/${reserva.date}/${reserva.personas}`)
			.then(response => {
				setHorarios(response.data.horarios);
				setHourDisabled(response.data.horarios_no_disponibles);
			});
	}, []);

	return (
		<div className='select-container'>
			<ButtonGroup className='select-container'>
				{horarios.map((hour, idx) => (
					<ToggleButton
						className='mb-2'
						key={idx}
						id={`hour-${idx}`}
						type='radio'
						variant='secondary'
						name='hour'
						value={hour.nombre}
						checked={hourSelected === hour.nombre}
						onChange={e => setHourSelected(e.currentTarget.value)}
						disabled={hourDisabled.indexOf(hour.nombre) !== -1}
					>
						{hour.nombre}
					</ToggleButton>
				))}
			</ButtonGroup>
		</div>
	);
};
SelectHour.propTypes = {
	hourSelected: PropTypes.any,
	setHourSelected: PropTypes.any,
};
