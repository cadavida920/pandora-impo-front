import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { obtenerProductoPorClienteGET } from "../../services/api"
import BuscadorID from '../BuscadorID';

const ConsultarProductoPorCliente = () => {

  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState();

  useEffect(() => {
    productoId && obtenerProductoPorClienteGET(productoId)
      .then(data => {
        setProductos(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [productoId]);

  return (
    <Container>
      <BuscadorID title="Digite Cliente ID: " setId={setProductoId}></BuscadorID>
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
              <td>{product.costo}</td>
              <td>{product.impuesto}</td>
              <td>{product.costoEnvio}</td>
              <td>{product.precioVenta}</td>
              <td>{product.valorRestante}</td>
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
