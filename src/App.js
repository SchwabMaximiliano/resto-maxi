import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/login/LoginForm';
import { RegisterForm } from './components/register/RegisterForm';
import { RecoverPassForm } from './components/recover_pass/RecoverPassForm';
import { PassForm } from './components/recover_pass/PassForm';
import { Home } from './components/home/Home';
import { User } from './components/user/User';
import { NavBar } from './components/navbar/NavBar';
import { EmailConfirmed } from './components/email/EmailConfirmed';
import { EmailError } from './components/email/EmailError';
import { UncontrolledCarousel } from './components/carousel/Corousel';
import { NotFound } from './components/not_found/NotFound';
import { InitialContext } from './helper/InitialContext';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
	return (
		<InitialContext>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						name='carousel'
						exact
						path='/'
						element={<UncontrolledCarousel />}
					/>
					<Route name='home' exact path='home' element={<Home />} />
					<Route name='login' exact path='login' element={<LoginForm />} />
					<Route
						name='register'
						exact
						path='register'
						element={<RegisterForm />}
					/>
					<Route
						name='recoverpass'
						exact
						path='recoverpass'
						element={<RecoverPassForm />}
					/>
					<Route
						name='recoverpass-enterpass'
						exact
						path='recoverpass-enterpass/:user'
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
						name='dashboard'
						exact
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						name='email-error'
						exact
						path='/email-error'
						element={<EmailError />}
					/>
					<Route name='not-fount' path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</InitialContext>
	);
}

export default App;
