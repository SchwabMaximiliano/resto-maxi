import React from 'react';
import '../styles.css';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { REGEX } from '../../settings';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import JSEncrypt from 'jsencrypt';
import { bff } from '../../config';
import { useInitialContext } from '../../helper/InitialContext';
import { CustomInput } from '../components/form_group/CustomInput';

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
		console.log(data);
		// post to backend
		await axios
			.post(`${bff}/api/user/login`, encryptedData)
			.then(response => {
				console.log(response.status);
				if (response.status === 200) {
					console.log(response);
					localStorage.setItem('userData', JSON.stringify(response.data));
					navigate('/home');
				}
				if (response.status === 401) {
					Swal.fire('Error!', 'Datos invalidos', 'error');
				} else {
					Swal.fire('Error!', 'Error de servidor', 'error');
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
					<CustomInput
						label='Usuario'
						name='user'
						type='text'
						value={REGEX.REGEX_ALPHANUMERIC_TEN_CHARACTERS}
						message='Solo puedes utilizar caracteres alfanumericos, no especiales'
						maxLength={10}
						minLength={5}
						errors={errors}
						register={register}
					/>

					<CustomInput
						label='Password'
						name='password'
						type='text'
						value={REGEX.REGEX_ALPHANUMERIC_SPECIAL_CHARACTERS}
						message='Contiene caracteres que no permitidos. Puedes utilizar alfanumérico y !#$%&/()=*¨?¡'
						maxLength={15}
						minLength={5}
						errors={errors}
						register={register}
					/>

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
