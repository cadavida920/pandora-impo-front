import React from 'react'
import { useState, useEffect } from 'react'
import { Table, Container } from 'react-bootstrap';
import { buscarDepositoClienteGET } from '../services/api';
import BuscadorID from './BuscadorID';




const BuscarDepositoCliente = () => {
  const [depositoId, setDepositoId] = useState();
  const depositoMock = [

    {
      "id": "1",
      "nombre": "andres",
      "valorDeposito": "100000"

    }
  ]

  const [deposito, setDeposito] = useState(depositoMock)

  const buscarDeposito = (id) => {
    id && buscarDepositoClienteGET(id)
      .then(data => {
        console.log(data);
        const productosArray = Array.from(data);
        setDeposito(productosArray);
        // que llenen ciertos campos 
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    buscarDeposito(depositoId);
  }, [depositoId]);

  return (
    <Container>
      <h1>Buscar depositos</h1>
      
      <BuscadorID title={"Digite id Deposito: "} setId={setDepositoId}></BuscadorID>
      
      <br /><br /><br />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>valorDeposito</th>
          </tr>
        </thead>

        <tbody>
          {deposito.map((deposito) => (
            <tr key={deposito.id}>
              <td>{deposito.id}</td>
              <td>{deposito.nombre}</td>
              <td>{deposito.valorDeposito}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  )
};

export default BuscarDepositoCliente;
