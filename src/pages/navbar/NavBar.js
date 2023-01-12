import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../helper/InitialContext';

export const NavBar = () => {
	const { user, logOut } = useUserContext();
	const navigate = useNavigate();
	const handleNavigation = route => {
		logOut();
		navigate(route);
	};

	return (
		<>
			<Navbar className='navBg' bg='light' expand>
				<Container>
					<Navbar.Brand as={Link} to='/'>
						Resto-Maxi
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='justify-content-end'
					>
						{user !== null ? (
							<Dropdown>
								<Dropdown.Toggle
									variant='outline-secondary'
									id='dropdown-basic'
								>
									{
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='bi bi-person-fill'
											viewBox='0 0 16 16'
										>
											<path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
										</svg>
									}{' '}
									{user.name}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item as={Link} to='/user'>
										Mi cuenta
									</Dropdown.Item>
									<Dropdown.Item as={Link} to='/dashboard'>
										Reservas
									</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item
										onClick={() => {
											handleNavigation('/login');
										}}
									>
										Cerrar sesión
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						) : (
							<Button variant='outline-success' as={Link} to='/login'>
								Login
							</Button>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<section>
				<Outlet></Outlet>
			</section>
		</>
	);
};
