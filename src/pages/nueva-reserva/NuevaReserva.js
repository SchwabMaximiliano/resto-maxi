import React from 'react';
import { BreadCrum } from '../../components/nueva-reserva/BreadCrum';
import { Outlet } from 'react-router-dom';

export const NuevaReserva = () => {
	return (
		<div>
			<BreadCrum />
			<Outlet />
		</div>
	);
};
