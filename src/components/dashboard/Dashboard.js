import React from 'react';
import { CardCarousel } from '../components/carousel/CardCarousel';
import '../components/carousel/CardCarousel.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
	/*
	los estilos estan pisando algunos de los estilos de src/components/styles.css
	necesito achicar el div contenedor del CardCarousel y dejarlo de la mitad de la pantalla masomenos, 
	además tiene que seguir siendo responsive
	para llegar al dashboard, te logeas con cualquier cosa y apretas en reserva

	*/
	return (
		<div>
			<header className='page-header'>
				<p className='page-subtitle'>Bienvenido, User</p>
			</header>

			<CardCarousel />
			<CardCarousel />

			<footer className='page-header'>
				<Button as={Link} to='/login' variant='primary mt-2'>
					Nueva reserva
				</Button>
			</footer>
		</div>
	);
};
