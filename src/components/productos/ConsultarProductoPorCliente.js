import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { obtenerProductoPorClienteGET } from "../../services/api"
import BuscadorID from '../BuscadorID';
import formatColombianPesos from '../../services/currency';
import ProductoItem from './ProductoItem';

const ConsultarProductoPorCliente = () => {

  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState("");

  useEffect(() => {
    productoId && obtenerProductoPorClienteGET(productoId)
      .then(data => {
        setProductos(data);
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [productoId]);

  return (
    <Container className='container-margin'>
      <h1>Consultar Productos Por Cliente</h1>
      <BuscadorID title="Digite Cliente ID: " setId={setProductoId}></BuscadorID>
      <br/><br/><br/>

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
            <th>EstadoEnvio</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((product) => (
            <ProductoItem product={product}></ProductoItem>
          ))}
        </tbody>

      </Table>
    </Container>
  );
};
export default ConsultarProductoPorCliente;
