import React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import PropTypes from 'prop-types';

export const CustomInput = props => {
	return (
		<FormGroup className='mb-2'>
			<FormLabel htmlFor='text'>{props.label}</FormLabel>
			<FormControl
				type={props.type}
				{...props.register(props.name, {
					required: 'Campo obligatorio',
					maxLength: {
						value: props.maxLength,
						message: `máximo ${props.maxLength} caracteres`,
					},
					minLength: {
						value: props.minLength,
						message: `mínimo ${props.minLength} caracteres`,
					},
					pattern: {
						value: props.value,
						message: props.message,
					},
				})}
			/>
			<small className='text-danger'>
				<ErrorMessage errors={props.errors} name={props.name} />
			</small>
		</FormGroup>
	);
};

CustomInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.any,
	message: PropTypes.string,
	errors: PropTypes.any,
	register: PropTypes.any,
	maxLength: PropTypes.number,
	minLength: PropTypes.number,
};
