import React, {useEffect, useState} from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Autosuggest from 'react-autosuggest';

export const RecoverPassForm = () => {

  /* 
  ver herramienta para recuperar cuenta
  */
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  // Autosugest
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
    data.email=value;
    console.log(data);

    /*
    await axios
      .post(`${base}/api/user/register`, data) 
      .then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          console.log(response);
          Swal.fire("recuperacion en proceso", "Te enviamos un link para recuperar tu correo", "success");
          localStorage.setItem("userData", JSON.stringify(data));
          navigate("/user");
        } else {
          Swal.fire("Error!", "Datos invalidos", "error");
        }
      })
      .catch(function(error) {
        console.log(error);
      }); 
      */
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Recuperanción de password</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Autosuggest
              suggestions={emails}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Ingrese su Email para recuperar la password
            </Form.Text>
          </Form.Group>
          <Button variant="success mt-2" type="submit">Recuperar</Button>{' '}
          <a href="/">
            <Button variant="primary mt-2">Inicio</Button>
          </a>
        </Form>
      </div>
    </div>
  );
}
