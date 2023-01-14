import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { ELEGIR_DIA, ELEGIR_HORA, PRECONFIRMACION } from '../../config/index';

export const BreadCrumb = () => {
	const location = useLocation().pathname;
	return (
		<Breadcrumb>
			<Breadcrumb.Item href='#'>Nueva Reserva</Breadcrumb.Item>
			<Breadcrumb.Item href='/nueva-reserva/cantidad-personas'>
				Cantidad
			</Breadcrumb.Item>
			{(location === ELEGIR_DIA ||
				location === ELEGIR_HORA ||
				location === PRECONFIRMACION) && (
				<Breadcrumb.Item href='/nueva-reserva/elegir-dia'>Día</Breadcrumb.Item>
			)}
			{(location === ELEGIR_HORA || location === PRECONFIRMACION) && (
				<Breadcrumb.Item href='/nueva-reserva/elegir-hora'>
					Hora
				</Breadcrumb.Item>
			)}
			{location === PRECONFIRMACION && (
				<Breadcrumb.Item href='/nueva-reserva/pre-confirmacion'>
					Pre-Confirmacion
				</Breadcrumb.Item>
			)}
		</Breadcrumb>
	);
};
