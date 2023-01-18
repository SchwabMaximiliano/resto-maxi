import React, { useEffect, useState } from 'react';
import '../components.css';
import { bffresto } from '../../config';
import PropTypes from 'prop-types';
import axios from 'axios';

export const SelectPersonas = ({ personas, setPersonas }) => {
	const [mesas, setMesas] = useState([]);
	useEffect(() => {
		axios
			.get(`${bffresto}/api/mesas/todas`)
			.then(response => setMesas(response.data));
	}, []);
	const mesasOrdenadas = mesas.sort((a, b) => a.personas_nro - b.personas_nro);
	return (
		<div className='select-container'>
			<select
				value={personas}
				onChange={event => setPersonas(event.target.value)}
			>
				{mesasOrdenadas.map((mesa, idx) => {
					return (
						<option key={idx} value={mesa.personas_nro}>
							{mesa.personas}
						</option>
					);
				})}
			</select>
		</div>
	);
};

SelectPersonas.propTypes = {
	personas: PropTypes.number,
	setPersonas: PropTypes.any,
};
