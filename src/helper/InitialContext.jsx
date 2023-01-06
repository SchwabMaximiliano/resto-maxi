/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { bff } from '../config';

const initialContext = React.createContext();

export function useInitialContext() {
	return useContext(initialContext);
}

export function Initialcontext({ children }) {
	const [publicKey, setPublicKey] = useState('');

	useEffect(() => {
		axios
			.get(`${bff}/api/user/publicKey`)
			.then(response => setPublicKey(response.data));
	}, []);

	return (
		<initialContext.Provider value={publicKey}>
			{children}
		</initialContext.Provider>
	);
}
