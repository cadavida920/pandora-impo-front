import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { CrearUsuarioPOST } from "../../services/api";

function CrearUsuario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    const CrearUsuario = {
      nombre: nombre,
      apellido: apellido,
      email: email
    }
    CrearUsuarioPOST(CrearUsuario)
      .then(data => {
        console.log(data);
        setNombre("");
        setApellido("");
        setEmail("");
      })
      .catch(error => {
        console.error(error);
      });

  };





  const variant = 'primary'
  return (
    <Container className="container-margin">

      <h1>CrearUsuario</h1>
      <Form onSubmit={handleSubmit}>



        <Form.Group className="form-group" as={Row} controlId="formNombre">
          <Form.Label column sm={3}>Nombre:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formApellido">
          <Form.Label column sm={3}>Apellido:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formEmail">
          <Form.Label column sm={3}>Email:</Form.Label>
          <Col sm={9}>
            <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Usuario
        </Button>
      </Form>
    </Container>

  );
}

export default CrearUsuario;
