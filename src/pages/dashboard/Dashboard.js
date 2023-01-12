import React from 'react';
import { CardCarousel } from '../../components/carousel/CardCarousel';
import '../../components/components.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
	useUserContext,
	useReservasContext,
} from '../../helper/InitialContext';

export const Dashboard = () => {
	const { user } = useUserContext();
	const { reservasVig, reservasHist } = useReservasContext();

	return (
		<div>
			<div className='page-carousel-container'>
				<h1 className='page-subtitle'>Bienvenido, {user.name}</h1>
				<CardCarousel title='Reservas vigentes' reservas={reservasVig} />
				<CardCarousel title='Historial de reservas' reservas={reservasHist} />
			</div>
			<footer className='page-footer'>
				<Button
					className='dashboard-button'
					as={Link}
					to='/nueva-reserva/cantidad-personas'
					variant='primary'
				>
					Nueva reserva
				</Button>
			</footer>
		</div>
	);
};
