import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { obtenerProductoPorClienteGET } from "../../services/api"
import BuscadorID from '../BuscadorID';
import formatColombianPesos from '../../services/currency';

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
    <Container>
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
          </tr>
        </thead>
        <tbody>
          {productos.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.descripcionProducto}</td>
              <td>{product.cantidad}</td>
              <td>{formatColombianPesos(product.costo) }</td>
              <td>{product.impuesto}</td>
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
  );
};

export default ConsultarProductoPorCliente;
