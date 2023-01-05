import React from "react";
import "../styles.css";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { REGEX } from "../../settings";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { bff } from '../../config';  
import { useParams } from 'react-router-dom';

export const PassForm = () => {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const {user} = useParams();

  const onSubmit = async (data) => {
    
    //post to backend
    await axios
      .post(`${bff}/api/user/update-pass`, {...data, user })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log(response);
          Swal.fire("Password recuperada", "Se ha reestablecido tu contraseña", "success");
          navigate("/login");
        } else {
          Swal.fire("Error!", "Datos invalidos", "error");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
      
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Recuperar Contraseña</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="mb-5">
            <FormLabel htmlFor="text">Ingresa tu nueva contraseña</FormLabel>
            <FormControl
              type="text"
              {...register("password", {
                required: "Password requerida",
                maxLength: {
                  value: 15,
                  message: "maximo 15 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "mínimo 5 caracteres",
                },
                pattern: {
                  value: REGEX.REGEX_ALPHANUMERIC_SPECIAL_CHARACTERS,
                  message:
                    "Contiene caracteres que no permitidos. Puedes utilizar alfanumérivo y !#$%&/()=*¨?¡",
                },
              })}
            />
            <small className="text-danger">
              <ErrorMessage errors={errors} name="password" />
            </small>
          </FormGroup>

          <Button type="submit" variant="success mt-2">
            Guardar Nueva Contraseña
          </Button>
        </Form>
        
      </div>
    </div>
  );
};