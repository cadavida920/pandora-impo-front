import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { crearProductoPOST } from "../../services/api";
import DropdownWithSearch from "../DropdownWithSearch";
import { buscarTodosClientesGET } from "../../services/api";

function CrearProducto() {
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [costo, setCosto] = useState("");
  const [impuesto, setImpuesto] = useState("");
  const [costoEnvio, setCostoEnvio] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [allclientes, setAllclientes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const crearProducto = {
      descripcionProducto: descripcion,
      cantidad: cantidad,
      costo: costo,
      impuesto: impuesto,
      costoEnvio: costoEnvio,
      clienteId: clienteId,
      
    }

    crearProductoPOST(crearProducto)
      .then(data => {
        console.log(data);
        setDescripcion("");
        setCantidad("");
        setCosto("");
        setImpuesto("");
        setCostoEnvio("");
        setClienteId("")

      })
      .catch(error => {
        console.error(error);
      });
  };

  const buscarTodosLosClientes = () => {
    buscarTodosClientesGET()
      .then(data => {
        debugger;
        const options = data.map(
          c => {
            const option = { 
              id: c.id,
              name: c.nombre,
            }
            return option;
          }
        );
        setAllclientes(options);
       }
      )
  }

  useEffect(() => {
    buscarTodosLosClientes();
  },[]);

  


  const handleOptionUpdated = (clienteId) => {
    setClienteId(clienteId);
  };

  useEffect(() => {
  }, [descripcion, cantidad, costo, impuesto, costoEnvio, ]);


  const variant = 'primary'

  return (
    <Container className='container-margin'>
      <h1>Crear de Producto</h1>
      <Form onSubmit={handleSubmit}>


        <Form.Group className="form-group" as={Row} controlId="formDescripcion">
          <Form.Label column sm={3}>Descripción:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formCantidad">
          <Form.Label column sm={3}>Cantidad:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={cantidad} onChange={(event) => setCantidad(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formCosto">
          <Form.Label column sm={3}>Costo:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={costo} onChange={(event) => setCosto(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formImpuesto">
          <Form.Label column sm={3}>Impuesto:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={impuesto} onChange={(event) => setImpuesto(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formCostoEnvio">
          <Form.Label column sm={3}>Costo de envío:</Form.Label>
          <Col sm={9}>
            <Form.Control type="text" value={costoEnvio} onChange={(event) => setCostoEnvio(event.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="form-group" as={Row} controlId="formClienteId">
          <Form.Label column sm={3}>Cliente:</Form.Label>
          <Col sm={9}>
            
            <DropdownWithSearch
            options={allclientes}
            current={undefined}
            handleOptionUpdated={handleOptionUpdated}
            title={"Digite el nombre del producto"}>

            </DropdownWithSearch>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Producto
        </Button>
      </Form>
    </Container>
  );
}

export default CrearProducto;
