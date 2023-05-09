
import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { buscarTodosClientesGET } from '../services/api';

const BuscarTodosClientes = () => {
  
  const [buscarTodosClientes, setbuscarTodosClientes] = useState([])

const buscarClientes = () => {

  buscarTodosClientesGET()
    .then(data => {
      setbuscarTodosClientes(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  useEffect (() => {buscarClientes()},[]);
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Balance</th>
          </tr>
        </thead>

        <tbody>
          {buscarTodosClientes.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.correo}</td>
              <td>{product.balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

  )
}

export default BuscarTodosClientes;









