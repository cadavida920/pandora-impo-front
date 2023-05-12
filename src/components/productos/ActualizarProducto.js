import React, { useState } from 'react'
import {Container, Form, Button, Row, Col } from "react-bootstrap";
import { actualizarProductoPUT } from '../../services/api';



function ActualizarProducto() {
    const [actualizarFechaEnvio, setActualizarFechaEnvio] = useState("");
    const [estadoEnvio, setEstadoEnvio] = useState("");
    const [id, setId] = useState("");

    


const actualizarProductoHandler = () => {
}

const cambiarEstadoEnvio = () => {
    console.log("Cambiando estado");
}


const handleSubmit = (event) => {
    event.preventDefault();
    cambiarEstadoEnvio();
    const json = {
      id: id,
      estadoEnvio: obtenerEstadoEnvio(estadoEnvio)
    }
    actualizarProductoPUT(json)
    .then ( data => {
      setEstadoEnvio("");
      setActualizarFechaEnvio("");
      setId("")
    });
}

const obtenerEstadoEnvio = (estado) => estado.toLowerCase() === "enviado" ? 1 : 0;

const variant = 'primary';
return (
    <Container>
    <h1>Actualizar de Producto</h1>
    
      <Form onSubmit={handleSubmit}>

        <Form.Group className="form-group" as={Row} controlId="forActualizarFechaEnvio">
          <Form.Label column sm={3}>ActualizarFechaEnvio:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={actualizarFechaEnvio} onChange={(event) => setActualizarFechaEnvio(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="forEstadoEnvio">
          <Form.Label column sm={3}>EstadoEnvio:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={estadoEnvio} onChange={(event) => setEstadoEnvio(event.target.value)} />
          </Col>
        </Form.Group>


        <Form.Group className="form-group" as={Row} controlId="forId">
          <Form.Label column sm={3}>Id:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={id} onChange={(event) => setId(event.target.value)} />
          </Col>
        </Form.Group>



        <Button variant="primary" type="submit">
          Cambiar Estado de Envío
        </Button>
      </Form>
    </Container>
  );
}

export default ActualizarProducto;
  

