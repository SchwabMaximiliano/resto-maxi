import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadCrum = () => {
	return (
		<Breadcrumb>
			<Breadcrumb.Item href='#'>Reserva</Breadcrumb.Item>
			<Breadcrumb.Item href='#'>Nueva Reserva</Breadcrumb.Item>
			<Breadcrumb.Item href='/nueva-reserva/cantidad-personas'>
				Cantidad
			</Breadcrumb.Item>
			<Breadcrumb.Item href='/nueva-reserva/elegir-dia'>Día</Breadcrumb.Item>
			<Breadcrumb.Item href='/nueva-reserva/elegir-hora'>Hora</Breadcrumb.Item>
			<Breadcrumb.Item href='/nueva-reserva/pre-confirmacion'>
				Pre-Confirmacion
			</Breadcrumb.Item>
		</Breadcrumb>
	);
};
