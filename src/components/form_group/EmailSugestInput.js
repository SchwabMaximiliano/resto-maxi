import React, { useEffect, useState } from 'react';
import '../../pages/styles.css';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';

export const EmailSugestInput = props => {
	const customEmails = ['gmail.com', 'hotmail.com', 'yahoo.com'];
	const [emails, setEmails] = useState(customEmails);
	const [emailSeleted, setEmailSelected] = useState('');
	const [change, setChange] = useState(false);

	const onSuggestionsFetchRequested = ({ value }) => {
		setEmails(filterEmails(value));
	};

	const filterEmails = value => {
		const index = value.indexOf('@');
		if (index === -1) {
			return [];
		}
		const substring = value.substring(index + 1, value.length);
		const filtered = customEmails.filter(email => email.includes(substring));
		return filtered[0] === substring ? [] : filtered;
	};

	const onSuggestionsClearRequested = () => {
		setEmails([]);
	};

	const getSuggestionValue = suggestion => {
		return suggestion;
	};

	const renderSuggestion = suggestion => (
		<div onClick={e => concatSuggestion(props.value, suggestion)}>
			{suggestion}
		</div>
	);

	const concatSuggestion = (value, suggestion) => {
		const index = value.indexOf('@');
		const substring = value.substring(0, index + 1);
		setEmailSelected(substring + suggestion);
		setChange(!change);
	};

	useEffect(() => {
		onChange('', { newValue: emailSeleted });
	}, [emailSeleted, change]);

	const onChange = (e, { newValue }) => {
		props.setValue(newValue);
	};

	const inputProps = {
		value: props.value,
		onChange,
	};

	return (
		<FormGroup className='mb-2'>
			<FormLabel htmlFor='text'>Mail</FormLabel>

			<Autosuggest
				suggestions={emails}
				onSuggestionsFetchRequested={onSuggestionsFetchRequested}
				onSuggestionsClearRequested={onSuggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={inputProps}
			/>
		</FormGroup>
	);
};
EmailSugestInput.propTypes = {
	value: PropTypes.any,
	setValue: PropTypes.any,
};
