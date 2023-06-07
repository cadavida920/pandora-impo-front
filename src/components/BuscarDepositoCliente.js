import React from 'react'
import { useState, useEffect } from 'react'
import { Table, Container } from 'react-bootstrap';
import { buscarDepositoClienteGET } from '../services/api';
import BuscadorID from './BuscadorID';
import formatColombianPesos from '../services/currency';




const BuscarDepositoCliente = () => {
  const [clienteId, setDepositoId] = useState();
  const [depositos, setDepositos] = useState([]);


  const buscarDeposito = (clienteId) => {
    clienteId && buscarDepositoClienteGET(clienteId)
      .then(data => {
        console.log(data);
        setDepositos(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    buscarDeposito(clienteId);
  }, [clienteId]);

  return (
    <Container className='container-margin'>

      <h1>Buscar depositos por cliente</h1>
      <BuscadorID title={"Digite id cliente: "} setId={setDepositoId}></BuscadorID>


      <br /><br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>valorDeposito</th>
          </tr>
        </thead>

        <tbody>
          {depositos.map((deposito) => (
            <tr key={deposito.id}>
              <td>{deposito.id}</td>
              <td>{deposito.cliente.nombre}</td>
              <td>{formatColombianPesos(deposito.valorDeposito)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default BuscarDepositoCliente;
