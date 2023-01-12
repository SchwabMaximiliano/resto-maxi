import React from 'react';
import '../../pages/styles.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Form, FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ThreeToggleButtonForm = props => {
	return (
		<FormGroup>
			<Form.Label htmlFor='text'>{props.label}</Form.Label>
			<ToggleButtonGroup
				className='mb-2'
				type='radio'
				defaultValue={props.value1}
				name={props.name}
				onChange={e => props.setValue(e)}
			>
				<ToggleButton
					variant='outline-secondary'
					id='tbg-radio-1'
					value={props.value1}
				>
					{props.value1}
				</ToggleButton>
				<ToggleButton
					variant='outline-secondary'
					id='tbg-radio-2'
					value={props.value2}
				>
					{props.value2}
				</ToggleButton>
				<ToggleButton
					variant='outline-secondary'
					id='tbg-radio-3'
					value={props.value3}
				>
					{props.value3}
				</ToggleButton>
			</ToggleButtonGroup>
		</FormGroup>
	);
};
ThreeToggleButtonForm.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	value1: PropTypes.string,
	value2: PropTypes.string,
	value3: PropTypes.string,
	setValue: PropTypes.any,
};
