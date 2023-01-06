import React from 'react';

export const User = () => {
	const userData = JSON.parse(localStorage.getItem('userData'));
	return (
		<div>
			<h1>Hola {userData.name}</h1>
		</div>
	);
};
