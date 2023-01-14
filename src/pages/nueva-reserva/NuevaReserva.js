import React from 'react';
import { BreadCrumb } from '../../components/nueva-reserva/BreadCrumb';
import { Outlet } from 'react-router-dom';

export const NuevaReserva = () => {
	return (
		<div>
			<BreadCrumb />
			<Outlet />
		</div>
	);
};
