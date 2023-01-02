import React, {useEffect, useState} from "react";
import "./styles.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm} from "react-hook-form";
import { REGEX } from "../settings";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Autosuggest from 'react-autosuggest';

export const RegisterForm = () => {
   
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [ gender,setGender] = useState('');

  // autosuggest
  const customEmails = ['gmail.com' , 'hotmail.com', 'yahoo.com'];
  const[emails, setEmails]= useState(customEmails);
  const[value, setValue]= useState("");
  const[emailSeleted, setEmailSelected]= useState("");
  const[change, setChange]= useState(false);

  const onSuggestionsFetchRequested=({value})=>{
    setEmails(filterEmails(value));
  }
  
  const filterEmails=(value)=>{
    let index = value.indexOf("@");
    if(index === -1){
      return [];
    }
    const substring = value.substring(index+1, value.length);
    const filtered = customEmails.filter((email)=> email.includes(substring));
    return filtered[0] === substring? [] : filtered;
  }
  
  const onSuggestionsClearRequested = () =>{
    setEmails([]);
  }
  
  const getSuggestionValue=(suggestion)=>{
    return suggestion;
  }
  
  const renderSuggestion=(suggestion)=>(
    <div onClick={(e)=>concatSuggestion(value, suggestion)}>
      {suggestion}
    </div>
  )

  const concatSuggestion = (value, suggestion)=>{
    let index = value.indexOf("@");
    const substring = value.substring(0, index+1);
    setEmailSelected(substring+suggestion);
    setChange(!change);
  }

  useEffect(()=>{
    onChange('', {newValue: emailSeleted});
  },[emailSeleted,change])
  
  const onChange=(e, {newValue})=>{
    setValue(newValue);
  }
  
  const inputProps={
  value,
  onChange
  }
  // --

  var base=process.env.DB_HOST||"http://localhost:4000";

  const onSubmit = async (data) => {
    data.gender=gender;
    data.email=value;
    data.emailState="not verified";
    data.phoneState="not verified";
    
    await axios
      .post(`${base}/api/user/register`, data) 
      .then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          console.log(response);
          Swal.fire("Usuario registrado", "Bienvenido.. te enviamos un link para validar tu correo", "success");
          data.password="";
          localStorage.setItem("userData", JSON.stringify(data));
          navigate("/user");
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
        <h2 className="mb-3">Registro</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <FormGroup className="mb-2">
              <FormLabel htmlFor="text">Nombre</FormLabel>
              <FormControl type="text" {...register("name", {
                  required: "Nombre requerido",
                  maxLength: {
                    value: 50,
                    message: "máximo 50 caracteres",
                  },
                  minLength: {
                    value: 5,
                    message: "mínimo 1 caracteres",
                  },
                  pattern: {
                    value: REGEX.REGEX_ALPHABETIC,
                    message:
                      "Solo puedes utilizar caracteres alfabéticos",
                  },
                })}
              />
              <small className="text-danger"><ErrorMessage errors={errors} name="name" /></small>
          </FormGroup>
                
          <FormGroup className="mb-2">
            <FormLabel htmlFor="text">Apellido</FormLabel>
            <FormControl type="text" {...register("lastName", {
                required: "Apellido requerido",
                maxLength: {
                  value: 50,
                  message: "máximo 50 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "mínimo 5 caracteres",
                },
                pattern: {
                  value: REGEX.REGEX_ALPHABETIC_SPECIAL,
                  message:
                    "Solo puedes utilizar caracteres alfanumericos y ´'`",
                },
              })}
            />
            <small className="text-danger"><ErrorMessage errors={errors} name="lastName" /></small>
          </FormGroup>

          <FormGroup className="mb-2">
            <FormLabel htmlFor="text">DNI</FormLabel>
            <FormControl type="numeric" {...register("dni", {
                required: "Dni requerido",
                maxLength: {
                  value: 10,
                  message: "máximo 10 digitos",
                },
                pattern: {
                  value: REGEX.REGEX_DNI,
                  message:
                    "Solo puedes utilizar números",
                },
              })}
            />
            <small className="text-danger"><ErrorMessage errors={errors} name="dni" /></small>
          </FormGroup>       

          <FormGroup >
          <Form.Label htmlFor="text">Genero</Form.Label>
          <ToggleButtonGroup  className="mb-2" type="radio" defaultValue="Otro"  name="gender" onChange={e=>setGender(e)}>
            <ToggleButton   variant="outline-secondary" id="tbg-radio-1" value="Masculino">
              Masculino
            </ToggleButton>
            <ToggleButton    variant="outline-secondary" id="tbg-radio-2" value="Femenino">
              Femenino
            </ToggleButton>
            <ToggleButton   variant="outline-secondary" id="tbg-radio-3" value="Otro">
              Otro
            </ToggleButton>
          </ToggleButtonGroup>
  
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel htmlFor="text">Telefono</FormLabel>
            <FormControl type="numeric" {...register("phone", {
                required: "Teléfono requerido",
                maxLength: {
                  value: 10,
                  message: "máximo 10 digitos",
                },
                minLength: {
                  value: 10,
                  message: "mínimo 10 digitos",
                },
                pattern: {
                  value: REGEX.REGEX_TEL_ARG_COD_AREA,
                  message:
                    "Número invalido debes ingresar el codigo de area seguido del número ej: 1122527572",
                },
              })}
            />
            <small className="text-danger"><ErrorMessage errors={errors} name="phone" /></small> <br/>
            <a href="https://www.argentina.gob.ar/pais/codigo-telefonia" target="_blank" rel="noreferrer">Consulta aqui los códigos de área</a>
          </FormGroup>

          <FormGroup className="mb-2">
            <FormLabel htmlFor="text">Mail</FormLabel>
            
            <Autosuggest
              suggestions={emails}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </FormGroup>

          <FormGroup className="mb-2">
            <FormLabel htmlFor="text">Usuario</FormLabel>
            <FormControl type="text" {...register("user", {
                required: "Usuario requerido",
                maxLength: {
                  value: 10,
                  message: "máximo 10 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "mínimo 5 caracteres",
                },
                pattern: {
                  value: REGEX.REGEX_ALPHANUMERIC_TEN_CHARACTERS,
                  message:
                    "Solo puedes utilizar caracteres alfanumericos, no especiales",
                },
              })}
            />
            <small className="text-danger"><ErrorMessage errors={errors} name="user" /></small>
          </FormGroup>

          <FormGroup className="mb-2">
            <FormLabel htmlFor="text">Password</FormLabel>
            <FormControl type="text" {...register("password", {
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
                    'Contiene caracteres que no permitidos. Puedes utilizar alfanumérivo y !#$%&/()=*¨?¡',
                },
              })}
            />
            <small className="text-danger"><ErrorMessage errors={errors} name="password" /></small>
          </FormGroup>
          
          <Button variant="success mt-2" type="submit">Continuar</Button>{" "}
          <a href="/"><Button variant="primary mt-2">Inicio</Button></a>
        </Form>
      </div>
    </div>
  );
};

