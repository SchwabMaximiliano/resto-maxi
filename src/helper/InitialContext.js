import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { bffresto } from '../config';
import PropTypes from 'prop-types';

const initialContext = React.createContext();
const userContext = React.createContext();
const reservasContext = React.createContext();

export function useInitialContext() {
	return useContext(initialContext);
}
export function useUserContext() {
	return useContext(userContext);
}

export function useReservasContext() {
	return useContext(reservasContext);
}

export function InitialContext({ children }) {
	// public key
	const [publicKey, setPublicKey] = useState('');
	useEffect(() => {
		axios
			.get(`${bffresto}/api/user/publicKey`)
			.then(response => setPublicKey(response.data));
	}, []);

	// User
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('userData'))
	);
	const userValue = {
		user,
		logIn: value => {
			setUser(value);
			localStorage.setItem('userData', JSON.stringify(value));
		},
		logOut: () => {
			localStorage.removeItem('userData');
			setUser(null);
		},
	};

	// reservas
	const reservasVig = [
		{
			personas: 1,
			fecha: '23/03/2022',
			hora: '22:30',
		},
		{
			personas: 2,
			fecha: '23/03/2022',
			hora: '22:30',
		},
		{
			personas: 3,
			fecha: '23/03/2022',
			hora: '22:30',
		},
	];
	const reservasHist = [
		{
			personas: 3,
			fecha: '23/03/2021',
			hora: '22:30',
		},
		{
			personas: 2,
			fecha: '23/03/2021',
			hora: '22:30',
		},
		{
			personas: 1,
			fecha: '23/03/2021',
			hora: '22:30',
		},
	];
	const reservasValue = {
		reservasVig,
		reservasHist,
	};

	return (
		<initialContext.Provider value={publicKey}>
			<userContext.Provider value={userValue}>
				<reservasContext.Provider value={reservasValue}>
					{children}
				</reservasContext.Provider>
			</userContext.Provider>
		</initialContext.Provider>
	);
}

InitialContext.propTypes = {
	children: PropTypes.any,
};
