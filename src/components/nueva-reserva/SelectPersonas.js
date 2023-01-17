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
		console.log(mesas);
	}, []);
	return (
		<div className='select-container'>
			<select
				value={personas}
				onChange={event => setPersonas(event.target.value)}
			>
				{mesas.map((mesa, idx) => {
					return (
						<option key={idx} value={idx + 1}>
							{mesa.personas}
						</option>
					);
				})}
			</select>
		</div>
	);
};

SelectPersonas.propTypes = {
	personas: PropTypes.string,
	setPersonas: PropTypes.any,
};
