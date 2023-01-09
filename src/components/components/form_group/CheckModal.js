import React, { useState } from 'react';
import { Container, Form, Modal, Button } from 'react-bootstrap';

export const CheckModal = () => {
	const [showModal, setShowModal] = useState(false);
	const [check, setCheck] = useState(false);

	const handleChange = event => {
		setCheck(event.target.checked);
	};

	return (
		<Container className='mb-2'>
			<input
				type='checkbox'
				name='checkbox'
				onChange={handleChange}
				checked={check}
				required='required'
			/>
			<label
				className='btn btn-link'
				onClick={() => {
					setShowModal(true);
				}}
			>
				Términos y condiciones
			</label>

			<Modal show={showModal} scrollable={true}>
				<Modal.Header>
					<Modal.Title>Términos y condiciones</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Text>
						Los términos y condiciones son un conjunto de términos legales
						definidos por el propietario de una página web. Establecieron los
						términos y condiciones que rigen las actividades de los visitantes
						de la página web en dicho sitio web y la relación entre los
						visitantes del sitio y el propietario del sitio web. Los términos
						deben definirse de acuerdo con las necesidades específicas y la
						naturaleza de cada página web. Por ejemplo, una página web que
						ofrece productos a clientes en transacciones de comercio electrónico
						requiere términos que son diferentes de los términos de una página
						web que solo proporciona información. Los términos y condiciones son
						un conjunto de términos legales definidos por el propietario de una
						página web. Establecieron los términos y condiciones que rigen las
						actividades de los visitantes de la página web en dicho sitio web y
						la relación entre los visitantes del sitio y el propietario del
						sitio web. Los términos deben definirse de acuerdo con las
						necesidades específicas y la naturaleza de cada página web. Por
						ejemplo, una página web que ofrece productos a clientes en
						transacciones de comercio electrónico requiere términos que son
						diferentes de los términos de una página web que solo proporciona
						información. Los términos y condiciones son un conjunto de términos
						legales definidos por el propietario de una página web.
						Establecieron los términos y condiciones que rigen las actividades
						de los visitantes de la página web en dicho sitio web y la relación
						entre los visitantes del sitio y el propietario del sitio web. Los
						términos deben definirse de acuerdo con las necesidades específicas
						y la naturaleza de cada página web. Por ejemplo, una página web que
						ofrece productos a clientes en transacciones de comercio electrónico
						requiere términos que son diferentes de los términos de una página
						web que solo proporciona información. Los términos y condiciones son
						un conjunto de términos legales definidos por el propietario de una
						página web. Establecieron los términos y condiciones que rigen las
						actividades de los visitantes de la página web en dicho sitio web y
						la relación entre los visitantes del sitio y el propietario del
						sitio web. Los términos deben definirse de acuerdo con las
						necesidades específicas y la naturaleza de cada página web. Por
						ejemplo, una página web que ofrece productos a clientes en
						transacciones de comercio electrónico requiere términos que son
						diferentes de los términos de una página web que solo proporciona
						información.
					</Form.Text>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={() => {
							setCheck(true);
							setShowModal(false);
						}}
					>
						Aceptar
					</Button>
					<Button
						variant='primary'
						onClick={() => {
							setCheck(false);
							setShowModal(false);
						}}
					>
						Cancelar
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};
