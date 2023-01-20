import React, { useState, useEffect } from 'react';
import { CardCarousel } from '../../components/carousel/CardCarousel';
import '../../components/components.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../helper/InitialContext';
import axios from 'axios';
import { bffresto } from '../../config';

export const Dashboard = () => {
	const { user } = useUserContext();
	const [reservas, setReservas] = useState([]);
	user &&
		useEffect(() => {
			axios
				.get(`${bffresto}/api/reservas/todas/${user._id}`)
				.then(response => setReservas(response.data));
		}, []);

	return (
		<div>
			<div className='page-carousel-container'>
				<p className='page-subtitle'>
					<b>Bienvenido {user.name}</b>
				</p>
				<CardCarousel title='Reservas vigentes' reservas={reservas.vigentes} />
				<CardCarousel
					title='Historial de reservas'
					reservas={reservas.historicas}
				/>
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
