import React from 'react'
import './styles.css';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export const RecoverPassForm = () => {

  /*
  autocompletar sugiriendo  @gmail.com, @hotmail.com, @yahoo.com apenas escribe el arroba. 
  ver herramienta para recuperar cuenta
  */
  
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Recuperanción de password</h2>
        <form>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email"/>
            <Form.Text id="passwordHelpBlock" muted>
              Ingrese su Email para recuperar la password
            </Form.Text>
          </Form.Group>
          <Button variant="success mt-2">Recuperar</Button>{' '}
          <a href="/">
            <Button variant="primary mt-2">Inicio</Button>
          </a>
        </form>
      </div>
    </div>
  );
}
