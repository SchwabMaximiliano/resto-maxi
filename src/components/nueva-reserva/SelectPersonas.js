import React from 'react';
import '../components.css';
import { RESERVA_CANTIDAD_PERSONAS } from '../../config';
import PropTypes from 'prop-types';

export const SelectPersonas = ({ personas, setPersonas }) => {
	return (
		<div className='select-container'>
			<select
				value={personas}
				onChange={event => setPersonas(event.target.value)}
			>
				{RESERVA_CANTIDAD_PERSONAS.map((cantPers, idx) => {
					return (
						<option key={idx} value={idx + 1}>
							{cantPers}
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
