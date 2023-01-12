import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { RESERVA_HORARIOS } from '../../config';
import PropTypes from 'prop-types';

export const SelectHour = ({ hourSelected, setHourSelected }) => {
	const hourDisabled = '23:00';
	return (
		<div className='select-container'>
			<ButtonGroup className='select-container'>
				{RESERVA_HORARIOS.map((hour, idx) => (
					<ToggleButton
						className='mb-2'
						key={idx}
						id={`hour-${idx}`}
						type='radio'
						variant='secondary'
						name='hour'
						value={hour.value}
						checked={hourSelected === hour.value}
						onChange={e => setHourSelected(e.currentTarget.value)}
						disabled={hour.value === hourDisabled}
					>
						{hour.name}
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
/*
<Button className='mb-2' variant='secondary' size='lg'>
	20:00
</Button>
<Button className='mb-2' variant='secondary' size='lg'>
	21:30
</Button>
<Button className='mb-2' variant='secondary' size='lg' disabled>
	23:00
</Button>

*/
