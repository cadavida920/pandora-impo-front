import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { actualizarProductoPUT } from '../../services/api';



function ActualizarProducto() {

  const [estadoEnvio, setEstadoEnvio] = useState("");
  const [id, setId] = useState("");
  
   


  const cambiarEstadoEnvio = () => {
    console.log("Cambiando estado");
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    cambiarEstadoEnvio();
    const json = {
      id: id,
      estadoEnvio: estadoEnvio,
    }
    actualizarProductoPUT(json)
      .then(data => {
        setEstadoEnvio("");
        setId("");
      });
  }

  const variant = 'primary';
  return (
    <Container className='container-margin'>
      <h1>Actualizar de Producto</h1>

      <Form onSubmit={handleSubmit}>
        
        <Form.Group className="form-group" as={Row} controlId="forEstadoEnvio">
          <Form.Label column sm={3}>EstadoEnvio:</Form.Label>
          <Col sm={9}>
            <Form.Select value={estadoEnvio} onChange={(event) => setEstadoEnvio(event.target.value)}>
              <option value="">Seleccionar</option>
              <option value="PC">En proceso de compra</option>
              <option value="ETC">En tránsito a Colombia</option>
              <option value="EB">En bodega</option>
              <option value="LPE">Listo para enviar</option>
              <option value="ENTREGADO">Entregado</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="forId">
          <Form.Label column sm={3}>Id:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={id} onChange={(event) => setId(event.target.value)} />
          </Col>
        </Form.Group>

        <Button className='container-espacio' variant="primary" type="submit">
          Cambiar Estado de Envío
        </Button>
      </Form>
    </Container>
  );
}

export default ActualizarProducto;


