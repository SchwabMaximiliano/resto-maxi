import React, { useState } from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { REGEX } from '../../settings';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { bff } from '../../config';
import { CustomInput } from '../components/form_group/CustomInput';
import { EmailSugestInput } from '../components/form_group/EmailSugestInput';
import { ThreeToggleButtonForm } from '../components/form_group/ThreeToggleButtons';

export const RegisterForm = () => {
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [gender, setGender] = useState('');
	const [value, setValue] = useState('');

	const onSubmit = async data => {
		await axios
			.post(`${bff}/api/user/register`, {
				...data,
				gender,
				email: value,
				emailState: 'not verified',
				phoneState: 'not verified',
			})
			.then(response => {
				console.log(response.status);
				if (response.status === 201) {
					console.log(response);
					Swal.fire(
						'Usuario registrado',
						'Bienvenido.. te enviamos un link para validar tu correo',
						'success'
					);
					data.password = '';
					localStorage.setItem('userData', JSON.stringify(data));
					navigate('/user');
				} else {
					Swal.fire('Error!', 'Datos invalidos', 'error');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
			<div className='login'>
				<h2 className='mb-3'>Registro</h2>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<CustomInput
						label='Nombre'
						name='name'
						type='text'
						value={REGEX.REGEX_ALPHABETIC}
						message='Solo puedes utilizar caracteres alfabéticos'
						maxLength={50}
						minLength={5}
						errors={errors}
						register={register}
					/>
					<CustomInput
						label='Apellido'
						name='lastName'
						type='text'
						value={REGEX.REGEX_ALPHABETIC_SPECIAL}
						message="Solo puedes utilizar caracteres alfabéticos y ´'`"
						maxLength={50}
						minLength={5}
						errors={errors}
						register={register}
					/>
					<CustomInput
						label='DNI'
						name='dni'
						type='numeric'
						value={REGEX.REGEX_DNI}
						message='Solo puedes utilizar números'
						maxLength={10}
						minLength={1}
						errors={errors}
						register={register}
					/>
					<ThreeToggleButtonForm
						label='Genero'
						name='gender'
						value1='Masculino'
						value2='Femenino'
						value3='Otro'
						setValue={setGender}
					/>
					<CustomInput
						label='Telefono'
						name='phone'
						type='numeric'
						value={REGEX.REGEX_TEL_ARG_COD_AREA}
						message='Número invalido debes ingresar el codigo de area seguido del número ej: 1122527572'
						maxLength={10}
						minLength={10}
						errors={errors}
						register={register}
					/>
					<a
						href='https://www.argentina.gob.ar/pais/codigo-telefonia'
						target='_blank'
						rel='noreferrer'
					>
						Consulta aqui los códigos de área
					</a>
					<EmailSugestInput value={value} setValue={setValue} />
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
					<Button variant='success mt-2' type='submit'>
						Continuar
					</Button>{' '}
					<a href='/'>
						<Button variant='primary mt-2'>Inicio</Button>
					</a>
				</Form>
			</div>
		</div>
	);
};
