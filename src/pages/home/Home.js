import React from 'react';
import { UncontrolledCarousel } from '../../components/carousel/UncontrolledCarousel';

export const Home = () => {
	const user = JSON.parse(localStorage.getItem('userData'));
	return (
		<div>
			<UncontrolledCarousel />
			<br />
			<h1>Bienvenido al Resto {user && user.name}</h1>
		</div>
	);
};
