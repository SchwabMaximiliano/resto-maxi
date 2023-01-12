import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './pages/login/LoginForm';
import { RegisterForm } from './pages/register/RegisterForm';
import { RecoverPassForm } from './pages/recover_pass/RecoverPassForm';
import { PassForm } from './pages/recover_pass/PassForm';
import { Home } from './pages/home/Home';
import { User } from './pages/user/User';
import { NavBar } from './pages/navbar/NavBar';
import { EmailConfirmed } from './pages/email/EmailConfirmed';
import { EmailError } from './pages/email/EmailError';
import { NotFound } from './pages/not_found/NotFound';
import { InitialContext } from './helper/InitialContext';
import { Dashboard } from './pages/dashboard/Dashboard';
import { CantidadPersonas } from './pages/nueva-reserva/cantidad_personas/CantidadPersonas';
import { ElegirDia } from './pages/nueva-reserva/elegir_dia/ElegirDia';
import { ElegirHora } from './pages/nueva-reserva/elegir_hora/ElegirHora';
import { PreConfirmacion } from './pages/nueva-reserva/pre_confirmacion/PreConfirmacion';
import { Exito } from './pages/nueva-reserva/exito/Exito';
import { NuevaReserva } from './pages/nueva-reserva/NuevaReserva';

function App() {
	return (
		<InitialContext>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route name='home' exact path='/' element={<Home />} />
					<Route name='login' exact path='/login' element={<LoginForm />} />
					<Route
						name='register'
						exact
						path='/register'
						element={<RegisterForm />}
					/>
					<Route
						name='recoverpass'
						exact
						path='/recoverpass'
						element={<RecoverPassForm />}
					/>
					<Route
						name='recoverpass-enterpass'
						exact
						path='/recoverpass-enterpass/:user'
						element={<PassForm />}
					/>
					<Route name='user' exact path='user' element={<User />} />
					<Route
						name='email-confirmed'
						exact
						path='/email-confirmed'
						element={<EmailConfirmed />}
					/>
					<Route
						name='email-error'
						exact
						path='/email-error'
						element={<EmailError />}
					/>
					<Route
						name='dashboard'
						exact
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						name='nueva-reserva'
						exact
						path='/nueva-reserva'
						element={<NuevaReserva />}
					>
						<Route
							name='cantidad-personas'
							exact
							path='cantidad-personas'
							element={<CantidadPersonas />}
						/>

						<Route
							name='elegir-dia'
							exact
							path='elegir-dia'
							element={<ElegirDia />}
						/>
						<Route
							name='elegir-hora'
							exact
							path='elegir-hora'
							element={<ElegirHora />}
						/>
						<Route
							name='pre-confirmacion'
							exact
							path='pre-confirmacion'
							element={<PreConfirmacion />}
						/>
					</Route>
					<Route name='exito' exact path='exito' element={<Exito />} />
					<Route name='not-fount' path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</InitialContext>
	);
}

export default App;
