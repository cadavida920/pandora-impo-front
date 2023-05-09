import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { crearDepositoClientePost } from '../services/api';

function AgregarDepositos() {
  const [ClienteId, setClienteId] = useState('');
  const [ValorDeposito, setValorDeposito] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const crearDeposito = {
      clienteId: ClienteId,
      valorDeposito: ValorDeposito
    }

    crearDepositoClientePost(crearDeposito)
      .then(data => {
        console.log(data);
        setClienteId("");
        setValorDeposito("")
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => { }, [ClienteId, ValorDeposito]);

  return (
    <Container>
      <h1>AgregarDepositos</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group" as={Row} controlId="formClienteId">
          <Form.Label column sm={3}>
            ClienteId:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              value={ClienteId}
              onChange={(event) => setClienteId(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formValorDeposito">
          <Form.Label column sm={3}>
            ValorDeposito:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              value={ValorDeposito}
              onChange={(event) => setValorDeposito(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          AgregarDepositos
        </Button>
      </Form>
    </Container>
  );
}

export default AgregarDepositos;
