import React from 'react';
import '../styles.css';
import {
	Button,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
} from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { REGEX } from '../../settings';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import JSEncrypt from 'jsencrypt';
import { bff } from '../../config';
import { useInitialContext } from '../../helper/InitialContext';

export const LoginForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const navigate = useNavigate();
	const publicKey = useInitialContext();

	const onSubmit = async data => {
		// Encryption
		const encrypt = new JSEncrypt();
		// Assign our encryptor to utilize the public key.
		encrypt.setPublicKey(publicKey);
		const userEncrypted = encrypt.encrypt(data.user);
		const passwordEncrypted = encrypt.encrypt(data.password);
		const encryptedData = { user: userEncrypted, password: passwordEncrypted };

		// post to backend
		await axios
			.post(`${bff}/api/user/login`, encryptedData)
			.then(response => {
				console.log(response.status);
				if (response.status === 200) {
					console.log(response);
					localStorage.setItem('userData', JSON.stringify(response.data));
					navigate('/home');
				} else {
					Swal.fire('Error!', 'Datos invalidos', 'error');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleNavigation = route => {
		navigate(route);
	};

	return (
		<div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
			<div className='login'>
				<h2 className='mb-3'>Iniciar Sesión</h2>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormGroup className='mb-2'>
						<FormLabel htmlFor='text'>Usuario</FormLabel>
						<FormControl
							type='text'
							{...register('user', {
								required: 'Usuario requerido',
								maxLength: {
									value: 10,
									message: 'máximo 10 caracteres',
								},
								minLength: {
									value: 5,
									message: 'mínimo 5 caracteres',
								},
								pattern: {
									value: REGEX.REGEX_ALPHANUMERIC_TEN_CHARACTERS,
									message:
										'Solo puedes utilizar caracteres alfanumericos, no especiales',
								},
							})}
						/>
						<small className='text-danger'>
							<ErrorMessage errors={errors} name='user' />
						</small>
					</FormGroup>

					<FormGroup className='mb-5'>
						<FormLabel htmlFor='text'>Password</FormLabel>
						<FormControl
							type='text'
							{...register('password', {
								required: 'Password requerida',
								maxLength: {
									value: 15,
									message: 'maximo 15 caracteres',
								},
								minLength: {
									value: 5,
									message: 'mínimo 5 caracteres',
								},
								pattern: {
									value: REGEX.REGEX_ALPHANUMERIC_SPECIAL_CHARACTERS,
									message:
										'Contiene caracteres que no permitidos. Puedes utilizar alfanumérivo y !#$%&/()=*¨?¡',
								},
							})}
						/>
						<small className='text-danger'>
							<ErrorMessage errors={errors} name='password' />
						</small>
					</FormGroup>

					<Button type='submit' variant='success mt-2'>
						Iniciar Sesión
					</Button>
				</Form>

				<Button
					onClick={() => {
						handleNavigation('/register');
					}}
					variant='link'
				>
					Registrarme
				</Button>

				<Button
					onClick={() => {
						handleNavigation('/recoverpass');
					}}
					variant='link'
				>
					Olvidé mi password
				</Button>
			</div>
		</div>
	);
};