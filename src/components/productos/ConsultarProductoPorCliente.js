import React, { useEffect, useState } from 'react';
import { Container, Table, Form, Row,  Col } from 'react-bootstrap';
import { obtenerProductoPorClienteGET } from "../../services/api"
import BuscadorID from '../BuscadorID';
import ProductoItem from './ProductoItem';
import DropdownWithSearch from '../DropdownWithSearch';
import { buscarTodosClientesGET } from '../../services/api';

const ConsultarProductoPorCliente = () => {

  const [productos, setProductos] = useState([]);
  const [clienteId, setClienteId] = useState("");
  const [allclientes, setAllClientes] = useState([]);


  useEffect(() => {
    clienteId && obtenerProductoPorClienteGET(clienteId)
      .then(data => {
        setProductos(data);
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clienteId]);


  const buscarTodosLosClientes = () => {
    buscarTodosClientesGET()
      .then(data => {
        const options = data.map(
          c => {
            const option = {
              id: c.id,
              name: c.nombre,
            }
            return option;
          }
        );
        setAllClientes(options);
      }
      )
  }

  useEffect(() => {
    buscarTodosLosClientes();
  }, []);

  const handleOptionUpdated = (id) => {
    setClienteId(id);
  };

  return (
    <Container className='container-margin'>
     <h1>Consultar Productos Por Cliente</h1>
        
    <Container className='container-margin'>
      <Form>
        <Form.Group className="form-group" as={Row} controlId="formDijitevalorDeposito">
          <Form.Label column sm={3}>{"Digite nombre del cliente"}</Form.Label>
          <Col sm={9}>
            <DropdownWithSearch
              options={allclientes}
              current={undefined}
              handleOptionUpdated={handleOptionUpdated}
              title={"Digite el nombre del cliente"}>
            </DropdownWithSearch>

          </Col>
        </Form.Group>
      </Form>
      </Container>

      <br /><br /><br/>
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
          {productos.map((product, index) => (
            <ProductoItem product={product} index={index}></ProductoItem>
          ))}
        </tbody>

      </Table>
    </Container>
  );
};
export default ConsultarProductoPorCliente;
