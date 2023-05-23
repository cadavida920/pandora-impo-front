import React, { Component } from 'react'
import { useState } from 'react';
import { Table, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { consultarProductoPorIdGET } from '../../services/api';
import formatColombianPesos from '../../services/currency';

const ConsultarProductoPorId = () => {
  const [productos, setProductos] = useState([]);
  const [buscarId, setBuscarId] = useState("");

  const buscarProductoPorId = (id) => {
    consultarProductoPorIdGET(id)
      .then(data => {
        console.log(data);
        const productosArray = [data];
        setProductos(productosArray);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarProductoPorId(buscarId);
  };

  return (
    <Container>
      <h1>BuscarProductoPorId</h1>
      <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group" as={Row} controlId="formBuscarId">
          <Form.Label column sm={3}>Buscar por ID:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={buscarId} onChange={(event) => setBuscarId(event.target.value)} />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" className='small-button'>
            Buscar
          </Button>
      </Form>
      </Container>

      <br/>

      <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción Producto</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Impuesto</th>
            <th>Costo Envío</th>
            <th>Precio Venta</th>
            <th>Valor Restante</th>
            <th>Estado Envío</th>
            <th>Estado Pago</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.descripcionProducto}</td>
              <td>{product.cantidad}</td>
              <td>{formatColombianPesos(product.costo)}</td>
              <td>{formatColombianPesos(product.impuesto)}</td>
              <td>{formatColombianPesos(product.costoEnvio)}</td>
              <td>{formatColombianPesos(product.precioVenta)}</td>
              <td>{formatColombianPesos(product.valorRestante)}</td>
              <td>{product.estadoEnvio}</td>
              <td>{product.estadoPago}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
    </Container>
  );
};

export default ConsultarProductoPorId;  
